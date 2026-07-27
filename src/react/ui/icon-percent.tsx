import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuMzk4IDYuMzQzYTIuMTYgMi4xNiAwIDEgMS0zLjA1NSAzLjA1NCAyLjE2IDIuMTYgMCAwIDEgMy4wNTUtMy4wNTRabTguMjU5IDguMjU5YTIuMTYgMi4xNiAwIDEgMS0zLjA1NSAzLjA1NSAyLjE2IDIuMTYgMCAwIDEgMy4wNTUtMy4wNTVaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNC45MDggMTkuMDkyIDE5LjA5MiA0LjkwOE05LjM5OCA2LjM0M2EyLjE2IDIuMTYgMCAxIDEtMy4wNTUgMy4wNTQgMi4xNiAyLjE2IDAgMCAxIDMuMDU1LTMuMDU0Wm04LjI1OSA4LjI2YTIuMTYgMi4xNiAwIDEgMS0zLjA1NSAzLjA1NCAyLjE2IDIuMTYgMCAwIDEgMy4wNTUtMy4wNTVaIi8+PC9zdmc+)
 */
export const IconPercent: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-percent'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M9.398 6.343a2.16 2.16 0 1 1-3.055 3.054 2.16 2.16 0 0 1 3.055-3.054Zm8.259 8.259a2.16 2.16 0 1 1-3.055 3.055 2.16 2.16 0 0 1 3.055-3.055Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.908 19.092 19.092 4.908M9.398 6.343a2.16 2.16 0 1 1-3.055 3.054 2.16 2.16 0 0 1 3.055-3.054Zm8.259 8.26a2.16 2.16 0 1 1-3.055 3.054 2.16 2.16 0 0 1 3.055-3.055Z'
      />
    </svg>
  )
}
