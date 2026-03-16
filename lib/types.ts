// lib/types.ts

export interface ChatMessage {
    sender: string;
    content: string;
    timestamp: Date;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface GroqResponse<T> {
    data: T;
    error?: string;
}