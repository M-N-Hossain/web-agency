/**
 * Validation Utilities
 * Centralized validation functions for forms and user input
 */

import { VALIDATION_RULES } from "../constants";
import type { ContactFormData } from "../types/api";

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Validates an email address
 */
export function validateEmail(email: string): ValidationError | null {
  if (!email) {
    return { field: "email", message: "Email is required" };
  }
  
  if (email.length > VALIDATION_RULES.email.maxLength) {
    return { field: "email", message: "Email is too long" };
  }
  
  if (!VALIDATION_RULES.email.pattern.test(email)) {
    return { field: "email", message: "Invalid email format" };
  }
  
  return null;
}

/**
 * Validates a name field (first name or last name)
 */
export function validateName(name: string, fieldName: string): ValidationError | null {
  if (!name) {
    return { field: fieldName, message: `${fieldName} is required` };
  }
  
  if (name.length < VALIDATION_RULES.name.minLength) {
    return { field: fieldName, message: `${fieldName} must be at least ${VALIDATION_RULES.name.minLength} characters` };
  }
  
  if (name.length > VALIDATION_RULES.name.maxLength) {
    return { field: fieldName, message: `${fieldName} must be less than ${VALIDATION_RULES.name.maxLength} characters` };
  }
  
  if (!VALIDATION_RULES.name.pattern.test(name)) {
    return { field: fieldName, message: `${fieldName} contains invalid characters` };
  }
  
  return null;
}

/**
 * Validates a subject field
 */
export function validateSubject(subject: string): ValidationError | null {
  if (!subject) {
    return { field: "subject", message: "Subject is required" };
  }
  
  if (subject.length < VALIDATION_RULES.subject.minLength) {
    return { field: "subject", message: `Subject must be at least ${VALIDATION_RULES.subject.minLength} characters` };
  }
  
  if (subject.length > VALIDATION_RULES.subject.maxLength) {
    return { field: "subject", message: `Subject must be less than ${VALIDATION_RULES.subject.maxLength} characters` };
  }
  
  return null;
}

/**
 * Validates a message field
 */
export function validateMessage(message: string): ValidationError | null {
  if (!message) {
    return { field: "message", message: "Message is required" };
  }
  
  if (message.length < VALIDATION_RULES.message.minLength) {
    return { field: "message", message: `Message must be at least ${VALIDATION_RULES.message.minLength} characters` };
  }
  
  if (message.length > VALIDATION_RULES.message.maxLength) {
    return { field: "message", message: `Message must be less than ${VALIDATION_RULES.message.maxLength} characters` };
  }
  
  return null;
}

/**
 * Validates contact form data
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: ValidationError[] = [];
  
  // Validate each field
  const emailError = validateEmail(data.email);
  if (emailError) errors.push(emailError);
  
  const firstNameError = validateName(data.firstName, "firstName");
  if (firstNameError) errors.push(firstNameError);
  
  const lastNameError = validateName(data.lastName, "lastName");
  if (lastNameError) errors.push(lastNameError);
  
  const subjectError = validateSubject(data.subject);
  if (subjectError) errors.push(subjectError);
  
  const messageError = validateMessage(data.message);
  if (messageError) errors.push(messageError);
  
  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Sanitizes user input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000); // Limit length for safety
}

/**
 * Creates a user-friendly error message from validation errors
 */
export function formatValidationErrors(errors: ValidationError[]): string {
  if (errors.length === 0) return "";
  if (errors.length === 1) return errors[0].message;
  
  const errorMessages = errors.map(error => error.message);
  const lastError = errorMessages.pop();
  
  return `${errorMessages.join(", ")} and ${lastError}`;
} 