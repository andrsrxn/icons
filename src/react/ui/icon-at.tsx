import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1Ljg2IDEyYTMuODYgMy44NiAwIDEgMS03LjcyIDAgMy44NiAzLjg2IDAgMCAxIDcuNzIgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNS4xMjcgMTkuNzM0QTguMzQgOC4zNCAwIDEgMSAyMC4zNCAxMmMwIDEuNDU2LS4yNTMgMi43NS0xLjAyOCA0LjAxNi0uMzg2LjYzMS0uOTQzIDEuMTk2LTEuNjk3IDEuMTk2LTEuNzEgMC0xLjcxLTIuMDg1LTEuNzEtMi4wODVWNy44M00xNS44NiAxMmEzLjg2IDMuODYgMCAxIDEtNy43MiAwIDMuODYgMy44NiAwIDAgMSA3LjcyIDBaIi8+PC9zdmc+)
 */
export const IconAt: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-at'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.86 12a3.86 3.86 0 1 1-7.72 0 3.86 3.86 0 0 1 7.72 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.127 19.734A8.34 8.34 0 1 1 20.34 12c0 1.456-.253 2.75-1.028 4.016-.386.631-.943 1.196-1.697 1.196-1.71 0-1.71-2.085-1.71-2.085V7.83M15.86 12a3.86 3.86 0 1 1-7.72 0 3.86 3.86 0 0 1 7.72 0Z'
      />
    </svg>
  )
}
