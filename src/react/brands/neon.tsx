import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandNeon: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Neon'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    viewBox='0 0 64 64'
    {...props}>
    <path
      d='M63 0.0177909V63.5526L38.4178 42.2501V63.5526H0V0L63 0.0177909ZM7.72251 55.8389H30.6953V25.3238L55.2779 47.0476V7.72922L7.72251 7.71559V55.8389Z'
      fill='#37C38F'
    />
  </svg>
)
