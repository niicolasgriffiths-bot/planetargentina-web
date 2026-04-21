"use client";

import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  inverse = false
}: {
  items: BreadcrumbItem[];
  inverse?: boolean;
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-5 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-editorial ${
        inverse ? "text-paper/55" : "text-stone"
      }`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={`transition-opacity duration-500 hover:opacity-60 ${
                  inverse ? "text-paper/58" : "text-black/42"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={inverse ? "text-paper/78" : "text-black/58"}>{item.label}</span>
            )}
            {!isLast ? <span className={inverse ? "text-paper/28" : "text-black/20"}>/</span> : null}
          </span>
        );
      })}
    </nav>
  );
}
