import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtNC40MjMgMTEuNDU2IDQuNjY1LTQuOTM1YzEuMzYzLTEuNDQyIDIuMDQ0LTIuMTYyIDIuOTA1LTIuMTYzLjg2IDAgMS41NDMuNzIgMi45MDYgMi4xNmw0LjY3OCA0LjkzOG0tMTUuMTU0IDggNC42NjUtNC45MzVjMS4zNjMtMS40NDIgMi4wNDQtMi4xNjMgMi45MDUtMi4xNjMuODYgMCAxLjU0My43MiAyLjkwNiAyLjE2bDQuNjc4IDQuOTM4Ii8+PC9zdmc+)
 */
export const IconChevronUpDouble: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-chevron-up-double'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m4.423 11.456 4.665-4.935c1.363-1.442 2.044-2.162 2.905-2.163.86 0 1.543.72 2.906 2.16l4.678 4.938m-15.154 8 4.665-4.935c1.363-1.442 2.044-2.163 2.905-2.163.86 0 1.543.72 2.906 2.16l4.678 4.938'
      />
    </svg>
  )
}
