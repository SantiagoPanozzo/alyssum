"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

export default function FAQAccordion() {
  const faqs = [
    {
      "question": "¿Cuándo y dónde es el evento?",
      "answer": "El evento es el miércoles 9 de julio de 2025 en el Edificio San José de la Universidad Católica del Uruguay."
    },
    {
      "question": "¿Quiénes participan como speakers?",
      "answer": "Van a participar profesionales reconocidos del marketing de servicios, que compartirán experiencias, casos y buenas prácticas."
    },
    {
      "question": "¿Cuánto cuesta la entrada anticipada?",
      "answer": "La entrada anticipada cuesta $100 y se puede comprar a través de RedTickets."
    },
    {
      "question": "¿Los alumnos de la UCU tienen que pagar entrada?",
      "answer": "No, los alumnos de la UCU entran gratis, pero igual deben registrarse y sacar la entrada por RedTickets usando un código de 100% de descuento que se les envía por mail."
    },
    {
      "question": "¿Cómo reciben el código de descuento los estudiantes de la UCU?",
      "answer": "Una vez que se registran con su mail institucional, les llega un mail con el código de descuento para canjear en RedTickets."
    },
    {
      "question": "¿Dónde se compran las entradas?",
      "answer": "Todas las entradas, incluidas las gratuitas para estudiantes de la UCU, se gestionan a través de RedTickets. El link se envía por mail después del registro."
    },
    {
      "question": "¿Hay que registrarse aunque sea estudiante o ya tenga la entrada?",
      "answer": "Sí, todos los que quieran participar deben registrarse en la página del evento para recibir el link de RedTickets y más información."
    },
    {
      "question": "¿Puedo registrarme con cualquier correo si soy estudiante de la UCU?",
      "answer": "No, si sos estudiante de la UCU tenés que usar tu mail institucional (@ucu.edu.uy) para poder recibir el código de descuento."
    }
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
