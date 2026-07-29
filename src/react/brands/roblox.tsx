import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandRoblox: BrandIcon = ({ className, size, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Roblox'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size ?? 'var(--ui-icon-size, 24)'}
    height={size ?? 'var(--ui-icon-size, 24)'}
    role='img'
    viewBox='0 0 320.4 320.4'
    fill='none'
    {...props}>
    <rect width='320.4' height='320.4' rx='54.8' fill='#3156ff' />
    <path
      fill='#fff'
      d='M99 56.5 266 99.5 223.2 266.6 56 223.7M180.2 193.5 193.5 144.6 144.6 131.4 131.4 180.2'
    />
  </svg>
)
