import { GoogleGenAI } from "@google/genai";
import { Experience, Skill } from "../types";

export const generateResumeSummary = async (jobTitle: string, experience: Experience[], skills: Skill[]): Promise<string> => {
  if (!process.env.API_KEY) {
    console.error("API Key is missing");
    return "Error: API Key is missing. Please configure your environment.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Safely map values, providing defaults if arrays are empty or undefined
    const skillNames = skills?.length 
      ? skills.map(s => s.name).join(", ") 
      : "general professional skills";
      
    const expSummaries = experience?.length 
      ? experience.map(e => `${e.position} at ${e.company}`).join(", ") 
      : "various professional roles";

    const prompt = `
      You are an expert resume writer. Write a professional, ATS-optimized resume summary (approx 50-80 words) for a candidate.
      
      Job Title: "${jobTitle || 'Professional'}"
      Key Skills: ${skillNames}
      Experience Highlights: ${expSummaries}
      
      Rules:
      1. Tone: Confident, professional, impact-driven.
      2. Format: Single paragraph, no bullet points.
      3. Content: Focus on value proposition and career goals.
      4. Output: Return ONLY the summary text. No quotes, no markdown headers.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text?.trim() || "Could not generate summary.";
  } catch (error) {
    console.error("Error generating summary:", error);
    return "Failed to generate summary. Please try again later.";
  }
};
