import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTEuNDc0IDE5LjU3Ny00LjkzNi00LjY2NWMtMS40NDEtMS4zNjMtMi4xNjItMi4wNDQtMi4xNjItMi45MDUgMC0uODYuNzItMS41NDMgMi4xNi0yLjkwNmw0LjkzOC00LjY3OG04IDE1LjE1NC00LjkzNi00LjY2NWMtMS40NDEtMS4zNjMtMi4xNjItMi4wNDQtMi4xNjItMi45MDUgMC0uODYuNzItMS41NDMgMi4xNi0yLjkwNmw0LjkzOC00LjY3OCIvPjwvc3ZnPg==)
 */
export const IconChevronLeftDouble: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-chevron-left-double'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m11.474 19.577-4.936-4.665c-1.441-1.363-2.162-2.044-2.162-2.905 0-.86.72-1.543 2.16-2.906l4.938-4.678m8 15.154-4.936-4.665c-1.441-1.363-2.162-2.044-2.162-2.905 0-.86.72-1.543 2.16-2.906l4.938-4.678'
      />
    </svg>
  )
}
