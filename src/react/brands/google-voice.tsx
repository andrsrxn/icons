import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandGoogleVoice: BrandIcon = ({ className, size, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Google Voice'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size ?? 'var(--ui-icon-size, 24)'}
    height={size ?? 'var(--ui-icon-size, 24)'}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <g clipPath='url(#clip0_9_11)'>
      <path
        fill='url(#paint0_linear_9_11)'
        d='M7.461 7.246 5.876 5.66a2.94 2.94 0 0 0-4.155 0 5.876 5.876 0 0 0 0 8.31l8.31 8.31a5.876 5.876 0 0 0 8.309 0 2.94 2.94 0 0 0 0-4.156l-1.586-1.585a2.374 2.374 0 0 0-3.358 0l-.326.326a1.78 1.78 0 0 1-2.518 0l-3.417-3.417a1.78 1.78 0 0 1 0-2.518l.326-.326a2.374 2.374 0 0 0 0-3.358'
      />
      <path
        fill='url(#paint1_linear_9_11)'
        d='M10.2 12.6V1.2A1.2 1.2 0 0 1 11.4 0h.6c6.627 0 12 5.373 12 12v.6a1.2 1.2 0 0 1-1.2 1.2H11.4a1.2 1.2 0 0 1-1.2-1.2'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_9_11'
        x1='12.006'
        x2='5.788'
        y1='11.994'
        y2='18.212'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.137' stopColor='#76c6ec' />
        <stop offset='.45' stopColor='#30ba99' />
        <stop offset='.851' stopColor='#03ae55' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_9_11'
        x1='21.6'
        x2='10.8'
        y1='2.4'
        y2='13.2'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.348' stopColor='#60d675' />
        <stop offset='1' stopColor='#7acaff' />
      </linearGradient>
      <clipPath id='clip0_9_11'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
)
