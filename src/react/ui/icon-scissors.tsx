import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuMzk1IDYuNzI2YTIuNjk4IDIuNjk4IDAgMSAxLTUuMzk1IDAgMi42OTggMi42OTggMCAwIDEgNS4zOTUgMFptMCAxMC41NDhhMi42OTggMi42OTggMCAxIDEtNS4zOTUgMCAyLjY5OCAyLjY5OCAwIDAgMSA1LjM5NSAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTguODc1IDE1LjU5MSAyMCA2LjUwMk04Ljg3NSA4LjQwOCAyMCAxNy40OTlNOS4zOTUgNi43MjdhMi42OTggMi42OTggMCAxIDEtNS4zOTUgMCAyLjY5OCAyLjY5OCAwIDAgMSA1LjM5NSAwWm0wIDEwLjU0OGEyLjY5OCAyLjY5OCAwIDEgMS01LjM5NSAwIDIuNjk4IDIuNjk4IDAgMCAxIDUuMzk1IDBaIi8+PC9zdmc+)
 */
export const IconScissors: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-scissors'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M9.395 6.726a2.698 2.698 0 1 1-5.395 0 2.698 2.698 0 0 1 5.395 0Zm0 10.548a2.698 2.698 0 1 1-5.395 0 2.698 2.698 0 0 1 5.395 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.875 15.591 20 6.502M8.875 8.408 20 17.499M9.395 6.727a2.698 2.698 0 1 1-5.395 0 2.698 2.698 0 0 1 5.395 0Zm0 10.548a2.698 2.698 0 1 1-5.395 0 2.698 2.698 0 0 1 5.395 0Z'
      />
    </svg>
  )
}
