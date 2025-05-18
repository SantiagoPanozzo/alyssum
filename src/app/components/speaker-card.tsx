'use client'
import { useState } from "react"
import Image from "next/image"
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import ModalPortal from './ui/modal-portal'

interface SpeakerCardProps {
  name: string
  role: string
  image: string
  topics: string[]
}

const topicColors = [
  "border-pink-700 text-pink-700 hover:bg-pink-100 hover:shadow-sm hover:shadow-pink-200",
  "border-emerald-600 text-emerald-600 hover:bg-emerald-100 hover:shadow-sm hover:shadow-emerald-200",
  "border-sky-700 text-sky-700 hover:bg-sky-100 hover:shadow-sm hover:shadow-sky-200",
  "border-amber-700 text-amber-700 hover:bg-amber-100 hover:shadow-sm hover:shadow-amber-200",
  "border-purple-700 text-purple-700 hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-200",
]

export default function SpeakerCard({ name, role, image, topics }: SpeakerCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      {/* Main Card */}
      <div className="group relative rounded-lg bg-background transition-all hover:shadow-md hover:shadow-xl hover:shadow-sky-200 border border-slate-300 flex flex-col">
        {/* Image container - maintaining aspect ratio without cropping */}
        <div className="w-full aspect-square relative">
          <Image
            src={image || "/placeholder.jpg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex flex-wrap gap-2 my-2">
            {topics.map((topic, index) => (
              <span
                key={index}
                className={`inline-flex items-center transition duration-300 rounded-full px-2.5 py-0.5 text-xs bg-white border border-1 font-semibold ${topicColors[index % topicColors.length]}`}
              >
                {topic}
              </span>
            ))}
          </div>
          <div className="mt-auto flex justify-center pt-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsOpen(true)}
              className="rounded-full px-6 py-2 text-sm font-medium border border-slate-400 hover:shadow-lg hover:shadow-sky-200 transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-700 hover:border-sky-600 hover:text-white hover:cursor-pointer"
            >
              Ver
            </Button>
          </div>
        </div>
      </div>
      
      {/* Modal with animations */}
      <AnimatePresence>
        {isOpen && (
	<ModalPortal>
          <motion.div 
            className="fixed inset-0 z-50 bg-opacity-40 flex items-center justify-center px-4 backdrop-blur-sm bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
	    <motion.div 
		className="bg-white rounded-2xl shadow-lg w-full max-w-4xl h-auto max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
		initial={{ scale: 0.9, opacity: 0 }}
		animate={{ scale: 1, opacity: 1 }}
		exit={{ scale: 0.9, opacity: 0 }}
		transition={{ type: 'spring', stiffness: 200, damping: 20 }}
	    >
              {/* Fixed size image container with minimum dimensions */}
              <div className="relative w-full md:w-72 min-w-[240px] h-64 md:h-auto min-h-[300px] flex-shrink-0">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Fixed size content container with minimum dimensions and scroll for overflow */}
              <div className="p-6 flex flex-col gap-4 w-full flex-1 h-full min-h-[300px] md:min-h-[400px] md:max-h-[500px]">
                <div className="flex-1 overflow-y-auto pr-2 min-h-[200px]">
                  <h2 className="text-xl font-bold mb-3">{name}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {topics.map((topic, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border ${topicColors[index % topicColors.length]}`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-line break-words text-muted-foreground">
                    {role}
                  </p>
                </div>
		<Button
		  variant="outline"
		  size="lg"
		  onClick={() => setIsOpen(false)}
		  className="rounded-full px-6 py-2 text-sm font-medium border border-slate-400 hover:shadow-lg hover:shadow-sky-200 transition hover:bg-sky-700 hover:border-indigo-400 hover:text-white hover:cursor-pointer"
		>
		  Cerrar
		</Button>
              </div>
            </motion.div>
          </motion.div>
	  </ModalPortal>
        )}
      </AnimatePresence>
    </>
  )
}
