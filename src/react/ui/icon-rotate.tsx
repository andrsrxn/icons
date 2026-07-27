import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQgNS43NzJoMTZ2MTIuNDc0SDRWNS43NzJaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTguNjUxIDE1Ljk4LjA4NC4wOGMxLjA2NCAxLjAxNyAxLjU5NiAxLjUyNiAxLjU5NiAyLjE2NyAwIC42NC0uNTMxIDEuMTUtMS41OTQgMi4xNjdsLS4wODYuMDgzbTEuNjgtMi4yM0g4Yy0xLjg4NiAwLTIuODI4IDAtMy40MTQtLjU4NkM0IDE3LjA3NSA0IDE2LjEzMiA0IDE0LjI0NnYtMy4xNDNtLS4zMy01LjMzMUgxNmMxLjg4NiAwIDIuODI4IDAgMy40MTQuNTg1QzIwIDYuOTQzIDIwIDcuODg2IDIwIDkuNzcydjMuMTQyTTUuMzQ5IDMuNTI0bC0uMDg0LjA4QzQuMjAxIDQuNjIgMy42NyA1LjEyOCAzLjY2OSA1Ljc3YzAgLjY0LjUzMSAxLjE1IDEuNTk0IDIuMTY4bC4wODYuMDgyIi8+PC9zdmc+)
 */
export const IconRotate: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-rotate'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path fill='currentColor' d='M4 5.772h16v12.474H4V5.772Z' opacity='.2' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m18.651 15.98.084.08c1.064 1.017 1.596 1.526 1.596 2.167 0 .64-.531 1.15-1.594 2.167l-.086.083m1.68-2.23H8c-1.886 0-2.828 0-3.414-.586C4 17.075 4 16.132 4 14.246v-3.143m-.33-5.331H16c1.886 0 2.828 0 3.414.585C20 6.943 20 7.886 20 9.772v3.142M5.349 3.524l-.084.08C4.201 4.62 3.67 5.128 3.669 5.77c0 .64.531 1.15 1.594 2.168l.086.082'
      />
    </svg>
  )
}
