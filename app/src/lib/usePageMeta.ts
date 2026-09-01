import { useEffect } from "react";
import { SITE } from "./site";

export function usePageMeta(title: string, description: string, path = "/", robots?: string) {
  useEffect(() => {
    document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const clean = path === "/" ? "/" : path;
      canonical.setAttribute("href", `${SITE.canonical}${clean === "/" ? "/" : clean}`);
    }

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robots) {
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.setAttribute("name", "robots");
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute("content", robots);
    } else if (robotsMeta) {
      robotsMeta.remove();
    }
  }, [title, description, path, robots]);
}
