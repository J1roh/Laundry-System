import { useCallback, useEffect, useState } from 'react'
import { ShieldAlert } from 'lucide-react'
import type { Addon, Machine, Settings } from '@/lib/types'
import { useAuth } from '@/features/auth'
import { ErrorNote, FadeIn, PageHeader, PageLoader } from '@/shared/ui'
import { fetchAddons, fetchMachines, fetchSettings } from './api'
import { AddonsManager } from './AddonsManager'
import { MachinesManager } from './MachinesManager'
import { PricingForm } from './PricingForm'
import { ShopInfoForm } from './ShopInfoForm'

export function SettingsPage() {
  const { profile } = useAuth()
  const editable = profile?.role === 'admin'
  const [settings, setSettings] = useState<Settings | null>(null)
  const [addons, setAddons] = useState<Addon[]>([])
  const [machines, setMachines] = useState<Machine[]>([])
  const [error, setError] = useState<string | null>(null)

  const onError = (e: Error) => setError(e.message)
  const loadAddons = useCallback(() => fetchAddons().then(setAddons).catch(onError), [])
  const loadMachines = useCallback(() => fetchMachines().then(setMachines).catch(onError), [])

  useEffect(() => {
    fetchSettings().then(setSettings).catch(onError)
    loadAddons()
    loadMachines()
  }, [loadAddons, loadMachines])

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="Settings" subtitle="System configuration" backTo="/" />
      {!editable && (
        <p className="mb-4 flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
          <ShieldAlert className="size-4" /> Only admins can change settings. You are viewing them read-only.
        </p>
      )}
      <ErrorNote message={error} />
      {!settings ? (
        !error && <PageLoader />
      ) : (
        <div className="space-y-5">
          <FadeIn index={0}>
            <PricingForm pricePerKg={settings.price_per_kg} editable={editable} />
          </FadeIn>
          <FadeIn index={1}>
            <AddonsManager addons={addons} editable={editable} onChanged={loadAddons} />
          </FadeIn>
          <FadeIn index={2}>
            <MachinesManager machines={machines} editable={editable} onChanged={loadMachines} />
          </FadeIn>
          <FadeIn index={3}>
            <ShopInfoForm settings={settings} editable={editable} />
          </FadeIn>
        </div>
      )}
    </div>
  )
}
