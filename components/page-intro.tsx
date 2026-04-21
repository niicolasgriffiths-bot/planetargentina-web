import { BreadcrumbItem, Breadcrumbs } from "@/components/breadcrumbs";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  inverse?: boolean;
  breadcrumbs?: BreadcrumbItem[];
};

export function PageIntro({
  eyebrow,
  title,
  body,
  inverse = false,
  breadcrumbs = []
}: PageIntroProps) {
  return (
    <div className={`mx-auto max-w-3xl px-6 md:px-10 ${inverse ? "text-paper" : "text-ink"}`}>
      <Breadcrumbs items={breadcrumbs} inverse={inverse} />
      {eyebrow ? (
        <p className="mb-4 text-[11px] uppercase tracking-editorial opacity-60">{eyebrow}</p>
      ) : null}
      <h1 className="max-w-2xl font-serif text-4xl leading-none md:text-6xl">{title}</h1>
      {body ? <p className="mt-6 max-w-xl text-sm leading-7 opacity-75 md:text-base">{body}</p> : null}
    </div>
  );
}
