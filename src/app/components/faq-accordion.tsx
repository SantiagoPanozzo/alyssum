"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQAccordion() {
  const faqs = [
    {
      question: "What is included in the registration fee?",
      answer:
        "The registration fee includes access to all keynotes, sessions, and workshops, as well as lunch and refreshments during the event. It also includes access to networking events and the conference app.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, we offer full refunds up to 30 days before the event. After that, refunds are available at 50% up to 14 days before the event. No refunds are available within 14 days of the event, but you can transfer your ticket to someone else.",
    },
    {
      question: "Are there accommodations near the venue?",
      answer:
        "Yes, we have partnered with several hotels near the venue to offer special rates for attendees. Details will be provided in your registration confirmation email.",
    },
    {
      question: "Will sessions be recorded?",
      answer:
        "Yes, all keynotes and sessions will be recorded and made available to registered attendees after the event.",
    },
    {
      question: "Is there a dress code?",
      answer:
        "The dress code is business casual. We recommend comfortable attire as you'll be moving between sessions throughout the day.",
    },
    {
      question: "How can I become a sponsor?",
      answer:
        "We offer various sponsorship packages to suit different needs and budgets. Please contact our sponsorship team at sponsors@techconnect2025.com for more information.",
    },
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

