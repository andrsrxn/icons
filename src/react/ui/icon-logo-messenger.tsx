import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTcuODg0IDE5LjExN2E4LjIyIDguMjIgMCAxIDAtMi45OTgtMi45OTdsLTEuMDcgMy4xOThhLjY4NS42ODUgMCAwIDAgLjg2Ni44NjdsMy4yMDItMS4wNjhaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtNy44OSAxMy4zNyAyLjc0LTIuNzQgMi43NCAyLjc0IDIuNzQtMi43NG0tOC4yMjYgOC40ODdhOC4yMiA4LjIyIDAgMSAwLTIuOTk4LTIuOTk3bC0xLjA3IDMuMTk4YS42ODUuNjg1IDAgMCAwIC44NjYuODY3bDMuMjAyLTEuMDY4WiIvPjwvc3ZnPg==)
 */
export const IconLogoMessenger: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-messenger'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.884 19.117a8.22 8.22 0 1 0-2.998-2.997l-1.07 3.198a.685.685 0 0 0 .866.867l3.202-1.068Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m7.89 13.37 2.74-2.74 2.74 2.74 2.74-2.74m-8.226 8.487a8.22 8.22 0 1 0-2.998-2.997l-1.07 3.198a.685.685 0 0 0 .866.867l3.202-1.068Z'
      />
    </svg>
  )
}
