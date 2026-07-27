import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMy42NTQgOC4wOTMuOTM4LTEuMDU5YzEuMjY1LTEuNDI3IDEuODk3LTIuMTQgMi42NjItMi4wNjIuNzY2LjA3OSAxLjI0LjkwNiAyLjE4NyAyLjU2bDUuMTYzIDkuMDEzYy45MyAxLjYyMyAxLjM5NSAyLjQzNCAyLjE1IDIuNTIuNzU1LjA4NSAxLjM5LS42MDIgMi42NTgtMS45NzdsLjk1MS0xLjAzMSIvPjwvc3ZnPg==)
 */
export const IconWaveTriangle: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-wave-triangle'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m3.654 8.093.938-1.059c1.265-1.427 1.897-2.14 2.662-2.062.766.079 1.24.906 2.187 2.56l5.163 9.013c.93 1.623 1.395 2.434 2.15 2.52.755.085 1.39-.602 2.658-1.977l.951-1.031'
      />
    </svg>
  )
}
