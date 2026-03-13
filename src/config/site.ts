import { USER } from "@/portfolio/data/user";
import type { NavItem } from "@/portfolio/types/nav";

export const SITE_INFO = {
    name: USER.displayName,
    url: process.env.APP_URL || "https://alkush.xyz",
    ogImage: USER.ogImage,
    description: USER.bio,
    keywords: USER.keywords,
};

export const META_THEME_COLORS = {
    light: "#ffffff",
    dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "projects",
        href: "/projects",
    },
    {
        title: "contact",
        href: "/contact",
    },
];

export const GITHUB_USERNAME = "vishalgupta-28";
export const SOURCE_CODE_GITHUB_REPO = "vishalgupta-28/alkush-portfolio-template";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/vishalgupta-28/alkush-portfolio-template";
