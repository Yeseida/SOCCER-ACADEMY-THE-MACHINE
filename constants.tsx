
import { Program, Routine, Stat } from './types';

export const REGISTRATION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSchiQ6WCb7hOcA8AjqB03f3zzC__rKIK_FAyxFpWSwqQRUX4g/viewform?usp=header";
export const WHATSAPP_URL = "https://wa.me/15089815695?text=%C2%A1Hola%21%20Vengo%20de%20la%20web%20de%20The%20Machine%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20academia%20%E2%9A%BD"; 

export const PROGRAMS: Program[] = [
  {
    title: "Rendimiento Élite",
    age: "16 - 21 Años",
    description: "Entrenamiento intensivo para adolescentes que aspiran a ligas profesionales. Un entorno competitivo con enfoque en inteligencia táctica.",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800"
  },
  {
    title: "Desarrollo Juvenil",
    age: "10 - 15 Años",
    description: "Construyendo las bases de la excelencia técnica para niñas y niños. Dominio del control de balón y precisión quirúrgica.",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800"
  },
  {
    title: "Academia Junior",
    age: "5 - 9 Años",
    description: "Introducción al deporte rey para los más pequeños. Diversión, coordinación y habilidades básicas con metodología pro.",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800"
  }
];

export const ROUTINES: Routine[] = [
  {
    title: "Alta Intensidad",
    description: "Sesiones diseñadas para mejorar la resistencia y potencia al límite.",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=800"
  },
  {
    title: "Técnica de Precisión",
    description: "Control de balón, pase y definición mejorados bajo presión. Perfeccionamos cada contacto.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800"
  },
  {
    title: "Formación de Carácter",
    description: "Disciplina, trabajo en equipo y liderazgo dentro y fuera de la cancha.",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=800"
  }
];

export const STATS: Stat[] = [
  { label: "Jugadores Activos", value: "200+" },
  { label: "Programas Élite", value: "3" },
  { label: "Entrenadores PRO", value: "10" },
  { label: "Efectividad", value: "100%" }
];

export const MACHINE_SYSTEM_INSTRUCTION = `
Eres el Asistente de IA de 'SOCCER ACADEMY THE MACHINE'. 
Tu objetivo principal es saludar cordialmente y luego REDIRIGIR a las personas a nuestro WHATSAPP oficial para atención personalizada.

Tu tono es profesional, motivador, de élite y directo. Siempre respondes en ESPAÑOL.

Filosofía: En 'SOCCER ACADEMY THE MACHINE', calibramos el talento futbolístico.
Información clave para derivar:
- Si preguntan por precios, diles que varían según el programa pero que tenemos una oferta de MATRÍCULA GRATUITA.
- Ubicación: 40 Lawrence St, Lawrence, MA 01841.
- Horarios: Lunes y Miércoles de 5:30 PM a 7:00 PM.
- Enlace de WhatsApp: ${WHATSAPP_URL}

IMPORTANTE: Sé breve. Tu misión es que el usuario use el botón verde de WhatsApp para hablar con un humano.
`;
