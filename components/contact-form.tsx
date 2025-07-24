"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactForm({ dict }: { dict: any }) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (data: Record<string, string>) => {
    const newErrors: Record<string, string> = {};

    if (!data.firstName) newErrors.firstName = "First name is required.";
    if (!data.lastName) newErrors.lastName = "Last name is required.";
    if (!data.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!data.subject) newErrors.subject = "Subject is required.";
    if (!data.message) newErrors.message = "Message is required.";

    return newErrors;
  };

  const clearError = (field: string) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };

  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries()) as Record<string, string>;

        const validationErrors = validateForm(data);
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          setLoading(false);
          return;
        }

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            toast.success("Message sent successfully!");
          } else {
            toast.error("Failed to send message. Please try again.");
          }
        } catch (error) {
          toast.error("An unexpected error occurred.");
        } finally {
          setLoading(false);
        }
      }}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
            {dict.contact.form.firstName}
          </label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="John"
            onChange={() => clearError("firstName")}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium  mb-2">
            {dict.contact.form.lastName}
          </label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            onChange={() => clearError("lastName")}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {dict.contact.form.email}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          onChange={() => clearError("email")}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          {dict.contact.form.subject}
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Project inquiry"
          onChange={() => clearError("subject")}
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
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
          onChange={() => clearError("message")}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      <Button type="submit" className="w-full bg-blue-100 text-blue-500 rounded hover:bg-blue-200 transition-colors" disabled={loading}>
        {loading ? "Sending..." : dict.contact.form.send}
      </Button>
    </form>
  );
}
