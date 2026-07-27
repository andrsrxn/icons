import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTIuNjY4IDguNTA0IDEuNzM5LjY1OWMuODY3LjMyOCAxLjMwMS40OTMgMS42NzIuMzI1bTEuNTIyLTMuMjEyLS42NTggMS43NDNjLS4zMjguODY4LS40OTIgMS4zMDItLjg2NCAxLjQ3bTAgMEwxNC4wMjEgNi4wMmMtLjgxMi0xLjQwNi0xLjIxOC0yLjExLTEuODI3LTIuMTFzLTEuMDE1LjcwNC0xLjgyNyAyLjExTDguMzIyIDkuNTYzTTMuNDg0IDEyLjU2bDEuNzk2LS40OTljLjg5My0uMjQ4IDEuMzQtLjM3MiAxLjY5NS0uMTcyLjM1NC4yLjQ3OC42NDguNzI2IDEuNTQxbC40OTYgMS43OTNNNi45NzUgMTEuODlsLTIuMDg4IDMuNjIzYy0uODEyIDEuNDA2LTEuMjE4IDIuMTEtLjkxNCAyLjYzNy4zMDUuNTI3IDEuMTE3LjUyNyAyLjc0LjUyN2gzLjUxNW01LjA1NS0yLjcwNy0xLjMxNiAxLjMxNGMtLjY1Ny42NTUtLjk4NS45ODMtLjk4NiAxLjM5bTIuMzAyIDIuNzEtMS4zMTgtMS4zMThjLS42NTYtLjY1Ni0uOTg0LS45ODQtLjk4My0xLjM5Mm0wIDAgNC42OTMuMDAzYzEuNjI0IDAgMi40MzYgMCAyLjc0LS41MjcuMzA1LS41MjgtLjEwMS0xLjIzLS45MTMtMi42MzdsLTIuMjI1LTMuNjIzIi8+PC9zdmc+)
 */
export const IconArrowsTriangle: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-arrows-triangle'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m12.668 8.504 1.739.659c.867.328 1.301.493 1.672.325m1.522-3.212-.658 1.743c-.328.868-.492 1.302-.864 1.47m0 0L14.021 6.02c-.812-1.406-1.218-2.11-1.827-2.11s-1.015.704-1.827 2.11L8.322 9.563M3.484 12.56l1.796-.499c.893-.248 1.34-.372 1.695-.172.354.2.478.648.726 1.541l.496 1.793M6.975 11.89l-2.088 3.623c-.812 1.406-1.218 2.11-.914 2.637.305.527 1.117.527 2.74.527h3.515m5.055-2.707-1.316 1.314c-.657.655-.985.983-.986 1.39m2.302 2.71-1.318-1.318c-.656-.656-.984-.984-.983-1.392m0 0 4.693.003c1.624 0 2.436 0 2.74-.527.305-.528-.101-1.23-.913-2.637l-2.225-3.623'
      />
    </svg>
  )
}
