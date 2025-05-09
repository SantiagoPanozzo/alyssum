"use client"

import { useEffect, useState } from "react"

interface CountdownProps {
  targetDate: Date
}

export default function EventCountdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold mb-4">El evento empieza en:</h3>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-primary">{timeLeft.days}</div>
          <div className="text-xs text-muted-foreground uppercase">Días</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-primary">{timeLeft.hours}</div>
          <div className="text-xs text-muted-foreground uppercase">Horas</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-primary">{timeLeft.minutes}</div>
          <div className="text-xs text-muted-foreground uppercase">Minutos</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-primary">{timeLeft.seconds}</div>
          <div className="text-xs text-muted-foreground uppercase">Segundos</div>
        </div>
      </div>
    </div>
  )
}

