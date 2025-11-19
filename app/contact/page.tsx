export default function Contact() {
  return (
    <section className="max-w-2xl space-y-8">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">
          Contact Us
        </h1>
        <p className="text-muted-foreground">
          For demos, partnerships, business inquiries, or product questions,
          reach out anytime.
        </p>
      </div>

      {/* Card */}
      <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-4">
        <div>
          <p className="font-medium text-primary">Email</p>
          <a
            className="text-sm underline text-foreground hover:text-primary transition"
            href="mailto:vinayak.jvr@agentmindai.online"
          >
            vinayak.jvr@agentmindai.online
          </a>
        </div>

        <div>
          <p className="font-medium text-primary">LinkedIn</p>
          <a
            className="text-sm underline text-foreground hover:text-primary transition"
            target="_blank"
            href="https://www.linkedin.com/company/agentmind-ai/"
          >
            AgentMind AI
          </a>
        </div>

        <div>
          <p className="font-medium text-primary">Office Hours</p>
          <p className="text-sm text-muted-foreground">
            Monday – Friday, 9:00 AM to 6:00 PM IST
          </p>
        </div>
      </div>

      {/* Footer message */}
      <p className="text-sm text-muted-foreground">
        We typically respond within 12–24 hours.
      </p>
    </section>
  );
}
