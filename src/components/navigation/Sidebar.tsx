import classNames from "classnames";
import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import {
	HiInboxIn,
	HiViewGrid,
} from "react-icons/hi";

import { useSidebarContext } from "../../context/SidebarContext";
import isSmallScreen from "../../helpers/is-small-screen";
import { AiFillSetting } from "react-icons/ai";

const ExampleSidebar: FC = function () {
	const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } =
		useSidebarContext();

	const [currentPage, setCurrentPage] = useState("");
	const [isEcommerceOpen, setEcommerceOpen] = useState(true);
	const [isUsersOpen, setUsersOpen] = useState(true);

	useEffect(() => {
		const newPage = window.location.pathname;

		setCurrentPage(newPage);
		setEcommerceOpen(newPage.includes("/e-commerce/"));
		setUsersOpen(newPage.includes("/users/"));
	}, [setCurrentPage, setEcommerceOpen, setUsersOpen]);

	return (
		<div
			className={classNames("lg:!block", {
				hidden: !isSidebarOpenOnSmallScreens,
			})}
		>
			<Sidebar
				aria-label="Sidebar with multi-level dropdown example"
				collapsed={isSidebarOpenOnSmallScreens && !isSmallScreen()}
			>
				<div className="flex h-full flex-col justify-between py-2">
					<div>
						<Sidebar.Items>
							<Sidebar.ItemGroup>
								<Sidebar.Item href="/kanban" icon={HiViewGrid} label="2" className={"/kanban" === currentPage ? "bg-gray-700" : ""}>
									Databases
								</Sidebar.Item>
								<Sidebar.Item href="/mailing/inbox" icon={HiInboxIn} label="4" className={"/mailing/inbox" === currentPage ? "bg-gray-700" : ""}>
									Streams
								</Sidebar.Item>
								<Sidebar.Collapse icon={AiFillSetting} label="Settings" open={isEcommerceOpen}>
									<Sidebar.Item href="/e-commerce/billing" className={"/e-commerce/billing" === currentPage ? "bg-gray-700" : ""}>
										Billing
									</Sidebar.Item>
								</Sidebar.Collapse>
							</Sidebar.ItemGroup>
						</Sidebar.Items>
					</div>
				</div>
			</Sidebar>
		</div>
	);
};



export default ExampleSidebar;
