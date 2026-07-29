import type { BrandIcon, BrandIconProps } from '../types'
export const IconBrandGmail: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Gmail'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <g clipPath='url(#clip0_1_175)'>
      <path
        fill='#fb413b'
        d='M5.143 5.143V20.57a.57.57 0 0 1-.572.572H1.143A1.143 1.143 0 0 1 0 20V5.143z'
      />
      <path
        fill='url(#paint0_linear_1_175)'
        d='M24 5.143V20c0 .631-.512 1.143-1.143 1.143H19.43a.57.57 0 0 1-.572-.572V5.143z'
      />
      <path
        fill='url(#paint1_linear_1_175)'
        d='M19.774 3.46a2.571 2.571 0 1 1 3.31 3.937l-10.349 8.699a1.14 1.14 0 0 1-1.47 0L.916 7.396a2.571 2.571 0 1 1 3.31-3.936L12 9.995z'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_1_175'
        x1='21.429'
        x2='21.429'
        y1='5.143'
        y2='21.34'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.408' stopColor='#3ac566' />
        <stop offset='1' stopColor='#338bfd' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_1_175'
        x1='24'
        x2='0'
        y1='9.786'
        y2='9.786'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#fad917' />
        <stop offset='.33' stopColor='#f74b47' />
        <stop offset='.66' stopColor='#f74b47' />
        <stop offset='1' stopColor='#ff64a0' />
      </linearGradient>
      <clipPath id='clip0_1_175'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
)
