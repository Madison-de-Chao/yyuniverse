import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from "../constants";

// Initialize API client only if key exists to prevent immediate crash, 
// though standard practice assumes it's there.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToMOMO = async (
  history: { role: 'user' | 'model'; text: string }[],
  message: string
): Promise<string> => {
  try {
    // Use a model capable of complex reasoning
    const modelId = 'gemini-2.5-flash'; 

    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
        temperature: 0.7, // slightly lower temperature for more structural integrity
        topP: 0.95,
        topK: 40,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message,
    });

    if (!result.text) {
      throw new Error("No text in response");
    }

    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系統偵測到連線異常。請檢查您的思維網絡（網路連線），或稍後再試。";
  }
};