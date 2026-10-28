import type { CustomerType, OrderStatus, PaymentMethod, ServiceType } from './types'

const pesoFormat = new Intl.NumberFormat('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export function peso(amount: number, decimals = true): string {
  return decimals ? `₱${pesoFormat.format(amount)}` : `₱${Math.round(amount).toLocaleString('en-PH')}`
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatReceiptDate(iso: string): string {
  return new Date(iso).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

/** yyyy-mm-dd in local time, used for grouping and file names. */
export function localDateKey(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export const customerTypeLabel: Record<CustomerType, string> = {
  'walk-in': 'Walk-in',
  returning: 'Returning',
}

export const serviceTypeLabel: Record<ServiceType, string> = {
  'self-service': 'Self-Service',
  'full-service': 'Full-Service',
}

export const paymentMethodLabel: Record<PaymentMethod, string> = {
  cash: 'Cash',
  qr: 'QR Code',
}

export const orderStatusLabel: Record<OrderStatus, string> = {
  pending: 'Pending',
  washing: 'Washing',
  done: 'Done',
  claimed: 'Claimed',
}
