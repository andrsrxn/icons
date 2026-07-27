import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE5LjgxNyAxNC4xNjVjMCAxLjY3LTEuMzggMy4wMjUtMy4wODMgMy4wMjUtMS43MDMgMC0zLjA4My0xLjM1NC0zLjA4My0zLjAyNSAwLTEuNjcgMS4zOC0zLjAyNCAzLjA4My0zLjAyNCAxLjcwMiAwIDMuMDgyIDEuMzU0IDMuMDgyIDMuMDI0Wm0tOS41NTEgMGMwIDEuNjctMS4zOCAzLjAyNS0zLjA4MiAzLjAyNS0xLjcwMyAwLTMuMDgzLTEuMzU0LTMuMDgzLTMuMDI1IDAtMS42NyAxLjM4LTMuMDI0IDMuMDgzLTMuMDI0IDEuNzAyIDAgMy4wODIgMS4zNTQgMy4wODIgMy4wMjRaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTQuMjI3IDcuODJjMS44MzctMi4yNTUgNS45MjMtMS4zODMgNS42NzMgMy40NDEtLjI1IDQuODI1LjE3IDUuOTcuMTcgNS45N000LjY3NyA3LjgxOWMxLjgzNy0yLjI1NCA1LjkyMy0xLjM4MiA1LjY3MyAzLjQ0Mi0uMjUgNC44MjUuMTcgNS45Ny4xNyA1Ljk3bTkuMjk3LTMuMDY2YzAgMS42Ny0xLjM4IDMuMDI1LTMuMDgzIDMuMDI1LTEuNzAzIDAtMy4wODMtMS4zNTQtMy4wODMtMy4wMjUgMC0xLjY3IDEuMzgtMy4wMjQgMy4wODMtMy4wMjQgMS43MDIgMCAzLjA4MiAxLjM1NCAzLjA4MiAzLjAyNFptLTkuNTUgMGMwIDEuNjctMS4zOCAzLjAyNS0zLjA4MyAzLjAyNS0xLjcwMyAwLTMuMDgzLTEuMzU0LTMuMDgzLTMuMDI1IDAtMS42NyAxLjM4LTMuMDI0IDMuMDgzLTMuMDI0IDEuNzAyIDAgMy4wODIgMS4zNTQgMy4wODIgMy4wMjRaIi8+PC9zdmc+)
 */
export const IconTextLowecase: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-text-lowecase'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M19.817 14.165c0 1.67-1.38 3.025-3.083 3.025-1.703 0-3.083-1.354-3.083-3.025 0-1.67 1.38-3.024 3.083-3.024 1.702 0 3.082 1.354 3.082 3.024Zm-9.551 0c0 1.67-1.38 3.025-3.082 3.025-1.703 0-3.083-1.354-3.083-3.025 0-1.67 1.38-3.024 3.083-3.024 1.702 0 3.082 1.354 3.082 3.024Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.227 7.82c1.837-2.255 5.923-1.383 5.673 3.441-.25 4.825.17 5.97.17 5.97M4.677 7.819c1.837-2.254 5.923-1.382 5.673 3.442-.25 4.825.17 5.97.17 5.97m9.297-3.066c0 1.67-1.38 3.025-3.083 3.025-1.703 0-3.083-1.354-3.083-3.025 0-1.67 1.38-3.024 3.083-3.024 1.702 0 3.082 1.354 3.082 3.024Zm-9.55 0c0 1.67-1.38 3.025-3.083 3.025-1.703 0-3.083-1.354-3.083-3.025 0-1.67 1.38-3.024 3.083-3.024 1.702 0 3.082 1.354 3.082 3.024Z'
      />
    </svg>
  )
}
