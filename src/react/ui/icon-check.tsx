import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtNC4yMzkgMTIuOTg2IDEuOTM2IDIuODcxYzEuNTE2IDIuMjUgMi4yNzUgMy4zNzQgMy4zNDUgMy4zNjkgMS4wNy0uMDA2IDEuODE3LTEuMTM4IDMuMzEtMy40MDNsNi45MzItMTAuNTEiLz48L3N2Zz4=)
 */
export const IconCheck: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-check'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m4.239 12.986 1.936 2.871c1.516 2.25 2.275 3.374 3.345 3.369 1.07-.006 1.817-1.138 3.31-3.403l6.932-10.51'
      />
    </svg>
  )
}
