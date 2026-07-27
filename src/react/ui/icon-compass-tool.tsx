import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEzLjkyMyA2Ljg5NmExLjkyMyAxLjkyMyAwIDEgMS0zLjg0NiAwIDEuOTIzIDEuOTIzIDAgMCAxIDMuODQ2IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy43MyAxNS4yNTRTNi43MDUgMTcuNDcgMTIgMTcuNDdzOC4yNy0yLjIxNyA4LjI3LTIuMjE3bS05LjIzLTYuNDM0TDQuNzY0IDIwLjM1NU0xMi45NiA4LjgxOWw2LjI3NSAxMS41MzZNMTIgNC45NjlWMy4zNm0xLjkyMyAzLjUzNmExLjkyMyAxLjkyMyAwIDEgMS0zLjg0NiAwIDEuOTIzIDEuOTIzIDAgMCAxIDMuODQ2IDBaIi8+PC9zdmc+)
 */
export const IconCompassTool: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-compass-tool'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.923 6.896a1.923 1.923 0 1 1-3.846 0 1.923 1.923 0 0 1 3.846 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3.73 15.254S6.705 17.47 12 17.47s8.27-2.217 8.27-2.217m-9.23-6.434L4.764 20.355M12.96 8.819l6.275 11.536M12 4.969V3.36m1.923 3.536a1.923 1.923 0 1 1-3.846 0 1.923 1.923 0 0 1 3.846 0Z'
      />
    </svg>
  )
}
