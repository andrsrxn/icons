import type { BrandIcon, BrandIconProps } from '../types'
export const IconBrandGoogleDocs: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Google Docs'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <path
      fill='#3186ff'
      d='M3 2.727A2.727 2.727 0 0 1 5.727 0h6.546l7.862 7.862c.205.205.32.482.32.772v12.639A2.727 2.727 0 0 1 17.726 24h-12A2.727 2.727 0 0 1 3 21.273z'
    />
    <path
      fill='url(#paint0_linear_12_2)'
      d='M3 2.727A2.727 2.727 0 0 1 5.727 0h6.546l7.862 7.862c.205.205.32.482.32.772v12.639A2.727 2.727 0 0 1 17.726 24h-12A2.727 2.727 0 0 1 3 21.273z'
    />
    <path
      fill='url(#paint1_linear_12_2)'
      d='M3 2.727A2.727 2.727 0 0 1 5.727 0h6.546l7.862 7.862c.205.205.32.482.32.772v12.639A2.727 2.727 0 0 1 17.726 24h-12A2.727 2.727 0 0 1 3 21.273z'
    />
    <path fill='#7bf' d='M12.273 5.455V0l7.09 7.09H13.91a1.636 1.636 0 0 1-1.636-1.635' />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeWidth='1.636'
      d='M8.318 15.273h7.228m-7.228 3.954h4.91'
    />
    <defs>
      <linearGradient
        id='paint0_linear_12_2'
        x1='13.909'
        x2='9'
        y1='12.546'
        y2='22.909'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#acaaff' stopOpacity='0' />
        <stop offset='1' stopColor='#acaaff' stopOpacity='.9' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_12_2'
        x1='20.454'
        x2='3'
        y1='12'
        y2='12'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#3186ff' />
        <stop offset='.2' stopColor='#3186ff' stopOpacity='0' />
        <stop offset='.8' stopColor='#3186ff' stopOpacity='0' />
        <stop offset='1' stopColor='#3186ff' />
      </linearGradient>
    </defs>
  </svg>
)
