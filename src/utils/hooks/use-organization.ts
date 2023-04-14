import { OrganizationContext } from "@/context/OrganizationContext";
import { useContext } from "react";


export const useCurrentOrganization = () => {
	const currentOrgContext = useContext(OrganizationContext);
	if (!currentOrgContext) {
		throw new Error(
			"currentOrgContext has to be used within <CurrentOrganizationContext.Provider>"
		);
	}
	return currentOrgContext;
}