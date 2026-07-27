import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIgMjAuNDk1di0zLjA0bS02LjAwNy41NTIgMi4xNS0yLjE1TTYuNTQ1IDEyaC0zLjA0bTQuNjM4LTMuODU3LTIuMTUtMi4xNU0xMiA2LjU0NXYtMy4wNG0zLjg1NyA0LjYzOCAyLjE1LTIuMTVtMCAxMi4wMTQtMi4xNS0yLjE1TTIwLjQ5NSAxMmgtMy4wNCIvPjwvc3ZnPg==)
 */
export const IconSpinner: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-spinner'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 20.495v-3.04m-6.007.552 2.15-2.15M6.545 12h-3.04m4.638-3.857-2.15-2.15M12 6.545v-3.04m3.857 4.638 2.15-2.15m0 12.014-2.15-2.15M20.495 12h-3.04'
      />
    </svg>
  )
}
