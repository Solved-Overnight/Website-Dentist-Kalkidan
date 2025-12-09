import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the virtual assistant for Dr. Kalkidan Ephrem's dental website.
Dr. Kalkidan is a General Dentist and Smile Enthusiast, an alumna of AAU and Black Lion Specialized Hospital.
She is affiliated with @dentmex_materials_ and @dalian_dental_clinic.
Her goal is creating gorgeous smile makeovers with passion and precision.

Your Role:
1. Answer patient questions about general dentistry, smile makeovers, whitening, and aligners.
2. Provide a warm, professional, and empathetic tone (premium clinic vibe).
3. If asked about booking, guide them to the booking section below.
4. Keep answers concise (under 3 sentences) suitable for a chat interface.

Do not provide specific medical diagnoses. Always advise a consultation.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "I'm currently offline (API Key missing). Please contact the clinic directly.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};