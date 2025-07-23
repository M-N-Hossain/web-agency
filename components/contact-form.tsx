"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm({ dict }: { dict: any }) {
  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("Failed to send message. Please try again.");
        }
      }}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
            {dict.contact.form.firstName}
          </label>
          <Input id="firstName" name="firstName" placeholder="John" required />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
            {dict.contact.form.lastName}
          </label>
          <Input id="lastName" name="lastName" placeholder="Doe" required />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {dict.contact.form.email}
        </label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          {dict.contact.form.subject}
        </label>
        <Input id="subject" name="subject" placeholder="Project inquiry" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {dict.contact.form.message}
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder={dict.contact.form.messagePlaceholder}
          className="min-h-[120px]"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        {dict.contact.form.send}
      </Button>
    </form>
  );
}
