import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOC44ODIgMjAuMzM1YzEuMDUgMCAxLjU3NSAwIDEuOTgxLS4xOTJhMiAyIDAgMCAwIC45NTItLjk1MmMuMTkyLS40MDYuMTkyLS45MzEuMTkyLTEuOTgxVjYuNzljMC0xLjA1IDAtMS41NzUtLjE5Mi0xLjk4MWEyIDIgMCAwIDAtLjk1Mi0uOTUyYy0uNDA2LS4xOTMtLjkzMS0uMTkzLTEuOTgxLS4xOTNtNi4yMzYgMTYuNjcxYy0xLjA1IDAtMS41NzUgMC0xLjk4MS0uMTkyYTIgMiAwIDAgMS0uOTUyLS45NTJjLS4xOTItLjQwNi0uMTkyLS45MzEtLjE5Mi0xLjk4MVY2Ljc5YzAtMS4wNSAwLTEuNTc1LjE5Mi0xLjk4MWEyIDIgMCAwIDEgLjk1Mi0uOTUyYy40MDYtLjE5My45MzEtLjE5MyAxLjk4MS0uMTkzIi8+PC9zdmc+)
 */
export const IconCursorText: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-cursor-text'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.882 20.335c1.05 0 1.575 0 1.981-.192a2 2 0 0 0 .952-.952c.192-.406.192-.931.192-1.981V6.79c0-1.05 0-1.575-.192-1.981a2 2 0 0 0-.952-.952c-.406-.193-.931-.193-1.981-.193m6.236 16.671c-1.05 0-1.575 0-1.981-.192a2 2 0 0 1-.952-.952c-.192-.406-.192-.931-.192-1.981V6.79c0-1.05 0-1.575.192-1.981a2 2 0 0 1 .952-.952c.406-.193.931-.193 1.981-.193'
      />
    </svg>
  )
}
