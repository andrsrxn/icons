import type { BrandIcon, BrandIconProps } from '../types'
export const IconBrandQuora: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Quora'
    className={`ui-icon-brand ${className ?? ''}`}
    preserveAspectRatio='xMidYMid'
    role='img'
    fill='none'
    viewBox='0 0 32 32'
    {...props}>
    <path
      fill='#b72d2c'
      fillRule='evenodd'
      d='M18.875 27.54c-1.074.3-2.206.46-3.375.46C8.596 28 3 22.404 3 15.5S8.596 3 15.5 3 28 8.596 28 15.5a12.48 12.48 0 0 1-4.68 9.753c.786.992 1.698 1.76 2.695 1.76 1.644 0 2.139-1.323 2.18-1.985H30c0 3.503-2.095 5.851-5.538 5.963-1.214.04-3.247.105-5.587-3.452m-1.1-1.914c-.66.244-1.414.374-2.275.374C10.329 26 9 21.299 9 15.5S10.33 5 15.5 5 22 9.701 22 15.5c0 2.354-.219 4.526-.825 6.277C20.195 20.054 18.65 18 15.801 18c-2.372 0-4.19.971-4.801 1.457l.753 1.505c.21-.07.738-.208 1.177-.208.549 0 2.494-.177 4.377 3.906q.236.51.468.966'
      clipRule='evenodd'
    />
  </svg>
)
