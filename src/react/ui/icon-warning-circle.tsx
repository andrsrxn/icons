import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjI5MSAxMkE4LjI5MSA4LjI5MSAwIDEgMSAzLjcxIDEyYTguMjkxIDguMjkxIDAgMCAxIDE2LjU4MiAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMi4zOTIgMTYuMzkyYS4zOTIuMzkyIDAgMSAxLS43ODQgMCAuMzkyLjM5MiAwIDAgMSAuNzg0IDBaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAxMy4zNDVWNy40MTNNMjAuMjkxIDEyQTguMjkxIDguMjkxIDAgMSAxIDMuNzEgMTJhOC4yOTEgOC4yOTEgMCAwIDEgMTYuNTgyIDBabS03Ljg5OSA0LjM5MmEuMzkyLjM5MiAwIDEgMS0uNzg0IDAgLjM5Mi4zOTIgMCAwIDEgLjc4NCAwWiIvPjwvc3ZnPg==)
 */
export const IconWarningCircle: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-warning-circle'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.291 12A8.291 8.291 0 1 1 3.71 12a8.291 8.291 0 0 1 16.582 0Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M12.392 16.392a.392.392 0 1 1-.784 0 .392.392 0 0 1 .784 0Z' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 13.345V7.413M20.291 12A8.291 8.291 0 1 1 3.71 12a8.291 8.291 0 0 1 16.582 0Zm-7.899 4.392a.392.392 0 1 1-.784 0 .392.392 0 0 1 .784 0Z'
      />
    </svg>
  )
}
