import NextAuth, { type NextAuthOptions, type Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { type Organization } from "@prisma/client";
import type { DefaultUser } from "next-auth";

export interface User extends DefaultUser {
	organizations: Organization[]
	id: string
}

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),

	callbacks: {
		// session is the session we're sending to the client, user is the user we're getting from the database
		// to add additional properties to the session, we need to return the session with those props attached
		async session({ session, user }) {
			const sessionUser = session?.user as User;
			// if we already have the user's organizations, we've already done the statement below

			if (!sessionUser?.organizations) {
				const DB_USER = await prisma.user.findUnique({
					where: {
						id: user.id
					},
					include: {
						organizations: true
					}
				});

				if (!DB_USER) {
					throw new Error('User not found in database');
				}
				session.user = DB_USER;
			}
			return session;
		},
		redirect() {
			return '/dashboard/insights'
		}
	},
	providers: [
		GoogleProvider({
			clientId: '436056021800-883c764ukuako82am5jk8mnk7t502ir4.apps.googleusercontent.com',
			clientSecret: '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',
		})
	],
	events: {
		async createUser(message) {
			const user = message.user;
			// insert organization, assign user to unknown organization
			await prisma.organization.create({
				data: {
					name: 'unknown',
					users: {
						connect: {
							id: user.id
						}
					}
				}
			});
			return;
		}
	}
};
export default NextAuth(authOptions);



