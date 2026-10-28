import { Package, Power } from 'lucide-react'
import { Card, ErrorNote, SelectCard } from '@/shared/ui'
import { StepActions } from '../components/StepActions'
import type { WizardDispatch, WizardState } from '../useTransactionWizard'

interface ServiceStepProps {
  state: WizardState
  dispatch: WizardDispatch
  idleMachines: number
}

export function ServiceStep({ state, dispatch, idleMachines }: ServiceStepProps) {
  const noMachine = state.serviceType === 'self-service' && idleMachines === 0
  return (
    <Card title="Select Service Type">
      <div role="radiogroup" className="grid grid-cols-2 gap-3">
        <SelectCard
          group="service"
          icon={<Power />}
          label="Self-Service"
          hint={`Machine activates after payment · ${idleMachines} free`}
          selected={state.serviceType === 'self-service'}
          onSelect={() => dispatch({ type: 'setServiceType', value: 'self-service' })}
        />
        <SelectCard
          group="service"
          icon={<Package />}
          label="Full-Service"
          hint="Handled by staff"
          selected={state.serviceType === 'full-service'}
          onSelect={() => dispatch({ type: 'setServiceType', value: 'full-service' })}
        />
      </div>
      {noMachine && (
        <div className="mt-4">
          <ErrorNote message="All machines are busy. Choose Full-Service or free a machine first." />
        </div>
      )}
      <StepActions
        onBack={() => dispatch({ type: 'back' })}
        onNext={() => dispatch({ type: 'next' })}
        nextDisabled={noMachine}
      />
    </Card>
  )
}
