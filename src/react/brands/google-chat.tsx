import type { BrandIcon, BrandIconProps } from '../types'
export const IconBrandGoogleChat: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Google Chat'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <g clipPath='url(#clip0_13_10)'>
      <rect width='21.818' height='14.182' x='1.091' y='2.142' fill='#01af59' rx='7.091' />
      <path
        fill='url(#paint0_linear_13_10)'
        d='M16.91 4.87a7.09 7.09 0 0 1 0 14.181H12.2l-5.483 3.547a.818.818 0 0 1-1.263-.687V18.86A7.091 7.091 0 0 1 7.091 4.87z'
      />
      <path
        fill='url(#paint1_linear_13_10)'
        d='M16.91 4.87a7.09 7.09 0 0 1 0 14.181H12.2l-5.483 3.547a.818.818 0 0 1-1.263-.687V18.86A7.091 7.091 0 0 1 7.091 4.87z'
      />
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeWidth='1.636'
        d='M7.364 11.415c2.454 3.273 6.818 3.273 9.272 0'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_13_10'
        x1='12'
        x2='12'
        y1='4.869'
        y2='22.73'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#7fccfd' />
        <stop offset='.352' stopColor='#0ebb5e' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_13_10'
        x1='24'
        x2='0'
        y1='13.8'
        y2='13.8'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#0ebb5e' />
        <stop offset='.15' stopColor='#0ebb5e' stopOpacity='0' />
        <stop offset='.85' stopColor='#0ebb5e' stopOpacity='0' />
        <stop offset='1' stopColor='#0ebb5e' />
      </linearGradient>
      <clipPath id='clip0_13_10'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
)
