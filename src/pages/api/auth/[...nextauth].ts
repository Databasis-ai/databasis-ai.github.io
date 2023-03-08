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
		async redirect({ url }) {
			// return '/reports'
		}
	},
	providers: [
		GoogleProvider({
			clientId: '803493991264-jv4als9c5bhd6c37u58g89r4evn155f4.apps.googleusercontent.com',
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



