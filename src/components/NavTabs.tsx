import Link from "next/link";
import { useRouter } from "next/router";

export default function NavTabs() {
  const router = useRouter();
  const tabs = [
			{ name: "Research", href: `/research` },
			{ name: "Portfolio", href: `/portfolio` },
			{ name: "Settings", href: `/settings` },
	];

  return (
    <div className="-mb-0.5 flex h-12 items-center justify-start space-x-2">
      {tabs.map(({ name, href }) => (
        <Link key={href} href={href}>
          <div
            className={`border-b-2 p-1 ${
              router.asPath.split("?")[0] === href
                ? "border-black text-black"
                : "border-transparent text-gray-600 hover:text-black"
            }`}
          >
            <div className="rounded-md px-3 py-2 transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
              <p className="text-sm">{name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
