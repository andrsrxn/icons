import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNzMzIDQuNzI4IDE2LjA1IDguMzQ2aC04LjFMNi4yNjggNC43MjhhLjMzNi4zMzYgMCAwIDAtLjY0Mi4wMzJsLTEuNzAxIDYuNTEzIDguMDc3IDQuNjYzIDguMDc2LTQuNjYzLTEuNzAxLTYuNTEzYS4zMzYuMzM2IDAgMCAwLS42NDQtLjAzMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIwLjA3OCAxMS4yNzMgMTguMzc3IDQuNzZhLjMzNi4zMzYgMCAwIDAtLjY0NC0uMDMyTDE2LjA1IDguMzQ2aC04LjFMNi4yNjggNC43MjhhLjMzNi4zMzYgMCAwIDAtLjY0Mi4wMzJsLTEuNzAxIDYuNTEzbTQuNjYxIDYuNjM1IDMuMjIzIDIuMjc2YS4zMzQuMzM0IDAgMCAwIC4zODcgMGwzLjIyMi0yLjI3NiAzLjA0Ni0yLjE1MmE0LjE5MiA0LjE5MiAwIDAgMCAxLjYxNC00LjQ4M20wIDBMOC41ODYgMTcuOTA4bS00LjY2MS02LjYzNWE0LjE5MiA0LjE5MiAwIDAgMCAxLjYxNCA0LjQ4M2wzLjA0NyAyLjE1Mm0tNC42NjEtNi42MzUgMTEuNDkzIDYuNjM2Ii8+PC9zdmc+)
 */
export const IconLogoGitlab: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-gitlab'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M17.733 4.728 16.05 8.346h-8.1L6.268 4.728a.336.336 0 0 0-.642.032l-1.701 6.513 8.077 4.663 8.076-4.663-1.701-6.513a.336.336 0 0 0-.644-.032Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M20.078 11.273 18.377 4.76a.336.336 0 0 0-.644-.032L16.05 8.346h-8.1L6.268 4.728a.336.336 0 0 0-.642.032l-1.701 6.513m4.661 6.635 3.223 2.276a.334.334 0 0 0 .387 0l3.222-2.276 3.046-2.152a4.192 4.192 0 0 0 1.614-4.483m0 0L8.586 17.908m-4.661-6.635a4.192 4.192 0 0 0 1.614 4.483l3.047 2.152m-4.661-6.635 11.493 6.636'
      />
    </svg>
  )
}
