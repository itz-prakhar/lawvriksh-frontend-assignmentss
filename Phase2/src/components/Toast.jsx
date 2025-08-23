import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Toast({ data, onClose }) {
  return (
    <div aria-live="polite" className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {data && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.22 }}
            className="bg-white px-4 py-3 rounded-lg shadow hover:shadow-md"
            role="status"
          >
            <div className="flex items-center gap-3">
              <div className="text-sm">{data.msg}</div>
              <button onClick={onClose} className="text-xs text-gray-500">Dismiss</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
