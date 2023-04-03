import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),

	callbacks: {
		session(params) {
			return params.session;
		},
		redirect() {
			return '/dashboard'
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



