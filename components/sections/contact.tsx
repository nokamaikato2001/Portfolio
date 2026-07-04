"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social";
import { SectionHeading } from "@/components/shared/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type FormState = { name: string; email: string; phone: string; subject: string; message: string };
const initial: FormState = { name: "", email: "", phone: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSent(true);
    toast.success("Message sent!");
    setForm(initial);
    setTimeout(() => setSent(false), 4000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: MapPin, label: "Location", value: siteConfig.location },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Let's work together" description="Have a role or project in mind? Send a message and I'll reply soon." />
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="neu p-7">
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-xl neu-inset px-4 py-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg neu-sm text-primary"><Icon className="h-4 w-4" /></span>
                    <div><p className="text-xs uppercase tracking-wider text-muted-foreground">{info.label}</p><p className="text-sm font-medium text-white">{info.value}</p></div>
                  </div>
                );
                return info.href ? <a key={info.label} href={info.href}>{content}</a> : <div key={info.label}>{content}</div>;
              })}
            </div>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex h-10 w-10 items-center justify-center rounded-xl neu-sm text-muted-foreground hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
          <form onSubmit={onSubmit} className="neu p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5"><Label htmlFor="name">Name</Label><Input id="name" value={form.name} onChange={update("name")} placeholder="Your name" /></div>
              <div className="space-y-1.5"><Label htmlFor="email">Email</Label><Input id="email" type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" /></div>
              <div className="space-y-1.5"><Label htmlFor="phone">Phone</Label><Input id="phone" value={form.phone} onChange={update("phone")} placeholder="+91 ..." /></div>
              <div className="space-y-1.5"><Label htmlFor="subject">Subject</Label><Input id="subject" value={form.subject} onChange={update("subject")} placeholder="Job inquiry" /></div>
            </div>
            <div className="mt-5 space-y-1.5"><Label htmlFor="message">Message</Label><Textarea id="message" value={form.message} onChange={update("message")} placeholder="Tell me about the opportunity..." /></div>
            <Button type="submit" variant="gradient" size="lg" disabled={submitting || sent} className="mt-6 w-full">
              {sent ? <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Sent!</span> : submitting ? "Sending..." : <span className="flex items-center gap-2"><Send className="h-4 w-4" />Send Message</span>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
