import type { BrandIcon, BrandIconProps } from '../types'
export const IconBrandPerplexity: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Perplexity'
    className={`ui-icon-brand ${className ?? ''}`}
    preserveAspectRatio='xMidYMid'
    role='img'
    xmlSpace='preserve'
    viewBox='0 0 80 80'
    fill='none'
    {...props}>
    <g clipPath='url(#clip0_223_85)'>
      <path
        d='M40 0V80M19 24.7651V4.27282L40 24.7651M40 24.7651L19 46.1744V75.7272L40 54.5087M40 24.7651L61 4.27282V24.7651'
        stroke='#20808D'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.8393 55H10V25H70V55H61.1607'
        stroke='#20808D'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M40 25L61 46.4252V76L40 54.7657'
        stroke='#20808D'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_223_85'>
        <rect width='80' height='80' fill='white' />
      </clipPath>
    </defs>
  </svg>
)
