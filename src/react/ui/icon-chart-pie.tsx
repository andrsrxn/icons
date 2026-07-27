import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMy41NjdhOC40MzMgOC40MzMgMCAwIDAtNS45NjMgMTQuMzk2TDEyIDEyVjMuNTY3WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDMuNTY3YTguNDMzIDguNDMzIDAgMSAwIDAgMTYuODY2IDguNDMzIDguNDMzIDAgMCAwIDAtMTYuODY2Wm0wIDB2Ni43NzZjMCAuODE4IDAgMS4yMjYtLjE1MiAxLjU5NC0uMTUzLjM2OC0uNDQyLjY1Ny0xLjAyIDEuMjM1bC00LjY5MyA0LjY5MyIvPjwvc3ZnPg==)
 */
export const IconChartPie: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-chart-pie'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 3.567a8.433 8.433 0 0 0-5.963 14.396L12 12V3.567Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 3.567a8.433 8.433 0 1 0 0 16.866 8.433 8.433 0 0 0 0-16.866Zm0 0v6.776c0 .818 0 1.226-.152 1.594-.153.368-.442.657-1.02 1.235l-4.693 4.693'
      />
    </svg>
  )
}
