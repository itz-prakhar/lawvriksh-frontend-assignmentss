import React from 'react'
import { motion } from 'framer-motion'

export default function Header({ onOpenFilters, notify }) {
  return (
    <header className="flex items-center justify-between">
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="flex items-center gap-4"
      >
        <div>
          <div className="text-sm text-gray-500">Good evening,</div>
          <div className="text-xl font-semibold">Prakhar — Legal Ops</div>
        </div>
      </motion.div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:block">
          <input aria-label="Search" placeholder="Search cases, tasks..." className="px-3 py-2 rounded-lg border w-64 focus:ring-2 focus:ring-primary/25" />
        </div>
        <button onClick={() => { notify('Notifications opened (mock)'); }} aria-label="Notifications" className="p-2 rounded-lg hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-primary/30">
          🔔
        </button>
        <button onClick={onOpenFilters} className="px-3 py-2 bg-primary text-white rounded-lg shadow-sm hover:shadow hover:scale-[1.01] transition-transform">Filters</button>
      </div>
    </header>
  )
}
