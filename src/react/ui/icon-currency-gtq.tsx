import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE4LjY3NCAxMmE3LjQ4OCA3LjQ4OCAwIDEgMS0xNC45NzUgMCA3LjQ4OCA3LjQ4OCAwIDAgMSAxNC45NzUgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0xMi44MiAxMy42NSA3LjUxMSA1LjY0Mk0xOC42NzQgMTJhNy40ODggNy40ODggMCAxIDEtMTQuOTc1IDAgNy40ODggNy40ODggMCAwIDEgMTQuOTc1IDBaIi8+PC9zdmc+)
 */
export const IconCurrencyGtq: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-currency-gtq'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M18.674 12a7.488 7.488 0 1 1-14.975 0 7.488 7.488 0 0 1 14.975 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m12.82 13.65 7.511 5.642M18.674 12a7.488 7.488 0 1 1-14.975 0 7.488 7.488 0 0 1 14.975 0Z'
      />
    </svg>
  )
}
