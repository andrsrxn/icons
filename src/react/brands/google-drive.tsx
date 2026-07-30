import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandGoogleDrive: BrandIcon = ({
  className,
  size = 24,
  ...props
}: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Google Drive'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size}
    height={size}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <path
      fill='url(#paint0_linear_2_41)'
      d='m12 18.012 3.827-6.561 2.7-4.63 2.778 4.63 1.922 3.202c2.146 3.579-.43 8.13-4.604 8.13h-3.84l-1.391-2.385z'
    />
    <path
      fill='url(#paint1_linear_2_41)'
      d='M8.173 11.45 12 18.013l1.392 2.386 1.392 2.386H5.376c-4.172 0-6.75-4.552-4.603-8.13l1.922-3.203z'
    />
    <path
      fill='url(#paint2_linear_2_41)'
      d='M15.827 11.45H2.695l2.777-4.628 2.18-3.634c1.97-3.282 6.726-3.282 8.696 0l2.18 3.634z'
    />
    <defs>
      <linearGradient
        id='paint0_linear_2_41'
        x1='15.895'
        x2='23.427'
        y1='11.099'
        y2='19.914'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#feca06' />
        <stop offset='1' stopColor='#ffe31f' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_2_41'
        x1='7.228'
        x2='11.537'
        y1='20.218'
        y2='22.924'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#3185ff' />
        <stop offset='1' stopColor='#a8a8fe' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_2_41'
        x1='9.818'
        x2='4.638'
        y1='8.289'
        y2='10.378'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#16bc66' />
        <stop offset='1' stopColor='#78c9ff' />
      </linearGradient>
    </defs>
  </svg>
)
