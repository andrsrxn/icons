import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjgxNyA3LjYzYTMuODE3IDMuODE3IDAgMSAxLTcuNjM0IDAgMy44MTcgMy44MTcgMCAwIDEgNy42MzQgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAxMS41NnY5LjA2Nk0xNS44MTcgNy42M2EzLjgxNyAzLjgxNyAwIDEgMS03LjYzNCAwIDMuODE3IDMuODE3IDAgMCAxIDcuNjM0IDBaIi8+PC9zdmc+)
 */
export const IconMapPinLine: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-map-pin-line'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.817 7.63a3.817 3.817 0 1 1-7.634 0 3.817 3.817 0 0 1 7.634 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 11.56v9.066M15.817 7.63a3.817 3.817 0 1 1-7.634 0 3.817 3.817 0 0 1 7.634 0Z'
      />
    </svg>
  )
}
