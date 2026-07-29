import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandKick: BrandIcon = ({ className, size, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Kick'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size ?? 'var(--ui-icon-size, 24)'}
    height={size ?? 'var(--ui-icon-size, 24)'}
    role='img'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 933 300'
    {...props}>
    <g clipPath='url(#kick_light__clip0_9790_492437)'>
      <g clipPath='url(#kick_light__clip1_9790_492437)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 0H100V66.6667H133.333V33.3333H166.667V0H266.667V100H233.333V133.333H200V166.667H233.333V200H266.667V300H166.667V266.667H133.333V233.333H100V300H0V0ZM666.667 0H766.667V66.6667H800V33.3333H833.333V0H933.333V100H900V133.333H866.667V166.667H900V200H933.333V300H833.333V266.667H800V233.333H766.667V300H666.667V0ZM300 0H400V300H300V0ZM533.333 0H466.667V33.3333H433.333V266.667H466.667V300H533.333H633.333V200H533.333V100H633.333V0H533.333Z'
          fill='#53FC18'
        />
      </g>
    </g>
    <defs>
      <clipPath id='kick_light__clip0_9790_492437'>
        <rect width='933' height='300' fill='white' />
      </clipPath>
      <clipPath id='kick_light__clip1_9790_492437'>
        <rect width='933.333' height='300' fill='white' />
      </clipPath>
    </defs>
  </svg>
)
