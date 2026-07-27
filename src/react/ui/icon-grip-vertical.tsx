import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjMxIDUuMzZhLjgyMi44MjIgMCAxIDEgMC0xLjY0My44MjIuODIyIDAgMCAxIDAgMS42NDRabS02LjYyIDBhLjgyMi44MjIgMCAxIDEgMC0xLjY0My44MjIuODIyIDAgMCAxIDAgMS42NDRabTYuNjIgNy40NjJhLjgyMi44MjIgMCAxIDEgMC0xLjY0NC44MjIuODIyIDAgMCAxIDAgMS42NDRabS02LjYyIDBhLjgyMi44MjIgMCAxIDEgMC0xLjY0NC44MjIuODIyIDAgMCAxIDAgMS42NDRabTYuNjIgNy40NjFhLjgyMi44MjIgMCAxIDEgMC0xLjY0NC44MjIuODIyIDAgMCAxIDAgMS42NDRabS02LjYyIDBhLjgyMi44MjIgMCAxIDEgMC0xLjY0NC44MjIuODIyIDAgMCAxIDAgMS42NDRaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNS4zMSA1LjM2YS44MjIuODIyIDAgMSAxIDAtMS42NDMuODIyLjgyMiAwIDAgMSAwIDEuNjQ0Wm0tNi42MiAwYS44MjIuODIyIDAgMSAxIDAtMS42NDMuODIyLjgyMiAwIDAgMSAwIDEuNjQ0Wm02LjYyIDcuNDYyYS44MjIuODIyIDAgMSAxIDAtMS42NDQuODIyLjgyMiAwIDAgMSAwIDEuNjQ0Wm0tNi42MiAwYS44MjIuODIyIDAgMSAxIDAtMS42NDQuODIyLjgyMiAwIDAgMSAwIDEuNjQ0Wm02LjYyIDcuNDYxYS44MjIuODIyIDAgMSAxIDAtMS42NDQuODIyLjgyMiAwIDAgMSAwIDEuNjQ0Wm0tNi42MiAwYS44MjIuODIyIDAgMSAxIDAtMS42NDQuODIyLjgyMiAwIDAgMSAwIDEuNjQ0WiIvPjwvc3ZnPg==)
 */
export const IconGripVertical: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-grip-vertical'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.31 5.36a.822.822 0 1 1 0-1.643.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.643.822.822 0 0 1 0 1.644Zm6.62 7.462a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm6.62 7.461a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.31 5.36a.822.822 0 1 1 0-1.643.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.643.822.822 0 0 1 0 1.644Zm6.62 7.462a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm6.62 7.461a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Z'
      />
    </svg>
  )
}
