'use client'

import { useState } from 'react'
import { Button } from './button'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface GoogleMapsButtonProps {
  buttonText: string;
  mapUrl: string;
}

export default function GoogleMapsButton({ buttonText, mapUrl }: GoogleMapsButtonProps) {
  const [showMap, setShowMap] = useState(false)

  return (
    <div>
      <Button variant="outline" size="lg" onClick={() => setShowMap(true)} className="transition hover:text-sky-700 hover:cursor-pointer transition duration-300 hover:shadow-lg hover:shadow-indigo-300 border border-slate-300">
        {buttonText}
      </Button>

      <AnimatePresence>
        {showMap && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[90vw] h-[80vh] bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMap(false)}
                className="absolute top-3 right-3 bg-white text-gray-800 hover:bg-gray-100 hover:text-red-600 rounded-full shadow-lg"
                aria-label="Close map"
              >
                <X className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

