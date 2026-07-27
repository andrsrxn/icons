import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtNy4zOCA3Ljk0MiAxLjY5NS0xLjgxNmMxLjM2OS0xLjQ2NSAyLjA1My0yLjE5NyAyLjkyLTIuMTk4Ljg2OSAwIDEuNTU0LjczMiAyLjkyNCAyLjE5NWwxLjcwMiAxLjgxOW0tOS4yNDIgOC4xMTYgMS42OTYgMS44MTZjMS4zNjkgMS40NjUgMi4wNTMgMi4xOTcgMi45MiAyLjE5OC44NjkgMCAxLjU1NC0uNzMyIDIuOTI0LTIuMTk1bDEuNzAyLTEuODE5Ii8+PC9zdmc+)
 */
export const IconChevronUpDown: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-chevron-up-down'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m7.38 7.942 1.695-1.816c1.369-1.465 2.053-2.197 2.92-2.198.869 0 1.554.732 2.924 2.195l1.702 1.819m-9.242 8.116 1.696 1.816c1.369 1.465 2.053 2.197 2.92 2.198.869 0 1.554-.732 2.924-2.195l1.702-1.819'
      />
    </svg>
  )
}
