import { BarChart3, ListChecks, Settings, ShoppingCart } from 'lucide-react'
import { PageHeader } from '@/shared/ui'
import { ActionCard } from './ActionCard'

const actions = [
  { to: '/transaction', title: 'New Transaction', description: 'Start a new laundry order', icon: <ShoppingCart />, tone: 'bg-blue-600' },
  { to: '/orders', title: 'Ongoing Orders', description: 'View and manage active orders', icon: <ListChecks />, tone: 'bg-green-500' },
  { to: '/reports', title: 'Reports', description: 'View sales and statistics', icon: <BarChart3 />, tone: 'bg-purple-600' },
  { to: '/settings', title: 'Settings', description: 'System configuration', icon: <Settings />, tone: 'bg-slate-600' },
]

export function DashboardPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="Dashboard" subtitle="Select an action to get started" />
      <div className="grid gap-4 sm:grid-cols-2">
        {actions.map((action, i) => (
          <ActionCard key={action.to} index={i} {...action} />
        ))}
      </div>
    </div>
  )
}
