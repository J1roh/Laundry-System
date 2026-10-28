import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { useAuth } from '@/features/auth'
import { Header } from '@/shared/layout/Header'
import { PageLoader } from '@/shared/ui'

/** Guards every signed-in route and renders the header plus an animated page outlet. */
export function AppShell() {
  const { profile, loading, signOut } = useAuth()
  const location = useLocation()

  if (loading) return <PageLoader />
  if (!profile) return <Navigate to="/login" replace />

  return (
    <div className="min-h-screen">
      <Header userName={profile.display_name} onLogout={signOut} />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="mx-auto max-w-6xl px-4 py-8 sm:px-6"
      >
        <Outlet />
      </motion.main>
    </div>
  )
}
