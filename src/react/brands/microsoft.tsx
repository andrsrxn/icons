import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandMicrosoft: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Microsoft'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 256 256'
    {...props}>
    <path fill='#f1511b' d='M121.666 121.666H0V0h121.666z' />
    <path fill='#80cc28' d='M256 121.666H134.335V0H256z' />
    <path fill='#00adef' d='M121.663 256.002H0V134.336h121.663z' />
    <path fill='#fbbc09' d='M256 256.002H134.335V134.336H256z' />
  </svg>
)
