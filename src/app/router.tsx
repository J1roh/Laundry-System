import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from '@/features/auth'
import { DashboardPage } from '@/features/dashboard'
import { NewTransactionPage } from '@/features/transaction'
import { OngoingOrdersPage } from '@/features/orders'
import { ReportsPage } from '@/features/reports'
import { SettingsPage } from '@/features/settings'
import { AppShell } from './AppShell'

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    element: <AppShell />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'transaction', element: <NewTransactionPage /> },
      { path: 'orders', element: <OngoingOrdersPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
])
