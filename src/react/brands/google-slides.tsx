import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandGoogleSlides: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Google Slides'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <g clipPath='url(#clip0_1_241)'>
      <path
        fill='url(#paint0_linear_1_241)'
        d='M6.671 23.136 21.67 20.76v-.353l-19.117-.264a3.6 3.6 0 0 0 4.12 2.992'
      />
      <path fill='#ffdc12' d='M21.567 3.802A3.6 3.6 0 0 0 17.448.81L2.4 3.193v.61z' />
      <rect width='24' height='18' y='3.005' fill='url(#paint1_linear_1_241)' rx='3' />
      <path stroke='#fff' strokeLinejoin='round' strokeWidth='1.8' d='M19.2 7.505H4.8v9h14.4z' />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_1_241'
        x1='2.552'
        x2='21.669'
        y1='21.662'
        y2='21.662'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#ffbd08' />
        <stop offset='1' stopColor='#fbabe6' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_1_241'
        x1='9.6'
        x2='12'
        y1='3.605'
        y2='21.006'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#febd02' />
        <stop offset='1' stopColor='#fff447' />
      </linearGradient>
      <clipPath id='clip0_1_241'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
)
