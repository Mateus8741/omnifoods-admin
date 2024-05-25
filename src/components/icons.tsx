import { LucideProps, icons } from 'lucide-react'

export interface IconsProps {
  name: keyof typeof icons
  color?: string
  size?: LucideProps['size']
}

export function Icons({ name, color, size }: IconsProps) {
  const LucideIcon = icons[name]

  return <LucideIcon size={size} color={color} />
}
