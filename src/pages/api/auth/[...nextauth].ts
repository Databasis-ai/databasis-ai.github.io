import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
	session: {
		// Choose how you want to save the user session.
		// The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
		// If you use an `adapter` however, we default it to `"database"` instead.
		// You can still force a JWT session by explicitly defining `"jwt"`.
		// When using `"database"`, the session cookie will only contain a `sessionToken` value,
		// which is used to look up the session in the database.
		strategy: "database",

		// Seconds - How long until an idle session expires and is no longer valid.
		maxAge: 30 * 24 * 60 * 60, // 30 days

		// Seconds - Throttle how frequently to write to database to extend a session.
		// Use it to limit write operations. Set to 0 to always update the database.
		// Note: This option is ignored if using JSON Web Tokens
		updateAge: 24 * 60 * 60, // 24 hours

	},
	callbacks: {
		session({ session, user }) {
			if (session.user) {
				session.user.id = user.id;
			}
			return session;
		},
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: '390510178312-ic9vpej0mrge0pkad7oa93fctvdgv85h.apps.googleusercontent.com',
			clientSecret: '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',
		}),
	],
};
// GOOGLE_CLIENT_ID=390510178312-ic9vpej0mrge0pkad7oa93fctvdgv85h.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET=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
export default NextAuth(authOptions);
