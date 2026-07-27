import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNTQ0IDguODE5YTQuNTUgNC41NSAwIDAgMS0uMzkgMS44NDcgNC41MzcgNC41MzcgMCAwIDAtNC42NzEgMi42NjggNC41MyA0LjUzIDAgMCAwLS4zOTIgMS44NDdjMCAxLjAyMy4zMzggMS45NjguOTA5IDIuNzI3YTQuNTQ1IDQuNTQ1IDAgMSAxLTQuMTUzLTcuMjQyIDQuNTQ0IDQuNTQ0IDAgMSAxIDguNjk4LTEuODQ3WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE2LjE1MyAxMC42NjZhNC41NDUgNC41NDUgMCAxIDAtNC42NzEgMi42NjhtMCAwYTQuNTM3IDQuNTM3IDAgMCAxIDQuNjcxLTIuNjY4IDQuNTQ1IDQuNTQ1IDAgMSAxLTQuNjcgMi42NjhabS0zLjYzNS0yLjY2OEE0LjU0NSA0LjU0NSAwIDEgMCAxMiAxNy45MDgiLz48L3N2Zz4=)
 */
export const IconColors: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-colors'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M16.544 8.819a4.55 4.55 0 0 1-.39 1.847 4.537 4.537 0 0 0-4.671 2.668 4.53 4.53 0 0 0-.392 1.847c0 1.023.338 1.968.909 2.727a4.545 4.545 0 1 1-4.153-7.242 4.544 4.544 0 1 1 8.698-1.847Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M16.153 10.666a4.545 4.545 0 1 0-4.671 2.668m0 0a4.537 4.537 0 0 1 4.671-2.668 4.545 4.545 0 1 1-4.67 2.668Zm-3.635-2.668A4.545 4.545 0 1 0 12 17.908'
      />
    </svg>
  )
}
