import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNCA0Ljk3NWg2LjM3Nm0zLjM1IDBIMjBNNCA5LjY1OGg2LjM3Nm0zLjM1IDBIMjBNNCAxNC4zNDJoNi4zNzZtMy4zNSAwSDIwTTQgMTkuMDI1aDYuMzc2bTMuMzUgMEgyMCIvPjwvc3ZnPg==)
 */
export const IconTextTwoColumns: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-text-two-columns'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4 4.975h6.376m3.35 0H20M4 9.658h6.376m3.35 0H20M4 14.342h6.376m3.35 0H20M4 19.025h6.376m3.35 0H20'
      />
    </svg>
  )
}
