import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandXAI: BrandIcon = ({ className, size = 24, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='xAI'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size}
    height={size}
    {...props}
    preserveAspectRatio='xMidYMid'
    role='img'
    viewBox='0 0 595 595'
    fill='none'>
    <g clipPath='url(#clip0_222_20)'>
      <path
        d='M466.025 191.978L476.311 596H569V44.8996L466.025 191.978ZM569 0H443.286L246.012 281.777L308.869 371.551L569 0ZM26 596H151.714L214.584 506.226L151.714 416.439L26 596ZM26 191.978L308.869 596H434.584L151.714 191.978H26Z'
        fill='var(--ui-icon-fill-monochrome)'
      />
    </g>
    <defs>
      <clipPath id='clip0_222_20'>
        <rect width='595' height='595' fill='white' />
      </clipPath>
    </defs>
  </svg>
)
