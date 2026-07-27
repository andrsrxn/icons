import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNy4xODkgNy4wMTRjLjE0NS0xLjQxNyAxLjIwNC0yLjMwMSAyLjY5LTIuMzAxYTIuNjkgMi42OSAwIDAgMSAwIDUuMzgxSDMuNTM0bTEyLjgxIDMuNjQ2Yy4yMTIuNTk3LjkgMS4zNTEgMS45NCAxLjM1MWEyLjEwMyAyLjEwMyAwIDAgMCAwLTQuMjA2aC00LjNtLTQuODE1IDYuMTM4Yy4xNyAxLjAwMyAxLjIwNSAyLjI0IDIuNjkgMi4yNGEyLjY5IDIuNjkgMCAxIDAgMC01LjM4MkgzLjUzNSIvPjwvc3ZnPg==)
 */
export const IconWind: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-wind'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7.189 7.014c.145-1.417 1.204-2.301 2.69-2.301a2.69 2.69 0 0 1 0 5.381H3.534m12.81 3.646c.212.597.9 1.351 1.94 1.351a2.103 2.103 0 0 0 0-4.206h-4.3m-4.815 6.138c.17 1.003 1.205 2.24 2.69 2.24a2.69 2.69 0 1 0 0-5.382H3.535'
      />
    </svg>
  )
}
