import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNDQ3IDExLjk0N2E4LjUgOC41IDAgMSAxLTE3IDAgOC41IDguNSAwIDAgMSAxNyAwWm0tNC43ODgtMy42Ny01LjY0IDEuNzUxLTEuNzk5IDUuNDk0IDUuNTkxLTEuNzUgMS44NDgtNS40OTRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0xMy45ODYgMTMuOTg2IDIuMDQtNi4xMTktNi4xMiAyLjA0LTIuMDM5IDYuMTIgNi4xMi0yLjA0Wm0tNC4wOC00LjA4IDQuMDggNC4wOG0tMTAuNTQtMi4wNGE4LjUgOC41IDAgMSAwIDE3IDAgOC41IDguNSAwIDAgMC0xNyAwWiIvPjwvc3ZnPg==)
 */
export const IconLogoSafari: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-safari'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M20.447 11.947a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-4.788-3.67-5.64 1.751-1.799 5.494 5.591-1.75 1.848-5.494Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m13.986 13.986 2.04-6.119-6.12 2.04-2.039 6.12 6.12-2.04Zm-4.08-4.08 4.08 4.08m-10.54-2.04a8.5 8.5 0 1 0 17 0 8.5 8.5 0 0 0-17 0Z'
      />
    </svg>
  )
}
