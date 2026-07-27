import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTguMzI2IDMuODc1aDUuNzE4YTQuOTU2IDQuOTU2IDAgMCAxIDAgOS45MTJIOC4zMjZWMy44NzVaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNS4yNzcgMTYuODM2aDguMzg2bS01LjMzNyAzLjgxMnYtNi44NjFtMCAwVjMuODc1aDUuNzE4YTQuOTU2IDQuOTU2IDAgMSAxIDAgOS45MTJIOC4zMjZabTAgMGgtMy4wNSIvPjwvc3ZnPg==)
 */
export const IconCurrencyRub: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-currency-rub'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M8.326 3.875h5.718a4.956 4.956 0 0 1 0 9.912H8.326V3.875Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M5.277 16.836h8.386m-5.337 3.812v-6.861m0 0V3.875h5.718a4.956 4.956 0 1 1 0 9.912H8.326Zm0 0h-3.05'
      />
    </svg>
  )
}
