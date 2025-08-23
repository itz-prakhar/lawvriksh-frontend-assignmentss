import React from 'react'

const items = ['Dashboard', 'Cases', 'Tasks', 'Insights', 'Admin']

export default function Sidebar({ onNavigate, active }) {
  return (
    <aside className="w-56 hidden md:flex flex-col bg-white border-r">
      <div className="p-4 text-primary font-bold">LawVriksh</div>
      <nav className="flex-1 p-2" aria-label="Primary">
        {items.map((it) => (
          <button
            key={it}
            onClick={() => onNavigate(it)}
            className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-primary/30 ${active === it
                ? 'bg-primary/5 border-l-4 border-primary text-primary font-semibold'
                : ''
              }`}
            aria-current={active === it ? 'page' : undefined}
          >
            {it}
          </button>
        ))}
      </nav>
      <div className="p-4 text-sm text-gray-500">v1.0</div>
    </aside>
  )
}
