import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwLjI2NSA2LjQ5N2MuNzc0LTEuNDEyIDEuMTYxLTIuMTE3IDEuNzUzLTIuMTE3LjU5MiAwIC45OC43MDUgMS43NTMgMi4xMTdsNS41NjUgMTAuMTRjLjcyNSAxLjMyMSAxLjA4NyAxLjk4Mi43OTcgMi40NzItLjI5LjQ5LTEuMDQ0LjQ5LTIuNTUuNDlINi40NTNjLTEuNTA2IDAtMi4yNiAwLTIuNTUtLjQ5LS4yOS0uNDkuMDcyLTEuMTUuNzk3LTIuNDcxbDUuNTY1LTEwLjE0MVoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIuMzkyIDE2LjQ5YS4zOTIuMzkyIDAgMSAxLS43ODQgMCAuMzkyLjM5MiAwIDAgMSAuNzg0IDBaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMi4wMTggMTMuNjU1di00LjE1TTYuNDUzIDE5LjZoMTEuMTNjMS41MDYgMCAyLjI2IDAgMi41NS0uNDkuMjktLjQ5MS0uMDcyLTEuMTUyLS43OTctMi40NzJMMTMuNzcyIDYuNDk3Yy0uNzc1LTEuNDEyLTEuMTYyLTIuMTE3LTEuNzU0LTIuMTE3LS41OTIgMC0uOTc5LjcwNS0xLjc1MyAyLjExN0w0LjcgMTYuNjM3Yy0uNzI1IDEuMzIxLTEuMDg3IDEuOTgyLS43OTcgMi40NzIuMjkuNDkgMS4wNDQuNDkgMi41NS40OVptNS45MzktMy4xMWEuMzkyLjM5MiAwIDEgMS0uNzg0IDAgLjM5Mi4zOTIgMCAwIDEgLjc4NCAwWiIvPjwvc3ZnPg==)
 */
export const IconWarningTriangle: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-warning-triangle'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M10.265 6.497c.774-1.412 1.161-2.117 1.753-2.117.592 0 .98.705 1.753 2.117l5.565 10.14c.725 1.321 1.087 1.982.797 2.472-.29.49-1.044.49-2.55.49H6.453c-1.506 0-2.26 0-2.55-.49-.29-.49.072-1.15.797-2.471l5.565-10.141Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M12.392 16.49a.392.392 0 1 1-.784 0 .392.392 0 0 1 .784 0Z' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.018 13.655v-4.15M6.453 19.6h11.13c1.506 0 2.26 0 2.55-.49.29-.491-.072-1.152-.797-2.472L13.772 6.497c-.775-1.412-1.162-2.117-1.754-2.117-.592 0-.979.705-1.753 2.117L4.7 16.637c-.725 1.321-1.087 1.982-.797 2.472.29.49 1.044.49 2.55.49Zm5.939-3.11a.392.392 0 1 1-.784 0 .392.392 0 0 1 .784 0Z'
      />
    </svg>
  )
}
