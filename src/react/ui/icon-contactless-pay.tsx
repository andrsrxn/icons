import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMuNjcgMTJhOC4zMyA4LjMzIDAgMSAwIDE2LjY2IDAgOC4zMyA4LjMzIDAgMCAwLTE2LjY2IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOC4xMDUgOS45MThhNC40MjUgNC40MjUgMCAwIDEgMCA0LjE2NG02LjEzNC02Ljk0YTEwLjMyNSAxMC4zMjUgMCAwIDEgMCA5LjcxN20tMy4xMDctOC4zM2E3LjM3NSA3LjM3NSAwIDAgMSAwIDYuOTQyTTEyIDIwLjMzYTguMzMgOC4zMyAwIDEgMSAwLTE2LjY2IDguMzMgOC4zMyAwIDAgMSAwIDE2LjY2WiIvPjwvc3ZnPg==)
 */
export const IconContactlessPay: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-contactless-pay'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.67 12a8.33 8.33 0 1 0 16.66 0 8.33 8.33 0 0 0-16.66 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8.105 9.918a4.425 4.425 0 0 1 0 4.164m6.134-6.94a10.325 10.325 0 0 1 0 9.717m-3.107-8.33a7.375 7.375 0 0 1 0 6.942M12 20.33a8.33 8.33 0 1 1 0-16.66 8.33 8.33 0 0 1 0 16.66Z'
      />
    </svg>
  )
}
