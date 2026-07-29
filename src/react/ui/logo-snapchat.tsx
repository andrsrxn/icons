import type { Icon } from './types'

export const IconLogoSnapchat: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-snapchat'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.022 19.18c-.918.235-2.03-.574-3.022-.574s-2.104.81-3.022.574c-.95-.243-1.408-1.724-2.247-2.185-.851-.469-2.537-.159-3.241-.819 0 0 4.255-1.52 4.255-7.897a4.255 4.255 0 1 1 8.51 0c0 6.374 4.255 7.897 4.255 7.897-.704.66-2.39.35-3.241.82-.84.46-1.297 1.941-2.247 2.184Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m7.313 11.513-2-.8m11.374.8 2-.8m-3.665 8.467c-.918.235-2.03-.574-3.022-.574s-2.104.81-3.022.574c-.95-.243-1.408-1.724-2.247-2.185-.851-.469-2.537-.159-3.241-.819 0 0 4.255-1.52 4.255-7.897a4.255 4.255 0 1 1 8.51 0c0 6.374 4.255 7.897 4.255 7.897-.704.66-2.39.35-3.241.82-.84.46-1.297 1.941-2.247 2.184Z'
      />
    </svg>
  )
}
