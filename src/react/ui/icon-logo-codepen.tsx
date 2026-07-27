import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMuNzk3IDE0LjUyNCAxMiAxMC4xMDdsOC4yMDMgNC40MTdMMTIgMTguOTQxbC04LjIwMy00LjQxN1oiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0xMiAxOC45NDEgOC4yMDMtNC40MTdWOS40NzZMMTIgNS4wNTkgMy43OTcgOS40NzZ2NS4wNDhMMTIgMTguOTQxWm04LjIwMy05LjQ2NUwxMiAxMy44OTNtOC4yMDMuNjMxTDEyIDEwLjEwN20tOC4yMDMtLjYzMUwxMiAxMy44OTNtLTguMjAzLjYzMUwxMiAxMC4xMDdtMC01LjA0OHY1LjA0OG0wIDMuNzg2djUuMDQ4Ii8+PC9zdmc+)
 */
export const IconLogoCodepen: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-codepen'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.797 14.524 12 10.107l8.203 4.417L12 18.941l-8.203-4.417Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m12 18.941 8.203-4.417V9.476L12 5.059 3.797 9.476v5.048L12 18.941Zm8.203-9.465L12 13.893m8.203.631L12 10.107m-8.203-.631L12 13.893m-8.203.631L12 10.107m0-5.048v5.048m0 3.786v5.048'
      />
    </svg>
  )
}
