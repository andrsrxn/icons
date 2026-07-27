import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwIDE3LjVhMi41IDIuNSAwIDEgMS01IDAgMi41IDIuNSAwIDAgMSA1IDBaTTMuOTc0IDYuNWEyLjUgMi41IDAgMSAxIDUgMCAyLjUgMi41IDAgMCAxLTUgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNy41IDE1YTIuNSAyLjUgMCAxIDAgMCA1IDIuNSAyLjUgMCAwIDAgMC01Wm0wIDBWOS42MjFjMC0xLjI0OCAwLTEuODcyLS4yNjktMi4zMzZhMiAyIDAgMCAwLS43My0uNzNjLS40NjQtLjI2OS0yLjQwMi0uMjY5LTMuNjUtLjI2OU02LjQ3NCA5YTIuNSAyLjUgMCAxIDAgMC01IDIuNSAyLjUgMCAwIDAgMCA1Wm0wIDB2NS4zNzljMCAxLjI0OCAwIDEuODcyLjI2OCAyLjMzNmEyIDIgMCAwIDAgLjczLjczYy40NjUuMjY5IDIuNDAzLjI2OSAzLjY1MS4yNjltMy4zOTQtOS4xNDItLjE2My0uMTYyYy0xLjAwMi0xLTEuNTAzLTEuNS0xLjUwMy0yLjEyMiAwLS42MjIuNS0xLjEyMiAxLjUtMi4xMjNMMTQuNTE4IDRtLTUuMDYgMTEuNDI4LjE2My4xNjJjMS4wMDIgMSAxLjUwMyAxLjUgMS41MDMgMi4xMjIgMCAuNjIyLS41IDEuMTIyLTEuNTAxIDIuMTIzTDkuNDU3IDIwIi8+PC9zdmc+)
 */
export const IconGitDiff: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-git-diff'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM3.974 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 0V9.621c0-1.248 0-1.872-.269-2.336a2 2 0 0 0-.73-.73c-.464-.269-2.402-.269-3.65-.269M6.474 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0v5.379c0 1.248 0 1.872.268 2.336a2 2 0 0 0 .73.73c.465.269 2.403.269 3.651.269m3.394-9.142-.163-.162c-1.002-1-1.503-1.5-1.503-2.122 0-.622.5-1.122 1.5-2.123L14.518 4m-5.06 11.428.163.162c1.002 1 1.503 1.5 1.503 2.122 0 .622-.5 1.122-1.501 2.123L9.457 20'
      />
    </svg>
  )
}
