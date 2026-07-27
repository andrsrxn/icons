import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTkuMjA1IDUuNjEySDEwLjg3YTYuMzEgNi4zMSAwIDAgMC0yLjkwMy43MDhjLTQuMzQgMi4yNS00LjU4IDguMzctLjQyOCAxMC45NTJsLjIyNy4xNDFhNi40NTggNi40NTggMCAwIDAgMy40MS45NzRoOC4wMjgiLz48L3N2Zz4=)
 */
export const IconSubsetProperOf: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-subset-proper-of'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19.205 5.612H10.87a6.31 6.31 0 0 0-2.903.708c-4.34 2.25-4.58 8.37-.428 10.952l.227.141a6.458 6.458 0 0 0 3.41.974h8.028'
      />
    </svg>
  )
}
