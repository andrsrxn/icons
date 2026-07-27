import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE0LjE2IDUuODRhMi4xNiAyLjE2IDAgMSAxLTQuMzIgMCAyLjE2IDIuMTYgMCAwIDEgNC4zMiAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTYgOC40NjIgNC43ODYgMi4wNDVBMiAyIDAgMCAxIDEyIDEyLjM0Nm0wIDB2Mi4yMTdtMC0yLjIxN2EyIDIgMCAwIDEgMS4yMTQtMS44NEwxOCA4LjQ2M20tNiA2LjEwMWEyIDIgMCAwIDEtLjM4NSAxLjE4TDguMjA0IDIwLjQxTTEyIDE0LjU2M2EyIDIgMCAwIDAgLjM4NSAxLjE4bDMuNDExIDQuNjY3TTE0LjE2IDUuODRhMi4xNiAyLjE2IDAgMSAxLTQuMzIgMCAyLjE2IDIuMTYgMCAwIDEgNC4zMiAwWiIvPjwvc3ZnPg==)
 */
export const IconAccessibility: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-accessibility'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M14.16 5.84a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m6 8.462 4.786 2.045A2 2 0 0 1 12 12.346m0 0v2.217m0-2.217a2 2 0 0 1 1.214-1.84L18 8.463m-6 6.101a2 2 0 0 1-.385 1.18L8.204 20.41M12 14.563a2 2 0 0 0 .385 1.18l3.411 4.667M14.16 5.84a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Z'
      />
    </svg>
  )
}
