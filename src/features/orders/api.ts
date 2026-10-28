import { supabase, unwrap } from '@/lib/supabase'
import { mapOrderDetail } from '@/lib/orderDetail'
import type { OrderDetail, OrderStatus } from '@/lib/types'

export async function fetchOrders(): Promise<OrderDetail[]> {
  const rows = unwrap(await supabase.from('order_details').select('*').order('created_at', { ascending: false }).limit(500))
  return rows.map(mapOrderDetail)
}

export async function updateOrderStatus(id: string, status: OrderStatus): Promise<void> {
  unwrap(await supabase.from('orders').update({ status }).eq('id', id).select('id').single())
}

/** Calls `onChange` whenever any order is inserted or updated, from any till. */
export function subscribeToOrders(onChange: () => void): () => void {
  const channel = supabase
    .channel('orders-feed')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, onChange)
    .subscribe()
  return () => {
    supabase.removeChannel(channel)
  }
}
