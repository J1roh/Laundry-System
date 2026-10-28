import { Droplet } from 'lucide-react'
import { cn } from '../cn'

export function BrandMark({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm',
        size === 'lg' ? 'size-14 [&_svg]:size-7' : 'size-9 [&_svg]:size-5',
      )}
    >
      <Droplet />
    </span>
  )
}
