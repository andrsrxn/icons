import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNS44NCAxMi4zODVoMy44NW0wIDBoMy44NW0tMy44NSAwdjQuMjM1YTMuNDY1IDMuNDY1IDAgMCAxLTMuNDY0IDMuNDY0aDExLjkzM005LjY5IDEyLjM4NVY4LjE1MWE0LjIzNCA0LjIzNCAwIDAgMSA2LjkzLTMuMjY3Ii8+PC9zdmc+)
 */
export const IconCurrencyGbp: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-currency-gbp'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M5.84 12.385h3.85m0 0h3.85m-3.85 0v4.235a3.465 3.465 0 0 1-3.464 3.464h11.933M9.69 12.385V8.151a4.234 4.234 0 0 1 6.93-3.267'
      />
    </svg>
  )
}
