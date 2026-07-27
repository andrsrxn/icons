import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy44MTggMTUuMDc4VjguOTMybTkuODE4IDYuMTQ2VjguOTMybS0zLjI3MiA4LjE5MlY2Ljg4Nm05LjgxOCA5LjIxNVY3LjkxTTcuMDkxIDE5LjE2OVY0Ljg0MW05LjgxOCAxNC4zMjhWNC44NDEiLz48L3N2Zz4=)
 */
export const IconSoundeWave: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-sounde-wave'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.818 15.078V8.932m9.818 6.146V8.932m-3.272 8.192V6.886m9.818 9.215V7.91M7.091 19.169V4.841m9.818 14.328V4.841'
      />
    </svg>
  )
}
