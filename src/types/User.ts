import type { DefaultUser } from "next-auth";
import type { Organization } from "@prisma/client";
export interface User extends DefaultUser {
	organizations: Organization[]
	id: string
}


