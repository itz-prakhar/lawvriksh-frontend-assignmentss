import React from "react"

export default function Filters({ active, onApply, onOpenAdvanced }) {
  const filters = ["My items", "Due this week", "At risk"]

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => onApply(f)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition 
              ${active === f
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {f}
          </button>
        ))}
      </div>
      <button
        onClick={onOpenAdvanced}
        className="text-blue-600 text-sm hover:underline"
      >
        More filters
      </button>
    </div>
  )
}
