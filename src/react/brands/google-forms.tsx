import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandGoogleForms: BrandIcon = ({ className, size, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Google Forms'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size ?? 'var(--ui-icon-size, 24)'}
    height={size ?? 'var(--ui-icon-size, 24)'}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <g clipPath='url(#clip0_1_209)'>
      <circle cx='4' cy='12' r='4' fill='#5746e4' />
      <circle cx='4' cy='20' r='4' fill='#b8c0ff' />
      <rect width='16' height='8' x='8' y='8' fill='#5746e4' rx='4' />
      <rect width='16' height='8' x='8' y='16' fill='#979dff' rx='4' />
      <path
        fill='url(#paint0_linear_1_209)'
        fillRule='evenodd'
        d='M20 0a4 4 0 0 1 0 8h-8a4 4 0 1 1 0-8z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M10.934 4c0-.59.477-1.066 1.066-1.066h8a1.066 1.066 0 1 1 0 2.132h-8c-.59 0-1.066-.477-1.066-1.066'
      />
      <path
        fill='#7271ff'
        fillRule='evenodd'
        d='M4 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8'
        clipRule='evenodd'
      />
      <path fill='#fff' d='M2.133 4a1.868 1.868 0 1 1 3.735 0 1.868 1.868 0 0 1-3.735 0' />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_1_209'
        x1='24'
        x2='8'
        y1='4'
        y2='4'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.612' stopColor='#7474fd' />
        <stop offset='1' stopColor='#67aeff' />
      </linearGradient>
      <clipPath id='clip0_1_209'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
)
