import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTIuNDU3IDE5LjU3NiA0LjkzNi00LjY2NGMxLjQ0LTEuMzYzIDIuMTYyLTIuMDQ0IDIuMTYyLTIuOTA1IDAtLjg2LS43Mi0xLjU0My0yLjE2LTIuOTA2bC00LjkzOC00LjY3OG0tOCAxNS4xNTMgNC45MzYtNC42NjRjMS40NC0xLjM2MyAyLjE2Mi0yLjA0NCAyLjE2Mi0yLjkwNSAwLS44Ni0uNzItMS41NDMtMi4xNi0yLjkwNkw0LjQ1OCA0LjQyMyIvPjwvc3ZnPg==)
 */
export const IconChevronRightDouble: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-chevron-right-double'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m12.457 19.576 4.936-4.664c1.44-1.363 2.162-2.044 2.162-2.905 0-.86-.72-1.543-2.16-2.906l-4.938-4.678m-8 15.153 4.936-4.664c1.44-1.363 2.162-2.044 2.162-2.905 0-.86-.72-1.543-2.16-2.906L4.458 4.423'
      />
    </svg>
  )
}
