import ProductCard from "@/components/ProductCard";

export default function Products() {
  const list = [
    { title: "SupportAI", desc: "AI customer support automation.", href: "/supportai", comingSoon: false },
    { title: "SalesAI", desc: "AI sales engagement automation.", comingSoon: true },
    { title: "FlowAI", desc: "Workflow automation with AI agents.", comingSoon: true },
    { title: "HealthAI", desc: "Healthcare-ready AI workflows.", comingSoon: true },
    { title: "DevSupportAI", desc: "Developer support & incident automation.", comingSoon: true },
  ];

  return (
    <section className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="text-muted mt-2">
          We are building powerful enterprise AI products.<br />
          <span className="text-[var(--color-brand)] font-semibold">
            SupportAI is under development. Other products will be released soon.
          </span>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {list.map((p) => (
          <ProductCard
            key={p.title}
            title={p.title}
            desc={p.desc}
            href={p.href}
            comingSoon={p.comingSoon}
          />
        ))}
      </div>
    </section>
  );
}
