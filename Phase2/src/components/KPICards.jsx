import React from 'react'
import { motion } from 'framer-motion'

const data = [
  { title: 'At-Risk Cases', value: 12, primary: true },
  { title: 'Open Tasks', value: 84 },
  { title: 'Avg SLA (days)', value: 3.6 },
  { title: 'Billing Delay', value: '2.1%' }
]

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((d, i) => (
        <motion.div
          key={d.title}
          initial={{ opacity: 0, y: 8, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.06, duration: 0.2, ease: 'easeOut' }}
          whileHover={ d.primary ? { scale: 1.02, boxShadow: '0 18px 40px rgba(11,92,255,0.08)'} : { scale: 1.01 }}
          className={`p-4 rounded-2xl ${d.primary ? 'bg-[#F2F8FF]' : 'bg-white'} shadow-card cursor-default`}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-gray-500">{d.title}</div>
              <div className={`mt-2 font-bold ${d.primary ? 'text-primary text-2xl' : 'text-xl'}`}>{d.value}</div>
            </div>
            <div className="text-sm text-gray-400">↗</div>
          </div>
          <div className="mt-3 text-xs text-gray-500">Compared to last week</div>
        </motion.div>
      ))}
    </div>
  )
}
