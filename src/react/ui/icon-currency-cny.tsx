import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNiA2LjMxM2gxMk00LjUgMTAuMTg4aDE1bS01LjI1IDB2NS4yNWEyLjI1IDIuMjUgMCAwIDAgMi4yNSAyLjI1aDMuNzV2LTIuMjVtLTEwLjUtNS4yNXYxLjVhNiA2IDAgMCAxLTYgNiIvPjwvc3ZnPg==)
 */
export const IconCurrencyCny: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-currency-cny'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6 6.313h12M4.5 10.188h15m-5.25 0v5.25a2.25 2.25 0 0 0 2.25 2.25h3.75v-2.25m-10.5-5.25v1.5a6 6 0 0 1-6 6'
      />
    </svg>
  )
}
