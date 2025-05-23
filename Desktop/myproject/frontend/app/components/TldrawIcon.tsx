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

// Define all valid icon names for stricter type checking
export type IconName =
  | 'info'
  | 'check'
  | 'cross'
  | 'cross-2'
  | 'alert-triangle'
  | 'alert-circle'
  | 'circle'
  | 'square'
  | 'loader'

interface Props {
  name: IconName
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
