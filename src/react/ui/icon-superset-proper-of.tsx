import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNC44ODUgNS42MTJoOC4zMzRjMS4wMSAwIDIuMDA2LjI0MyAyLjkwMi43MDggNC4zNCAyLjI1IDQuNTggOC4zNy40MjkgMTAuOTUybC0uMjI3LjE0MWE2LjQ1OCA2LjQ1OCAwIDAgMS0zLjQxMS45NzRINC44ODUiLz48L3N2Zz4=)
 */
export const IconSupersetProperOf: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-superset-proper-of'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.885 5.612h8.334c1.01 0 2.006.243 2.902.708 4.34 2.25 4.58 8.37.429 10.952l-.227.141a6.458 6.458 0 0 1-3.411.974H4.885'
      />
    </svg>
  )
}
