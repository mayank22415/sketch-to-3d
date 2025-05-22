// components/TldrawIcon.tsx

import {
  AlertTriangle,
  Check,
  Info,
  X,
  AlertCircle,
  Circle,
  Square,
  Loader2,
} from 'lucide-react'

interface Props {
  name: string
  className?: string
}

export function TldrawIcon({ name, className }: Props) {
  switch (name) {
    case 'info':
      return <Info className={className} />
    case 'check':
      return <Check className={className} />
    case 'cross':
    case 'cross-2':
      return <X className={className} />
    case 'alert-triangle':
      return <AlertTriangle className={className} />
    case 'alert-circle':
      return <AlertCircle className={className} />
    case 'circle':
      return <Circle className={className} />
    case 'square':
      return <Square className={className} />
    case 'loader':
      return <Loader2 className={className} />
    default:
      return <span className={className}>?</span>
  }
}
