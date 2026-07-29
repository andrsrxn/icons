import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandMotion: BrandIcon = ({ className, size, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Motion'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size ?? 'var(--ui-icon-size, 24)'}
    height={size ?? 'var(--ui-icon-size, 24)'}
    role='img'
    viewBox='0 0 1103 386'
    {...props}>
    <path
      fill='var(--ui-icon-fill-motion)'
      d='M416.473 0 198.54 385.66H0L170.17 84.522C196.549 37.842 262.377 0 317.203 0Zm486.875 96.415c0-53.249 44.444-96.415 99.27-96.415s99.27 43.166 99.27 96.415c0 53.248-44.444 96.415-99.27 96.415s-99.27-43.167-99.27-96.415M453.699 0h198.54L434.306 385.66h-198.54Zm234.492 0h198.542L716.56 301.138c-26.378 46.68-92.207 84.522-147.032 84.522h-99.27Z'
    />
  </svg>
)
