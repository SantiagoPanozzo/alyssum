"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Checkbox } from "./ui/checkbox"

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">¡Registro exitoso!</h3>
        <p className="text-muted-foreground mb-4">
          Gracias por inscribirte a UCX 2025. Te enviamos un mail para que puedas acceder a RedTickets y conseguir tu entrada.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Nombre Completo</Label>
        <Input id="name" placeholder="John Doe" required />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" required />
      </div>

      <div className="grid gap-2">
        <Label>Ticket Type</Label>
        <RadioGroup defaultValue="early-bird">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vip" id="vip" />
            <Label htmlFor="vip">Entrada Anticipada ($80)</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" required />
        <Label htmlFor="terms">Acepto los términos y condiciones del evento.</Label>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full transition duration-300 hover:shadow-md hover:shadow-indigo-200 border border-indigo-300">
        {isSubmitting ? "Procesando..." : "Registro completo"}
      </Button>
    </form>
  )
}
