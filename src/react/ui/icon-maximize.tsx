import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTQuOTIgMy42OTUgMS4zOC0uMDAxYzEuODg4LS4wMDIgMi44MzItLjAwMyAzLjQxOC41ODMuNTg3LjU4Ni41ODcgMS41My41ODcgMy40MTd2MS4zODdtLTUuMzg2IDExLjIyNCAxLjM4Mi4wMDFjMS44ODcuMDAyIDIuODMuMDAzIDMuNDE3LS41ODMuNTg3LS41ODYuNTg3LTEuNTMuNTg3LTMuNDE3VjE0LjkyTTkuMDggMy42OTVsLTEuMzgyLS4wMDFjLTEuODg3LS4wMDItMi44My0uMDAzLTMuNDE3LjU4My0uNTg3LjU4Ni0uNTg3IDEuNTMtLjU4NyAzLjQxN3YxLjM4N005LjA4IDIwLjMwNWwtMS4zODIuMDAxYy0xLjg4Ny4wMDItMi44My4wMDMtMy40MTctLjU4My0uNTg3LS41ODYtLjU4Ny0xLjUzLS41ODctMy40MTdWMTQuOTIiLz48L3N2Zz4=)
 */
export const IconMaximize: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-maximize'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m14.92 3.695 1.38-.001c1.888-.002 2.832-.003 3.418.583.587.586.587 1.53.587 3.417v1.387m-5.386 11.224 1.382.001c1.887.002 2.83.003 3.417-.583.587-.586.587-1.53.587-3.417V14.92M9.08 3.695l-1.382-.001c-1.887-.002-2.83-.003-3.417.583-.587.586-.587 1.53-.587 3.417v1.387M9.08 20.305l-1.382.001c-1.887.002-2.83.003-3.417-.583-.587-.586-.587-1.53-.587-3.417V14.92'
      />
    </svg>
  )
}
