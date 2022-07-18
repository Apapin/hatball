import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import globalCSSUrl from "./styles/global.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: globalCSSUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Hatball | Characters list for Storybook Brawl",
  description:
    "A visual guide to every Storybook Brawl character, spell, treasure and hero, with helpful search & filter features.",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({});
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
        <!-- ConveyThis code -->
<script src="//cdn.conveythis.com/javascript/conveythis-initializer.js"></script>
<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", function(e) {
		ConveyThis_Initializer.init({
			api_key: "pub_093ae53fc1ed3d9e5508aed84705ec9b"
		});
	});
</script>
<!-- End ConveyThis code -->
      </head>
      <body className="h-full overflow-hidden bg-darkbg text-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
