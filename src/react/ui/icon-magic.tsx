import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDMuNTM4cy40NjcgNC4zNTggMi4yODYgNi4xNzZDMTYuMTA0IDExLjUzNCAyMC40NjIgMTIgMjAuNDYyIDEycy00LjM1OC40NjctNi4xNzYgMi4yODZDMTIuNDY2IDE2LjEwNCAxMiAyMC40NjIgMTIgMjAuNDYycy0uNDY3LTQuMzU4LTIuMjg2LTYuMTc2QzcuODk2IDEyLjQ2NiAzLjUzOCAxMiAzLjUzOCAxMnM0LjM1OC0uNDY3IDYuMTc2LTIuMjg2QzExLjUzNCA3Ljg5NiAxMiAzLjUzOCAxMiAzLjUzOFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIgMy41MzhzLjQ2NyA0LjM1OCAyLjI4NiA2LjE3NkMxNi4xMDQgMTEuNTM0IDIwLjQ2MiAxMiAyMC40NjIgMTJzLTQuMzU4LjQ2Ny02LjE3NiAyLjI4NkMxMi40NjYgMTYuMTA0IDEyIDIwLjQ2MiAxMiAyMC40NjJzLS40NjctNC4zNTgtMi4yODYtNi4xNzZDNy44OTYgMTIuNDY2IDMuNTM4IDEyIDMuNTM4IDEyczQuMzU4LS40NjcgNi4xNzYtMi4yODZDMTEuNTM0IDcuODk2IDEyIDMuNTM4IDEyIDMuNTM4WiIvPjwvc3ZnPg==)
 */
export const IconMagic: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-magic'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 3.538s.467 4.358 2.286 6.176C16.104 11.534 20.462 12 20.462 12s-4.358.467-6.176 2.286C12.466 16.104 12 20.462 12 20.462s-.467-4.358-2.286-6.176C7.896 12.466 3.538 12 3.538 12s4.358-.467 6.176-2.286C11.534 7.896 12 3.538 12 3.538Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 3.538s.467 4.358 2.286 6.176C16.104 11.534 20.462 12 20.462 12s-4.358.467-6.176 2.286C12.466 16.104 12 20.462 12 20.462s-.467-4.358-2.286-6.176C7.896 12.466 3.538 12 3.538 12s4.358-.467 6.176-2.286C11.534 7.896 12 3.538 12 3.538Z'
      />
    </svg>
  )
}
