
import { GoogleGenAI, Chat } from "@google/genai";
import { MACHINE_SYSTEM_INSTRUCTION } from "../constants";

/**
 * ChatService se encarga de la comunicación con la IA de Google.
 * Sigue las guías de implementación de Gemini API.
 */
export class ChatService {
  private chat: Chat | null = null;
  private ai: GoogleGenAI;

  constructor() {
    // La API_KEY se obtiene automáticamente del entorno de ejecución
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  /**
   * Inicializa la sesión de chat con las instrucciones personalizadas de la academia.
   */
  private initChat() {
    if (!this.chat) {
      this.chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: MACHINE_SYSTEM_INSTRUCTION,
        },
      });
    }
    return this.chat;
  }

  /**
   * Envía un mensaje a la IA y devuelve la respuesta en texto.
   * @param message El texto que escribe el usuario.
   */
  async sendMessage(message: string): Promise<string> {
    try {
      const chat = this.initChat();
      
      // Enviamos el mensaje a la IA
      const result = await chat.sendMessage({ message });
      
      // Retornamos el texto de la respuesta (usando la propiedad .text según la documentación)
      return result.text || "Lo siento, 'The Machine' está procesando datos en este momento. Inténtalo de nuevo.";
    } catch (error) {
      console.error("Error en el servicio de chat:", error);
      return "Hubo un error de conexión con el asistente. Por favor, contacta directamente por WhatsApp para asistencia inmediata.";
    }
  }
}

// Exportamos una única instancia para usarla en toda la aplicación
export const chatService = new ChatService();