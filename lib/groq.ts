import { createClient } from 'next-sanity';
import { SanityClientOptions } from '@sanity/client';

// Initialize Sanity client for Groq queries
const client = createClient({
  projectId: 'your_project_id', // Replace with your project ID
  dataset: 'your_dataset', // Replace with your dataset name
  apiVersion: '2021-03-25', // Use a UTC date string
  useCdn: true, // Set to `false` if you want to ensure fresh data
});

// Helper function to fetch data using GROQ
export const fetchGroqData = async (query: string, params?: {[key: string]: any}) => {
  return await client.fetch(query, params);
};

// You can add more helper functions as needed

export default client;