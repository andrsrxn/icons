import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandGoogleTasks: BrandIcon = ({ className, size, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Google Tasks'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size ?? 'var(--ui-icon-size, 24)'}
    height={size ?? 'var(--ui-icon-size, 24)'}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <path
      fill='#bbe2fe'
      d='M.6 13.5c0-5.468 4.432-9.9 9.9-9.9h3c5.468 0 9.9 4.432 9.9 9.9s-4.432 9.9-9.9 9.9h-3c-5.468 0-9.9-4.432-9.9-9.9'
    />
    <path
      fill='url(#paint0_linear_1_226)'
      d='M0 10.5C0 4.701 4.701 0 10.5 0h3C19.299 0 24 4.701 24 10.5S19.299 21 13.5 21h-3C4.701 21 0 16.299 0 10.5'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.8'
      d='m7.2 10.8 2.652 2.893a.9.9 0 0 0 1.312.015L17.7 6.9'
    />
    <defs>
      <linearGradient
        id='paint0_linear_1_226'
        x1='12'
        x2='12'
        y1='0'
        y2='21'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.446' stopColor='#3186ff' />
        <stop offset='1' stopColor='#949dff' />
      </linearGradient>
      <clipPath id='clip0_1_226'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
)
