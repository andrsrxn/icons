import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMjAuNjMzIDguNzg4LTEuNDE2LjAwMWMtMS44ODguMDAyLTIuODMyLjAwMy0zLjQxOC0uNTgzLS41ODctLjU4Ni0uNTg3LTEuNTMtLjU4Ny0zLjQxN1YzLjM2N201LjQyMSAxMS44NDUtMS40MTYtLjAwMWMtMS44ODgtLjAwMi0yLjgzMi0uMDAzLTMuNDE4LjU4My0uNTg3LjU4Ni0uNTg3IDEuNTMtLjU4NyAzLjQxN3YxLjQyMk0zLjM2NyA4Ljc4OGwxLjQxNy4wMDFjMS44ODcuMDAyIDIuODMuMDAzIDMuNDE3LS41ODMuNTg3LS41ODYuNTg3LTEuNTMuNTg3LTMuNDE3VjMuMzY3TTMuMzY3IDE1LjIxMmwxLjQxNy0uMDAxYzEuODg3LS4wMDIgMi44My0uMDAzIDMuNDE3LjU4My41ODcuNTg2LjU4NyAxLjUzLjU4NyAzLjQxN3YxLjQyMiIvPjwvc3ZnPg==)
 */
export const IconMinimize: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-minimize'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m20.633 8.788-1.416.001c-1.888.002-2.832.003-3.418-.583-.587-.586-.587-1.53-.587-3.417V3.367m5.421 11.845-1.416-.001c-1.888-.002-2.832-.003-3.418.583-.587.586-.587 1.53-.587 3.417v1.422M3.367 8.788l1.417.001c1.887.002 2.83.003 3.417-.583.587-.586.587-1.53.587-3.417V3.367M3.367 15.212l1.417-.001c1.887-.002 2.83-.003 3.417.583.587.586.587 1.53.587 3.417v1.422'
      />
    </svg>
  )
}
