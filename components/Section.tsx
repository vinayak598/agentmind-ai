export default function Section({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12">
      {title && <h2 className="text-3xl font-bold">{title}</h2>}
      {subtitle && <p className="text-muted mt-1 mb-6">{subtitle}</p>}
      {children}
    </section>
  );
}
