import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandBitbucket: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    x='0'
    y='0'
    fill='none'
    aria-label='Bitbucket'
    className={`ui-icon-brand ${className ?? ''}`}
    enableBackground='new 8.4 14.39 2481.29 2231.21'
    preserveAspectRatio='xMidYMid'
    role='img'
    viewBox='8.4 14.39 2481.29 2231.21'
    xmlSpace='preserve'
    {...props}>
    <path fill='none' d='M989.97 1493.09h518.05l125.04-730.04H852.22z' />
    <path
      fill='#2684ff'
      d='M88.92 14.4c-43.9-.57-79.95 34.56-80.51 78.46-.06 4.61.28 9.22 1.02 13.77l337.48 2048.72c8.68 51.75 53.26 89.8 105.74 90.24h1619.03c39.38.5 73.19-27.9 79.49-66.78l337.49-2071.78c7.03-43.34-22.41-84.17-65.75-91.2-4.55-.74-9.15-1.08-13.76-1.02zm1421.07 1480.69H993.24l-139.92-731h781.89z'
    />
    <linearGradient
      id='SVGID_1_'
      x1='945.109'
      x2='944.492'
      y1='1524.839'
      y2='1524.189'
      gradientTransform='matrix(1996.6343 0 0 -1480.3047 -1884485.625 2258195)'
      gradientUnits='userSpaceOnUse'>
      <stop offset='.18' stopColor='#0052cc' />
      <stop offset='1' stopColor='#2684ff' />
    </linearGradient>
    <path
      fill='url(#SVGID_1_)'
      d='M2379.27 763.06h-745.5l-125.12 730.42H992.31l-609.67 723.67a107.6 107.6 0 0 0 69.5 26.21h1618.13c39.35.51 73.14-27.88 79.44-66.72z'
    />
  </svg>
)
