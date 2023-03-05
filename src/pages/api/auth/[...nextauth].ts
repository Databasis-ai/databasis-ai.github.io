import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: '/enter'
	},
	callbacks: {
		session(params) {
			return params.session;
		},
		async redirect({ url }) {
			return '/reports'
		}
	},
	providers: [
		GoogleProvider({
			clientId: '390510178312-ic9vpej0mrge0pkad7oa93fctvdgv85h.apps.googleusercontent.com',
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



