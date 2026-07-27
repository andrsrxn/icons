import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNS42MTIgNXY4LjMzNGMwIDEuMDEuMjQzIDIuMDA2LjcwOCAyLjkwMiAyLjI1IDQuMzQgOC4zNyA0LjU4IDEwLjk1Mi40M2wuMTQxLS4yMjhhNi40NTcgNi40NTcgMCAwIDAgLjk3NS0zLjQxMVY1Ii8+PC9zdmc+)
 */
export const IconUnion: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-union'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.612 5v8.334c0 1.01.243 2.006.708 2.902 2.25 4.34 8.37 4.58 10.952.43l.141-.228a6.457 6.457 0 0 0 .975-3.411V5'
      />
    </svg>
  )
}
