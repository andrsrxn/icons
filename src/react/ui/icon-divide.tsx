import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE0LjE2IDYuMTZhMi4xNiAyLjE2IDAgMSAxLTQuMzIgMCAyLjE2IDIuMTYgMCAwIDEgNC4zMiAwWm0wIDExLjY4YTIuMTYgMi4xNiAwIDEgMS00LjMyIDAgMi4xNiAyLjE2IDAgMCAxIDQuMzIgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0zLjYzNiAxMmgxNi43MjhNMTQuMTYgNi4xNmEyLjE2IDIuMTYgMCAxIDEtNC4zMiAwIDIuMTYgMi4xNiAwIDAgMSA0LjMyIDBabTAgMTEuNjhhMi4xNiAyLjE2IDAgMSAxLTQuMzIgMCAyLjE2IDIuMTYgMCAwIDEgNC4zMiAwWiIvPjwvc3ZnPg==)
 */
export const IconDivide: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-divide'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M14.16 6.16a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Zm0 11.68a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.636 12h16.728M14.16 6.16a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Zm0 11.68a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Z'
      />
    </svg>
  )
}
