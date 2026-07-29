import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandMastercard: BrandIcon = ({ className, size, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Mastercard'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size ?? 'var(--ui-icon-size, 24)'}
    height={size ?? 'var(--ui-icon-size, 24)'}
    role='img'
    viewBox='0 0 1000 618'
    {...props}>
    <path fill='#eb001b' d='M308 0a309 309 0 1 0 2 0z' />
    <path fill='#f79e1b' d='M690 0a309 309 0 1 0 2 0z' />
    <path fill='#ff5f00' d='M500 66a309 309 0 0 0 0 486 309 309 0 0 0 0-486' />
  </svg>
)
