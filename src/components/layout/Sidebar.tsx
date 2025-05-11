// src/components/Sidebar.tsx
import React from 'react'
import { User, House } from 'lucide-react'

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-6">
      <nav className="space-y-4">
        <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
          <House />
          <span>Home</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
          <User />
          <span>Users</span>
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar
