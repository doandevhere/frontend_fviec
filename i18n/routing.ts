import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { localeConfig } from "./config";

export const routing = defineRouting(localeConfig);

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
