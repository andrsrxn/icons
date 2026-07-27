import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtOSA0LjQyMyA0LjkzNSA0LjY2NWMxLjQ0MiAxLjM2MyAyLjE2MiAyLjA0NCAyLjE2MyAyLjkwNSAwIC44Ni0uNzIgMS41NDMtMi4xNiAyLjkwNkw5IDE5LjU3OCIvPjwvc3ZnPg==)
 */
export const IconChevronEnd: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-chevron-end'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m9 4.423 4.935 4.665c1.442 1.363 2.162 2.044 2.163 2.905 0 .86-.72 1.543-2.16 2.906L9 19.578'
      />
    </svg>
  )
}
