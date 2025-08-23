import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import KPICards from './components/KPICards'
import Filters from './components/Filters'
import Worklist from './components/Worklist'
import Insights from './components/Insights'
import Toast from './components/Toast'
import Modal from './components/Modal'

/* Main */
const HeroBanner = () => {
  const today = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })
  return (
    <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-6 mb-6 shadow-lg">
      <h1 className="text-2xl font-bold">Hello Prakhar!</h1>
      <p className="mt-2 text-sm opacity-90">{today}</p>
    </div>
  )
}

const ProfileCard = () => (
  <div className="bg-white rounded-2xl p-4 shadow-card">
    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-lg font-bold">
      P
    </div>
    <h3 className="mt-2 font-semibold text-center">Prakhar Gupta</h3>
    <p className="text-sm text-gray-500 text-center">Corporate Law</p>
    <hr className="my-3" />
    <p className="text-xs text-gray-600">Degree: LLB(H)</p>
    <p className="text-xs text-gray-600">Year of Passing: 2022</p>
    <p className="text-xs text-gray-600 mt-2">Bio: Legal Ops manager with focus on compliance</p>
  </div>
)

const ProgressCard = () => (
  <div className="bg-white rounded-2xl p-4 shadow-card">
    <h4 className="font-medium">Complete Your Profile</h4>
    <div className="mt-2 h-2 bg-gray-200 rounded-full">
      <div className="h-2 bg-primary rounded-full w-3/4"></div>
    </div>
    <p className="text-xs text-gray-500 mt-1">79% completed</p>
  </div>
)

const Subscribers = () => (
  <div className="bg-white rounded-2xl p-4 shadow-card">
    <h4 className="font-semibold mb-2">Subscribers</h4>
    <ul className="divide-y text-sm">
      <li className="py-2 flex justify-between"><span>Rahul</span><span className="text-gray-500">06-08-2025</span></li>
      <li className="py-2 flex justify-between"><span>Priya</span><span className="text-gray-500">19-08-2025</span></li>
      <li className="py-2 flex justify-between"><span>Deepak</span><span className="text-gray-500">21-08-2025</span></li>
    </ul>
  </div>
)

/* ===== Pages (cases, tasks, admin, insights) ===== */
const Cases = () => (
  <div className="cases-page card">
    <h2>📂 Cases Overview</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Title</th><th>Assignee</th><th>Status</th><th>Deadline</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>101</td><td>Contract Review</td><td>Ayush</td>
          <td><span className="badge badge-danger">At Risk</span></td>
          <td>25 Aug</td><td><button className="btn-small">View</button></td>
        </tr>
        <tr>
          <td>102</td><td>Compliance Report</td><td>Shekhar</td>
          <td><span className="badge badge-success">Open</span></td>
          <td>28 Aug</td><td><button className="btn-small">View</button></td>
        </tr>
        <tr>
          <td>103</td><td>Litigation Follow-up</td><td>Priyansh</td>
          <td><span className="badge badge-muted">Closed</span></td>
          <td>20 Aug</td><td><button className="btn-small">View</button></td>
        </tr>
      </tbody>
    </table>
  </div>
)

const Tasks = () => (
  <div className="tasks-page card">
    <h2> My Tasks</h2>
    <ul>
      <li className="task-card">
        <div>
          <p className="task-title">Draft NDA Agreement</p>
          <p className="task-meta">Due: 24 Aug • Assigned to: Shekhar</p>
        </div>
        <span className="badge badge-danger">High</span>
      </li>
      <li className="task-card">
        <div>
          <p className="task-title">Client Meeting Prep</p>
          <p className="task-meta">Due: 26 Aug • Assigned to: Kirti</p>
        </div>
        <span className="badge badge-warning">Medium</span>
      </li>
      <li className="task-card">
        <div>
          <p className="task-title">Compliance Checklist</p>
          <p className="task-meta">Due: 28 Aug • Assigned to: Priyansh</p>
        </div>
        <span className="badge badge-success">Low</span>
      </li>
    </ul>
  </div>
)

const Admin = () => (
  <div className="admin-settings card">
    <h2> Admin Settings</h2>
    {/* (settings sections same as before) */}
  </div>
)

const InsightsPage = () => (
  <div className="card">
    <h2> Insights</h2>
    <p className="text-sm text-gray-600">(Mock insights content)</p>
  </div>
)

/* ===== Main App ===== */
export default function App() {
  const [toast, setToast] = useState(null)
  const [showFiltersModal, setShowFiltersModal] = useState(false)
  const [filters, setFilters] = useState({ quick: 'My items' })
  const [activePage, setActivePage] = useState('Dashboard')

  const notify = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const applyFilter = (f) => {
    setFilters({ quick: f })
    notify(`Filter applied: ${f}`)
  }

  return (
    <div className="min-h-screen flex text-gray-800 bg-gray-50">
      <Sidebar onNavigate={setActivePage} active={activePage} />

      <div className="flex-1 p-6">
        <Header onOpenFilters={() => setShowFiltersModal(true)} notify={notify} />

        <main className="mt-6 space-y-6">
          {activePage === 'Dashboard' && (
            <>
              <HeroBanner />
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <KPICards />
                  <div className="mt-6 flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 bg-white rounded-2xl p-4 shadow-card">
                      <Filters
                        active={filters.quick}
                        onApply={applyFilter}
                        onOpenAdvanced={() => setShowFiltersModal(true)}
                      />
                      <Worklist notify={notify} filter={filters.quick} />
                    </div>
                    <div className="w-full lg:w-96 bg-white rounded-2xl p-4 shadow-card">
                      <Insights />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-72 flex flex-col gap-6">
                  <ProgressCard />
                  <ProfileCard />
                  <Subscribers />
                </div>
              </div>
            </>
          )}

          {activePage === 'Cases' && <Cases />}
          {activePage === 'Tasks' && <Tasks />}
          {activePage === 'Insights' && <InsightsPage />}
          {activePage === 'Admin' && <Admin />}
        </main>
      </div>

      <Modal open={showFiltersModal} onClose={() => setShowFiltersModal(false)}>
        <div className="p-4">
          <h3 className="text-lg font-semibold">Advanced Filters</h3>
          <p className="text-sm mt-2 text-gray-600">(Mock controls for demo)</p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => { setFilters({ quick: 'My items' }); setShowFiltersModal(false); notify('Applied: My items') }}
              className="px-3 py-1 rounded bg-primary text-white"
            >
              Apply
            </button>
            <button onClick={() => setShowFiltersModal(false)} className="px-3 py-1 rounded border">Cancel</button>
          </div>
        </div>
      </Modal>

      <Toast data={toast} onClose={() => setToast(null)} />
    </div>
  )
}
