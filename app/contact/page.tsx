"use client";
import React from "react";

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      alert("Your message has been sent! We’ll get back to you soon.");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="max-w-5xl mx-auto space-y-16">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground">
          For demos, partnerships, business inquiries, or product questions,
          reach out anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT — Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-card border rounded-2xl p-6 shadow-sm">
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Name</label>
            <input
              name="name"
              type="text"
              className="border rounded-xl px-3 py-2 w-full bg-background"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="border rounded-xl px-3 py-2 w-full bg-background"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              className="border rounded-xl px-3 py-2 w-full bg-background h-32 resize-none"
              placeholder="Write your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--color-brand)] text-black font-semibold py-3 rounded-xl hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>

        {/* RIGHT — Contact Details */}
        <div className="space-y-6 bg-card border rounded-2xl p-6 shadow-sm h-fit">
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

          <div>
            <p className="font-medium text-primary">Response Time</p>
            <p className="text-sm text-muted-foreground">
              We typically respond within 12–24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
