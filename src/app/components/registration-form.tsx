"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Checkbox } from "./ui/checkbox"

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const [email, setEmail] = useState("")
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const hasUcuDiscount = email.endsWith("@correo.ucu.edu.uy") || email.endsWith("@ucu.edu.uy")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg(null)

    const formData = new FormData(e.currentTarget)
    const nombre = formData.get("nombre")?.toString() || ""
    const email = formData.get("email")?.toString() || ""

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/insert-asistente`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_JWT!}`,
        },
        body: JSON.stringify({ nombre, email }),
      })

      if (!response.ok) {
        const json = await response.json()
        setErrorMsg(json.error || "Algo salió mal.")
        setIsSuccess(false)
      } else {
        setIsSuccess(true)
      }
    } catch (err) {
      console.error("Network error:", err)
      setErrorMsg("Error de red. Intenta de nuevo.")
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
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
        <Label htmlFor="nombre">Nombre Completo</Label>
        <Input id="nombre" name="nombre" placeholder="John Doe" className="border-slate-500 transition duration-150 ease-in-out hover:border-sky-600" required />
      </div>

      <div className="grid gap-2">
	<Label htmlFor="email">Email</Label>
	<Input
	  id="email"
	  type="email"
	  name="email"
	  placeholder="john@example.com"
	  className="border-slate-500 transition duration-150 ease-in-out hover:border-sky-600" 
	  required
	  value={email}
	  onChange={handleEmailChange}
	/>
	{hasUcuDiscount && (
	  <div className="mt-2 p-4 rounded-md border bg-green-100 text-green-800 border-green-300 animate-fade-in">
	    🎉 Se te aplicará el <strong>descuento del 100%</strong>
	  </div>
	)}
      </div>

      <div className="grid gap-2">
        <Label>Ticket Type</Label>
        <RadioGroup defaultValue="early-bird">
          <div className="flex items-center space-x-2 transition duration-150 ease-in-out hover:text-sky-700">
            <RadioGroupItem value="vip" id="vip" />
            <Label htmlFor="vip">Entrada Anticipada ($100)</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex items-center space-x-2 transition duration-150 ease-in-out hover:text-sky-700">
        <Checkbox id="terms" required />
        <Label htmlFor="terms">Acepto los términos y condiciones del evento.</Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full transition duration-500 ease-in-out hover:scale-y-105 hover:scale-x-103 hover:cursor-pointer hover:bg-sky-700 hover:text-white hover:shadow-md hover:shadow-sky-200 border border-slate-500"
      >
        {isSubmitting ? "Procesando..." : "Enviar"}
      </Button>

      {errorMsg && (
        <div
          className={`mt-4 p-4 rounded-md border text-sm ${
            errorMsg?.includes("email ya está registrado")
              ? "bg-yellow-100 text-yellow-800 border-yellow-300"
              : "bg-red-500 text-white border-red-600"
          }`}
        >
          <strong>Error:</strong> {errorMsg}
        </div>
      )}
    </form>
  )
}

