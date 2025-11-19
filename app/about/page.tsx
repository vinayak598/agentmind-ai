export default function About() {
  return (
    <section className="space-y-12 max-w-4xl">
      
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">About AgentMind AI</h1>
        <p className="text-muted text-lg leading-relaxed">
          AgentMind AI is a next-generation artificial intelligence company
          building future-safe enterprise automation systems. We design
          intelligent AI agents that streamline customer support, enhance sales,
          orchestrate workflows, power healthcare communication, and support
          developer operations — all through advanced LLMs and automation engines.
        </p>
      </div>

      {/* Mission Card */}
      <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-3">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-muted leading-relaxed">
          To build intelligent, autonomous AI systems that become the
          foundation of how businesses operate — improving efficiency,
          reducing manual overhead, and enabling organizations to scale with
          confidence.
        </p>
      </div>

      {/* Vision */}
      <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-3">
        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p className="text-muted leading-relaxed">
          We envision a world where every repetitive workflow is handled by
          AI agents — allowing teams to focus on creativity, innovation,
          strategy, and human connection.
        </p>
      </div>

      {/* What We Do */}
      <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-3">
        <h2 className="text-2xl font-semibold">What We Build</h2>
        <p className="text-muted leading-relaxed">
          At AgentMind AI, we develop a suite of powerful AI products:
        </p>

        <ul className="list-disc list-inside text-muted space-y-2">
          <li><b>SupportAI</b> – Intelligent customer support automation</li>
          <li><b>SalesAI</b> – AI-powered lead qualification & sales outreach</li>
          <li><b>FlowAI</b> – Autonomous workflow and task orchestration</li>
          <li><b>HealthAI</b> – Healthcare-ready communication agents</li>
          <li><b>DevSupportAI</b> – Developer support & incident automation</li>
        </ul>
      </div>

      {/* Culture */}
      <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-3">
        <h2 className="text-2xl font-semibold">Our Culture</h2>
        <p className="text-muted leading-relaxed">
          We believe in innovation, transparency, long-term thinking, and
          building products that truly make a difference. Our team focuses on
          strength, clarity, and precision — ensuring that every system we
          create delivers real business impact.
        </p>
      </div>
    </section>
  );
}
