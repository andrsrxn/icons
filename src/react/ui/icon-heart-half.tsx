import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTcuODY4IDQuNjExYzEuOTAzIDAgMy4zNTYgMS40MiAzLjk4IDIuMzEuMDcuMS4xMDYuMTUxLjEyOS4yMjRhLjk1MS45NTEgMCAwIDEgLjAyMy4yODd2OS42MTZjMCAxLjA4IDAgMS42MjEtLjI4IDEuNzU5LS4yOC4xMzctLjcyNS0uMjA3LTEuNjE2LS44OTYtMi44MjQtMi4xODItNi4zNjctNC4zNC02LjM2Ny04Ljk4NCAwLTEuODYyIDEuNTMzLTQuMzE2IDQuMTMxLTQuMzE2WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDE5LjU3YzIuNzU0LTIuOTI3IDguMjYzLTQuODUzIDguMjYzLTEwLjY0MyAwLTEuODYyLTEuNTMzLTQuMzE2LTQuMTMxLTQuMzE2LTIuMDc5IDAtMy42MiAxLjY5NS00LjEzMiAyLjU0My0uNTExLS44NDgtMi4wNTMtMi41NDMtNC4xMzItMi41NDMtMi41OTggMC00LjEzMSAyLjQ1NC00LjEzMSA0LjMxNiAwIDUuNzkgNS41MDkgNy43MTYgOC4yNjMgMTAuNjQyWm0wLTEyLjQxNnYxMi40MTUiLz48L3N2Zz4=)
 */
export const IconHeartHalf: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-heart-half'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.868 4.611c1.903 0 3.356 1.42 3.98 2.31.07.1.106.151.129.224a.951.951 0 0 1 .023.287v9.616c0 1.08 0 1.621-.28 1.759-.28.137-.725-.207-1.616-.896-2.824-2.182-6.367-4.34-6.367-8.984 0-1.862 1.533-4.316 4.131-4.316Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 19.57c2.754-2.927 8.263-4.853 8.263-10.643 0-1.862-1.533-4.316-4.131-4.316-2.079 0-3.62 1.695-4.132 2.543-.511-.848-2.053-2.543-4.132-2.543-2.598 0-4.131 2.454-4.131 4.316 0 5.79 5.509 7.716 8.263 10.642Zm0-12.416v12.415'
      />
    </svg>
  )
}
