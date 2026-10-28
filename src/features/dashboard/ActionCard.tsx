import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { cn } from '@/shared/cn'

interface ActionCardProps {
  to: string
  title: string
  description: string
  icon: ReactNode
  /** Tailwind background class for the icon tile. */
  tone: string
  index: number
}

const MotionLink = motion.create(Link)

export function ActionCard({ to, title, description, icon, tone, index }: ActionCardProps) {
  return (
    <MotionLink
      to={to}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, type: 'spring', stiffness: 300, damping: 26 }}
      whileHover={{ y: -4, boxShadow: '0 12px 24px -12px rgb(15 23 42 / 0.25)' }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm focus-visible:outline-2 focus-visible:outline-blue-500"
    >
      <motion.span
        whileHover={{ rotate: -8, scale: 1.08 }}
        className={cn('flex size-12 shrink-0 items-center justify-center rounded-xl text-white [&_svg]:size-6', tone)}
      >
        {icon}
      </motion.span>
      <span>
        <span className="block font-medium text-slate-900">{title}</span>
        <span className="block text-sm text-slate-500">{description}</span>
      </span>
    </MotionLink>
  )
}
