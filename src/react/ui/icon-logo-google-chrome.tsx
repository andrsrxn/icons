import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMzUgMTJhOC4zNSA4LjM1IDAgMSAxLTE2LjcgMCA4LjM1IDguMzUgMCAwIDEgMTYuNyAwWm0tNC44NzEgMGEzLjQ3OSAzLjQ3OSAwIDEgMS02Ljk1OCAwIDMuNDc5IDMuNDc5IDAgMCAxIDYuOTU4IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiA4LjUyMWEzLjQ3OSAzLjQ3OSAwIDEgMCAwIDYuOTU4IDMuNDc5IDMuNDc5IDAgMCAwIDAtNi45NThabTAgMGg3LjU5Mm0tNC41OCA1LjIxOC0zLjc5NiA2LjU3Nm0tMi4yMjktNi41NzZMNS4xOTEgNy4xNjRNMjAuMzQ5IDEyQTguMzUgOC4zNSAwIDEgMSAzLjY1IDEyYTguMzUgOC4zNSAwIDAgMSAxNi43IDBaIi8+PC9zdmc+)
 */
export const IconLogoGoogleChrome: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-google-chrome'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M20.35 12a8.35 8.35 0 1 1-16.7 0 8.35 8.35 0 0 1 16.7 0Zm-4.871 0a3.479 3.479 0 1 1-6.958 0 3.479 3.479 0 0 1 6.958 0Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 8.521a3.479 3.479 0 1 0 0 6.958 3.479 3.479 0 0 0 0-6.958Zm0 0h7.592m-4.58 5.218-3.796 6.576m-2.229-6.576L5.191 7.164M20.349 12A8.35 8.35 0 1 1 3.65 12a8.35 8.35 0 0 1 16.7 0Z'
      />
    </svg>
  )
}
