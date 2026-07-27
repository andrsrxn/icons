import type { SVGProps } from 'react'
export const IconBrandGoogleSheet = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Google Sheet'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <rect width='13.876' height='13.876' y='4.601' fill='#029853' rx='2.669' />
    <path
      fill='url(#paint0_linear_9_7)'
      d='M2.135 5.669A2.67 2.67 0 0 1 4.803 3h16.278a2.67 2.67 0 0 1 2.669 2.669V17.41a2.67 2.67 0 0 1-2.669 2.669H4.804a2.67 2.67 0 0 1-2.668-2.669z'
    />
    <path
      fill='url(#paint1_linear_9_7)'
      d='M2.135 5.669A2.67 2.67 0 0 1 4.803 3h16.278a2.67 2.67 0 0 1 2.669 2.669V17.41a2.67 2.67 0 0 1-2.669 2.669H4.804a2.67 2.67 0 0 1-2.668-2.669z'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeWidth='1.601'
      d='M18.007 8.87v8.54m2.802-2.535H9.334'
    />
    <defs>
      <linearGradient
        id='paint0_linear_9_7'
        x1='2.135'
        x2='23.75'
        y1='11.539'
        y2='11.539'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#7bc8fe' />
        <stop offset='.677' stopColor='#11bc5c' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_9_7'
        x1='13.019'
        x2='13.019'
        y1='20.079'
        y2='3'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#14ba61' />
        <stop offset='.19' stopColor='#14ba61' stopOpacity='0' />
        <stop offset='.81' stopColor='#14ba61' stopOpacity='0' />
        <stop offset='1' stopColor='#14ba61' />
      </linearGradient>
    </defs>
  </svg>
)
