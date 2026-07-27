import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTUuNDgxIDcuMDU2LTcuMjcgNy4yN2ExLjUgMS41IDAgMCAwIDIuMTIyIDIuMTIybDcuNTg0LTcuNTgzYTMuMDAxIDMuMDAxIDAgMSAwLTQuMjQ1LTQuMjQ1bC03Ljg3IDcuODcxYTQuNTAyIDQuNTAyIDAgMCAwIDYuMzY2IDYuMzY3bDQuNzI5LTQuNzMiLz48L3N2Zz4=)
 */
export const IconPaperClip: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-paper-clip'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m15.481 7.056-7.27 7.27a1.5 1.5 0 0 0 2.122 2.122l7.584-7.583a3.001 3.001 0 1 0-4.245-4.245l-7.87 7.871a4.502 4.502 0 0 0 6.366 6.367l4.729-4.73'
      />
    </svg>
  )
}
