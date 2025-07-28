"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/forms/Input";
import { Textarea } from "@/components/ui/forms/Textarea";
import { useState } from "react";
import { toast } from "react-hot-toast";

import type { Dictionary } from "@/lib/types";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (data: Record<string, string>) => {
    const newErrors: Record<string, string> = {};

    // First name validation
    if (!data.firstName) {
      newErrors.firstName = "First name is required.";
    } else if (data.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters.";
    } else if (data.firstName.length > 50) {
      newErrors.firstName = "First name must be less than 50 characters.";
    } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(data.firstName)) {
      newErrors.firstName = "First name contains invalid characters.";
    }

    // Last name validation
    if (!data.lastName) {
      newErrors.lastName = "Last name is required.";
    } else if (data.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters.";
    } else if (data.lastName.length > 50) {
      newErrors.lastName = "Last name must be less than 50 characters.";
    } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(data.lastName)) {
      newErrors.lastName = "Last name contains invalid characters.";
    }

    // Email validation
    if (!data.email) {
      newErrors.email = "Email is required.";
    } else if (data.email.length > 254) {
      newErrors.email = "Email is too long.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Subject validation
    if (!data.subject) {
      newErrors.subject = "Subject is required.";
    } else if (data.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters.";
    } else if (data.subject.length > 200) {
      newErrors.subject = "Subject must be less than 200 characters.";
    }

    // Message validation
    if (!data.message) {
      newErrors.message = "Message is required.";
    } else if (data.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    } else if (data.message.length > 2000) {
      newErrors.message = "Message must be less than 2000 characters.";
    }

    return newErrors;
  };

  const clearError = (field: string) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        (e.target as HTMLFormElement).reset();
        setErrors({});
      } else {
        const errorData = await response.json();
  
        if (response.status === 400 && errorData.missingFields) {
          const serverErrors: Record<string, string> = {};
  
          errorData.missingFields.forEach((field: string) => {
            serverErrors[field] = errorData.message || `${field} validation failed`;
          });
  
          setErrors(serverErrors);
          toast.error(errorData.message || "Please fix the form errors and try again.");
        } else {
          toast.error(errorData.message || "Failed to send message. Please try again.");
        }
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form
      className="space-y-5 sm:space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            {dict.contact.form.firstName}
          </label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="John"
            className="h-12 text-base touch-manipulation"
            onChange={() => clearError("firstName")}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            {dict.contact.form.lastName}
          </label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            className="h-12 text-base touch-manipulation"
            onChange={() => clearError("lastName")}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          {dict.contact.form.email}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          className="h-12 text-base touch-manipulation"
          onChange={() => clearError("email")}
        />
        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          {dict.contact.form.subject}
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Project inquiry"
          className="h-12 text-base touch-manipulation"
          onChange={() => clearError("subject")}
        />
        {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          {dict.contact.form.message}
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder={dict.contact.form.messagePlaceholder}
          className="min-h-[120px] sm:min-h-[140px] text-base touch-manipulation resize-y"
          onChange={() => clearError("message")}
        />
        {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
      </div>
      <Button 
        type="submit" 
        variant="outline" 
        className="w-full h-12 sm:h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300 transition-colors rounded-md text-base font-semibold touch-manipulation" 
        disabled={loading}
      >
        {loading ? "Sending..." : dict.contact.form.send}
      </Button>
    </form>
  );
}
