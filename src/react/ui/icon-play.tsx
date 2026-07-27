import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQuOTY0IDE0Ljg0OFY5LjA4N2MwLTMuMDMgMC00LjU0NC45ODYtNS4xMjQuOTg2LS41OCAyLjMxLjE1NiA0Ljk1OCAxLjYyOGw1LjA4MyAyLjgyNmMyLjczNiAxLjUyMSA0LjEwNCAyLjI4MiA0LjExMyAzLjQ0Ny4wMSAxLjE2Ni0xLjM0NiAxLjk0OC00LjA1NyAzLjUxM2wtNS4wODMgMi45MzVjLTIuNjY2IDEuNTQtNCAyLjMxLTUgMS43MzItMS0uNTc3LTEtMi4xMTctMS01LjE5NloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik00Ljk2NCAxNC44NDhWOS4wODdjMC0zLjAzIDAtNC41NDQuOTg2LTUuMTI0Ljk4Ni0uNTggMi4zMS4xNTYgNC45NTggMS42MjhsNS4wODMgMi44MjZjMi43MzYgMS41MjEgNC4xMDQgMi4yODIgNC4xMTMgMy40NDcuMDEgMS4xNjYtMS4zNDYgMS45NDgtNC4wNTcgMy41MTNsLTUuMDgzIDIuOTM1Yy0yLjY2NiAxLjU0LTQgMi4zMS01IDEuNzMyLTEtLjU3Ny0xLTIuMTE3LTEtNS4xOTZaIi8+PC9zdmc+)
 */
export const IconPlay: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-play'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M4.964 14.848V9.087c0-3.03 0-4.544.986-5.124.986-.58 2.31.156 4.958 1.628l5.083 2.826c2.736 1.521 4.104 2.282 4.113 3.447.01 1.166-1.346 1.948-4.057 3.513l-5.083 2.935c-2.666 1.54-4 2.31-5 1.732-1-.577-1-2.117-1-5.196Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.964 14.848V9.087c0-3.03 0-4.544.986-5.124.986-.58 2.31.156 4.958 1.628l5.083 2.826c2.736 1.521 4.104 2.282 4.113 3.447.01 1.166-1.346 1.948-4.057 3.513l-5.083 2.935c-2.666 1.54-4 2.31-5 1.732-1-.577-1-2.117-1-5.196Z'
      />
    </svg>
  )
}
