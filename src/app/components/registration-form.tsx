"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

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
        <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
        <p className="text-muted-foreground mb-4">
          Thank you for registering for TechConnect 2025. We've sent a confirmation email with all the details.
        </p>
        <Button onClick={() => setIsSuccess(false)}>Register Another Person</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" required />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" required />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="company">Company/Organization</Label>
        <Input id="company" placeholder="Acme Inc." />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input id="jobTitle" placeholder="Software Engineer" />
      </div>

      <div className="grid gap-2">
        <Label>Ticket Type</Label>
        <RadioGroup defaultValue="early-bird">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="early-bird" id="early-bird" />
            <Label htmlFor="early-bird">Early Bird Ticket ($499)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="standard" id="standard" />
            <Label htmlFor="standard">Standard Ticket ($699)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vip" id="vip" />
            <Label htmlFor="vip">VIP Ticket ($999)</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="dietary">Dietary Requirements</Label>
        <Select>
          <SelectTrigger id="dietary">
            <SelectValue placeholder="Select dietary requirements" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="vegetarian">Vegetarian</SelectItem>
            <SelectItem value="vegan">Vegan</SelectItem>
            <SelectItem value="gluten-free">Gluten-free</SelectItem>
            <SelectItem value="other">Other (please specify)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="workshop" />
        <Label htmlFor="workshop">I would like to attend the pre-conference workshops (additional $199)</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" required />
        <Label htmlFor="terms">I agree to the terms and conditions</Label>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Complete Registration"}
      </Button>
    </form>
  )
}

