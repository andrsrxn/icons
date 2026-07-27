import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQuODQ0IDQuMTI5aDQuMjk0TDE5LjE1NiAxOS44N2gtNC4yOTRMNC44NDQgNC4xM1oiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0xMC43MzcgMTMuMzktNS44OTMgNi40OE0xOS4xNTYgNC4xM2wtNS44OTMgNi40ODJNNC44NDQgNC4xMjloNC4yOTRMMTkuMTU2IDE5Ljg3aC00LjI5NEw0Ljg0NCA0LjEzWiIvPjwvc3ZnPg==)
 */
export const IconLogoX: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-x'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M4.844 4.129h4.294L19.156 19.87h-4.294L4.844 4.13Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m10.737 13.39-5.893 6.48M19.156 4.13l-5.893 6.482M4.844 4.129h4.294L19.156 19.87h-4.294L4.844 4.13Z'
      />
    </svg>
  )
}
