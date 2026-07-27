import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTEuNDc0IDE5LjU3Ni00LjkzNi00LjY2NGMtMS40NDEtMS4zNjMtMi4xNjItMi4wNDQtMi4xNjItMi45MDUgMC0uODYuNzItMS41NDMgMi4xNi0yLjkwNmw0LjkzOC00LjY3OG04IDE1LjE1My00LjkzNi00LjY2NGMtMS40NDEtMS4zNjMtMi4xNjItMi4wNDQtMi4xNjItMi45MDUgMC0uODYuNzItMS41NDMgMi4xNi0yLjkwNmw0LjkzOC00LjY3OCIvPjwvc3ZnPg==)
 */
export const IconChevronStartDouble: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-chevron-start-double'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m11.474 19.576-4.936-4.664c-1.441-1.363-2.162-2.044-2.162-2.905 0-.86.72-1.543 2.16-2.906l4.938-4.678m8 15.153-4.936-4.664c-1.441-1.363-2.162-2.044-2.162-2.905 0-.86.72-1.543 2.16-2.906l4.938-4.678'
      />
    </svg>
  )
}
