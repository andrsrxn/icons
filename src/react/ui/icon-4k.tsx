import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy41NDIgNC40ODFoMTYuOTE2TTMuNTQyIDE5LjUyaDE2LjkxNk05LjMgMTMuNDVINC41NzFhLjIuMiAwIDAgMS0uMTU3LS4zMjRsNC41MjktNS43MDJhLjIuMiAwIDAgMSAuMzU2LjEyNHY1LjkwMlptMCAwaDEuMjE5bS0xLjIxOSAwdjMuMjE5bTMuODEyLTkuMzk4djQuNjk5bTAgMHY0LjY5OW0wLTQuNyA0LjkzOC00LjVtLTQuOTM4IDQuNSA0LjkyOSA0LjU3NiIvPjwvc3ZnPg==)
 */
export const Icon4k: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-4k'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3.542 4.481h16.916M3.542 19.52h16.916M9.3 13.45H4.571a.2.2 0 0 1-.157-.324l4.529-5.702a.2.2 0 0 1 .356.124v5.902Zm0 0h1.219m-1.219 0v3.219m3.812-9.398v4.699m0 0v4.699m0-4.7 4.938-4.5m-4.938 4.5 4.929 4.576'
      />
    </svg>
  )
}
