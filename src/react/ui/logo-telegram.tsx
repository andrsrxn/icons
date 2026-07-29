import type { Icon } from '../types'

export const IconLogoTelegram: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-telegram'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='m8.323 12.53 11.93-8.55a.084.084 0 0 0-.065 0L3.332 10.574a.518.518 0 0 0 .083.992l4.908.962Z'
        />
        <path
          fill='currentColor'
          d='m12.014 15.766-2.546 2.642a.667.667 0 0 1-1.145-.46v-5.419l3.691 3.237Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m8.323 12.53 7.509 6.582a.665.665 0 0 0 1.089-.35l3.381-14.689a.083.083 0 0 0-.067-.1.083.083 0 0 0-.044.005L3.332 10.575a.518.518 0 0 0 .083.992l4.908.962Zm0 0 11.93-8.55m-11.93 8.55v5.417a.665.665 0 0 0 1.145.461l2.546-2.642'
      />
    </svg>
  )
}
