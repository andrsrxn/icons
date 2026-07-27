import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMy40ODggMTguMzQuMTY2LjE2NmMxLjMzMyAxLjMzNiAyIDIuMDA0IDIuODI4IDIuMDA1bTMtMi4xNy0uMTY5LjE2OGMtMS4zMzQgMS4zMzUtMi4wMDIgMi4wMDItMi44MyAyLjAwMm0wIDAtLjAwMS00LjEwNGMwLS44NjcgMC0xLjMuMTY5LTEuNjg1LjE3LS4zODUuNDg5LS42NzggMS4xMjgtMS4yNjRMMTIgOS41OW0yLjQ5IDguNzUxLjE2OC4xNjhjMS4zMzQgMS4zMzUgMi4wNiAyLjAwMiAyLjg4OCAyLjAwMi44MyAwIDEuNDM4LS42NjkgMi43NzEtMi4wMDVsLjE2NS0uMTY1bS0yLjkzNiAyLjE3di00LjA5OGMwLS44NyAwLTEuMzA1LS4xNy0xLjY5LS4xNy0uMzg3LS40OTItLjY4LTEuMTM1LTEuMjY2TDEyIDkuNTltMCAwVjMuNTk2Ii8+PC9zdmc+)
 */
export const IconSplit: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-split'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m3.488 18.34.166.166c1.333 1.336 2 2.004 2.828 2.005m3-2.17-.169.168c-1.334 1.335-2.002 2.002-2.83 2.002m0 0-.001-4.104c0-.867 0-1.3.169-1.685.17-.385.489-.678 1.128-1.264L12 9.59m2.49 8.751.168.168c1.334 1.335 2.06 2.002 2.888 2.002.83 0 1.438-.669 2.771-2.005l.165-.165m-2.936 2.17v-4.098c0-.87 0-1.305-.17-1.69-.17-.387-.492-.68-1.135-1.266L12 9.59m0 0V3.596'
      />
    </svg>
  )
}
