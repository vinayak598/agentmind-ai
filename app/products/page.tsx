import ProductCard from "@/components/ProductCard";

export default function Products() {
  const list = [
    { title: "SupportAI", desc: "AI customer support automation." },
    { title: "SalesAI", desc: "AI sales engagement automation." },
    { title: "FlowAI", desc: "Workflow automation with AI agents." },
    { title: "HealthAI", desc: "Healthcare-ready AI workflows." },
    { title: "DevSupportAI", desc: "Developer support & incident automation." },
  ];

  return (
    <section className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="text-muted mt-2">
          We are building powerful enterprise AI products.<br />
          <span className="text-[var(--color-brand)] font-semibold">
            All products are coming soon.
          </span>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {list.map((p) => (
          <ProductCard key={p.title} title={p.title} desc={p.desc} comingSoon />
        ))}
      </div>
    </section>
  );
}
