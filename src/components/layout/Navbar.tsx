'use client'
import React from 'react'
import { useLogout } from '@/hooks/useMutation'
import { useRouter } from 'next/navigation'

const Navbar: React.FC = () => {
  const router = useRouter()
  const { mutate: logout, isPending } = useLogout({
    onSuccess: () => {
      alert('Logout realizado com sucesso!')
      router.push('/sign-in')
    },
    onError: err => {
      console.error('Erro ao fazer logout:', err)
    }
  })

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="space-x-4">
        <button
          className="text-sm px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={handleLogout}
          disabled={isPending}
        >
          {isPending ? 'Saindo...' : 'Logout'}
        </button>
        <button className="text-sm px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
          Profile
        </button>
      </div>
    </header>
  )
}

export default Navbar
