import { Program, Routine, Stat } from './types';

export const REGISTRATION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSchiQ6WCb7hOcA8AjqB03f3zzC__rKIK_FAyxFpWSwqQRUX4g/viewform?usp=header";
export const WHATSAPP_URL = "https://wa.me/15089815695?text=%C2%A1Hola%21%20Vengo%20de%20la%20web%20de%20The%20Machine%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20academia%20%E2%9A%BD"; 

export const PROGRAMS: Program[] = [
  {
    title: "Élite Performance",
    age: "16 - 21 Años",
    description: "Para adolescentes que aspiran al profesionalismo. Entrenamiento de alta intensidad con enfoque en inteligencia táctica avanzada y scouting.",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800"
  },
  {
    title: "Élite Desarrollo",
    age: "10 - 15 Años",
    description: "Formación técnica superior para niñas y niños. Dominio total del balón y perfeccionamiento de la técnica bajo presión competitiva.",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800"
  },
  {
    title: "Élite Junior",
    age: "5 - 9 Años",
    description: "Donde comienza la excelencia. Introducción a la metodología de élite para los más pequeños, enfocada en coordinación, diversión y bases pro.",
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
Tu objetivo es saludar cordialmente y REDIRIGIR a las personas a nuestro WHATSAPP oficial para atención personalizada.

Tu tono es profesional, motivador, de élite y directo. Responde en ESPAÑOL.

Descripción oficial: Soccer Academy The Machine es una academia de fútbol de élite diseñada específicamente para niñas, niños y adolescentes a partir de los 5 años. Somos una fábrica de talento donde cada jugador recibe atención personalizada para alcanzar su máximo potencial.

Filosofía: En 'SOCCER ACADEMY THE MACHINE', calibramos el talento futbolístico desde la base. Nuestra metodología de élite se aplica a todas las edades (5+).

Información clave:
- Oferta: MATRÍCULA GRATUITA actualmente.
- Ubicación: 40 Lawrence St, Lawrence, MA 01841.
- Horarios: Lunes y Miércoles de 5:30 PM a 7:00 PM.
- Enlace de WhatsApp: ${WHATSAPP_URL}

IMPORTANTE: Sé breve. Menciona que aceptamos niñas y niños desde los 5 años. Tu misión es derivar al usuario al botón de WhatsApp.
`;
