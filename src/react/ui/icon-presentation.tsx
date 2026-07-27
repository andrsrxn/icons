import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQuODkgNGgxNC4yMnYxMC42MzhINC44OVY0Wm04Ljc3IDE0Ljk1NGMwIC45MzItLjc0MyAxLjY4Ny0xLjY2IDEuNjg3LS45MTcgMC0xLjY2LS43NTUtMS42Ni0xLjY4NiAwLS45MzIuNzQzLTEuNjg3IDEuNjYtMS42ODcuOTE3IDAgMS42Ni43NTUgMS42NiAxLjY4NloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0zLjQ1IDE0LjYzOGgxNy4xTTguNzUzIDExLjg2VjguMzJtNi41NDUgMy41NFY5LjgyN00xMiAxNi45NDF2LTIuMDMzbTAtMy4wNDhWNi43NzhNMy40NSA0aDE3LjFNNC44OSA0aDE0LjIydjEwLjYzOEg0Ljg5VjRabTguNzcgMTQuOTU0YzAgLjkzMi0uNzQzIDEuNjg3LTEuNjYgMS42ODctLjkxNyAwLTEuNjYtLjc1NS0xLjY2LTEuNjg2IDAtLjkzMi43NDMtMS42ODcgMS42Ni0xLjY4Ny45MTcgMCAxLjY2Ljc1NSAxLjY2IDEuNjg2WiIvPjwvc3ZnPg==)
 */
export const IconPresentation: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-presentation'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M4.89 4h14.22v10.638H4.89V4Zm8.77 14.954c0 .932-.743 1.687-1.66 1.687-.917 0-1.66-.755-1.66-1.686 0-.932.743-1.687 1.66-1.687.917 0 1.66.755 1.66 1.686Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.45 14.638h17.1M8.753 11.86V8.32m6.545 3.54V9.827M12 16.941v-2.033m0-3.048V6.778M3.45 4h17.1M4.89 4h14.22v10.638H4.89V4Zm8.77 14.954c0 .932-.743 1.687-1.66 1.687-.917 0-1.66-.755-1.66-1.686 0-.932.743-1.687 1.66-1.687.917 0 1.66.755 1.66 1.686Z'
      />
    </svg>
  )
}
