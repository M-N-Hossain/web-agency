/**
 * API Types
 * Type definitions for API requests and responses
 */

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = any> {
  message: string;
  data?: T;
  error?: string;
}

export interface ContactApiResponse extends ApiResponse {
  missingFields?: string[];
}

export interface MailOptions {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}

export interface EmailConfig {
  service: string;
  auth: {
    user: string;
    pass: string;
  };
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiError {
  message: string;
  status: number;
  code?: string;
} 