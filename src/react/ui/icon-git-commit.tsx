import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjMyNCAxMmEzLjMyNCAzLjMyNCAwIDEgMS02LjY0OCAwIDMuMzI0IDMuMzI0IDAgMCAxIDYuNjQ4IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOC42NzYgMTJhMy4zMjQgMy4zMjQgMCAwIDEgNi42NDggMG0tNi42NDggMGEzLjMyNCAzLjMyNCAwIDEgMCA2LjY0OCAwbS02LjY0OCAwSDRtMTEuMzI0IDBoNS4xNzEiLz48L3N2Zz4=)
 */
export const IconGitCommit: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-git-commit'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.324 12a3.324 3.324 0 1 1-6.648 0 3.324 3.324 0 0 1 6.648 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.676 12a3.324 3.324 0 0 1 6.648 0m-6.648 0a3.324 3.324 0 1 0 6.648 0m-6.648 0H4m11.324 0h5.171'
      />
    </svg>
  )
}
