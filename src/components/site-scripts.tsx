"use client";

import { useGSAP } from "@gsap/react";

import { boot } from "@/lib/site/boot";
import { Scope } from "@/lib/site/shared";

/**
 * Wires up every page's interactions and motion once it has hydrated. The
 * markup is server-rendered; this only attaches behaviour to it (by data
 * attributes) and undoes all of it on unmount.
 */
export function SiteScripts() {
  useGSAP((_context, contextSafe) => {
    const scope = new Scope();
    boot(scope, contextSafe!);
    return () => scope.dispose();
  });
  return null;
}
