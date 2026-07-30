import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandAdobe: BrandIcon = ({ className, size = 24, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Adobe'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size}
    height={size}
    {...props}
    role='img'
    viewBox='0 0 91 80'
    xmlSpace='preserve'>
    <g fill='#eb1000' clipPath='url(#adobe__clip0_906_1839)'>
      <path d='M56.969 0h33.463v80zM33.463 0H0v80zm11.719 29.467L66.52 80H52.566l-6.368-16.054h-15.58z' />
    </g>
    <defs>
      <clipPath id='adobe__clip0_906_1839'>
        <path fill='#fff' d='M0 0h90.432v80H0z' />
      </clipPath>
    </defs>
  </svg>
)
