import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandGoogleVids: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Google Vids'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <rect width='14.21' height='13.263' x='.664' y='5.368' fill='#d0d9ff' rx='4.421' />
    <rect width='16.737' height='19.579' x='3.191' y='2.211' fill='#b8c0ff' rx='4.737' />
    <rect width='16.737' height='24' x='6.349' fill='#7372fe' rx='5.053' />
    <rect width='16.737' height='24' x='6.349' fill='url(#paint0_linear_19_10)' rx='5.053' />
    <rect width='16.737' height='24' x='6.349' fill='url(#paint1_linear_19_10)' rx='5.053' />
    <path
      fill='#fff'
      d='M11.875 14.609V9.39a.947.947 0 0 1 1.427-.817l4.444 2.609a.947.947 0 0 1 0 1.634l-4.444 2.609a.947.947 0 0 1-1.427-.817'
    />
    <defs>
      <linearGradient
        id='paint0_linear_19_10'
        x1='6.349'
        x2='17.717'
        y1='12'
        y2='12'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#65acff' />
        <stop offset='1' stopColor='#65acff' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_19_10'
        x1='14.717'
        x2='14.717'
        y1='0'
        y2='24'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.024' stopColor='#7372fe' />
        <stop offset='.104' stopColor='#7372fe' stopOpacity='0' />
        <stop offset='.896' stopColor='#7372fe' stopOpacity='0' />
        <stop offset='.976' stopColor='#7372fe' />
      </linearGradient>
    </defs>
  </svg>
)
