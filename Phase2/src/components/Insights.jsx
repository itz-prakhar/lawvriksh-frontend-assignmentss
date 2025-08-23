import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  { day: 'Day 1', cases: 5 },
  { day: 'Day 2', cases: 7 },
  { day: 'Day 3', cases: 6 },
  { day: 'Day 4', cases: 10 },
  { day: 'Day 5', cases: 9 },
  { day: 'Day 6', cases: 11 },
  { day: 'Day 7', cases: 8 }
]

export default function Insights() {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Insights</h3>
      <p className="text-sm text-gray-500 mb-2">Case trends (last 7 days)</p>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}
            />
            <Line
              type="monotone"
              dataKey="cases"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{ r: 5, fill: '#2563eb' }}
              activeDot={{ r: 7, fill: '#1d4ed8' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-xs text-gray-500 mt-2">
         Small spike in at-risk cases on Day 4
      </p>
    </div>
  )
}
