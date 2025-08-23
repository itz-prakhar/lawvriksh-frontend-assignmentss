import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sample = Array.from({ length: 7 }).map((_, i) => ({
  id: i + 1,
  title: `Case ${100 + i}`,
  status: i % 3 === 0 ? "At risk" : "Open",
  assignee: i % 2 ? "Rahul" : "Priyansh",
}))

export default function Worklist({ notify }) {
  const [rows, setRows] = useState(sample)
  const [toggling, setToggling] = useState(null)

  const toggleStatus = (id) => {
    setRows((r) =>
      r.map((x) =>
        x.id === id
          ? {
            ...x,
            status:
              x.status === "Open"
                ? "Closed"
                : x.status === "Closed"
                  ? "Open"
                  : x.status, //"At risk" unchanged
          }
          : x
      )
    )
    setToggling(id)
    setTimeout(() => {
      setToggling(null)
      notify("Status updated", "success")
    }, 600)
  }

  const badgeClass = (status) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-700"
      case "Closed":
        return "bg-gray-200 text-gray-700"
      case "At risk":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <div className="overflow-auto bg-white shadow rounded-lg">
      <table className="w-full text-sm">
        <thead className="text-left text-gray-500 text-xs border-b">
          <tr>
            <th className="py-3 px-4">Title</th>
            <th className="py-3 px-4">Assignee</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence initial={false}>
            {rows.map((r) => (
              <motion.tr
                key={r.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.18 }}
                className="hover:bg-gray-50 focus-within:bg-gray-50"
              >
                <td className="py-3 px-4 font-medium">{r.title}</td>
                <td className="py-3 px-4">{r.assignee}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${badgeClass(
                      r.status
                    )}`}
                  >
                    {r.status}
                    {toggling === r.id && (
                      <span className="ml-2 text-gray-400">...</span>
                    )}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="inline-flex gap-2 items-center">
                    <button
                      onClick={() => toggleStatus(r.id)}
                      className="px-2 py-1 text-xs rounded border hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      Toggle
                    </button>
                    <button
                      onClick={() => notify("Assigned (mock)")}
                      className="px-2 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Assign
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  )
}
