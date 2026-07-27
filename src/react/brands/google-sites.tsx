import type { SVGProps } from 'react'
export const IconBrandGoogleSites = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Google Sites'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <rect width='24' height='19.2' y='2' fill='#3186ff' rx='3.6' />
    <path fill='#50a0ff' d='M0 8h24v9.6a3.6 3.6 0 0 1-3.6 3.6H3.6A3.6 3.6 0 0 1 0 17.6z' />
    <path stroke='#fff' strokeLinecap='round' strokeWidth='3.6' d='M18.9 17h.9' />
    <path fill='#9ed1ff' d='M0 8h7.2v9.6a3.6 3.6 0 0 1-7.2 0z' />
    <path fill='url(#paint0_linear_13_19)' d='M0 5.6a3.6 3.6 0 0 1 7.2 0V8H0z' />
    <defs>
      <linearGradient
        id='paint0_linear_13_19'
        x1='6.686'
        x2='1.173'
        y1='2'
        y2='7.155'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.186' stopColor='#3186ff' />
        <stop offset='.851' stopColor='#a9a9fd' />
      </linearGradient>
    </defs>
  </svg>
)
