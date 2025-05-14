'use client'
import { useState } from "react"
import Image from "next/image"
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'

interface SpeakerCardProps {
  name: string
  role: string
  image: string
  topics: string[]
}

const topicColors = [
  "border-red-700 text-red-700 hover:bg-red-100 hover:shadow-sm hover:shadow-red-200",
  "border-green-700 text-green-700 hover:bg-green-100 hover:shadow-sm hover:shadow-green-200",
  "border-blue-700 text-blue-700 hover:bg-blue-100 hover:shadow-sm hover:shadow-blue-200",
  "border-yellow-700 text-yellow-700 hover:bg-yellow-100 hover:shadow-sm hover:shadow-yellow-200",
  "border-purple-700 text-purple-700 hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-200",
]

export default function SpeakerCard({ name, role, image, topics }: SpeakerCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      {/* Main Card */}
      <div className="group relative rounded-lg bg-background transition-all hover:shadow-md hover:shadow-xl hover:shadow-indigo-200 border border-slate-300 flex flex-col">
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
              className="rounded-full px-6 py-2 text-sm font-medium border border-slate-300 hover:shadow-lg hover:shadow-indigo-300 transition hover:bg-blue-400 hover:border-indigo-400 hover:text-white hover:cursor-pointer"
            >
              Ver
            </Button>
          </div>
        </div>
      </div>
      
      {/* Modal with animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-opacity-40 flex items-center justify-center px-4 backdrop-blur-sm bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-lg w-full h-auto min-h-[400px] max-h-[90vh] flex flex-col md:flex-row overflow-hidden" 
              style={{ width: '700px', minWidth: '650px' }}
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
		  className="rounded-full px-6 py-2 text-sm font-medium border border-slate-300 hover:shadow-lg hover:shadow-blue-300 transition hover:bg-sky-700 hover:border-indigo-400 hover:text-white hover:cursor-pointer"
		>
		  Cerrar
		</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
