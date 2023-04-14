//pages/sitemap.xml.js
import type { GetServerSidePropsContext } from "next";

function generateSiteMap() {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.rowvolution.io</loc>
     </url>
     <url>
       <loc>https://www.rowvolution.io/pricing</loc>
     </url>
   </urlset>
 `;
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ req, res }: {
	req: GetServerSidePropsContext["req"];
	res: GetServerSidePropsContext["res"];
}) {
	const sitemap = generateSiteMap();

	res.setHeader('Content-Type', 'text/xml');
	// we send the XML to the browser
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

export default SiteMap;
