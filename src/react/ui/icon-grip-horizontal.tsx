import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTUuMzYgOC42OWEuODIyLjgyMiAwIDEgMS0xLjY0MyAwIC44MjIuODIyIDAgMCAxIDEuNjQ0IDBabTAgNi42MmEuODIyLjgyMiAwIDEgMS0xLjY0MyAwIC44MjIuODIyIDAgMCAxIDEuNjQ0IDBabTcuNDYyLTYuNjJhLjgyMi44MjIgMCAxIDEtMS42NDQgMCAuODIyLjgyMiAwIDAgMSAxLjY0NCAwWm0wIDYuNjJhLjgyMi44MjIgMCAxIDEtMS42NDQgMCAuODIyLjgyMiAwIDAgMSAxLjY0NCAwWm03LjQ2MS02LjYyYS44MjIuODIyIDAgMSAxLTEuNjQ0IDAgLjgyMi44MjIgMCAwIDEgMS42NDQgMFptMCA2LjYyYS44MjIuODIyIDAgMSAxLTEuNjQ0IDAgLjgyMi44MjIgMCAwIDEgMS42NDQgMFoiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTUuMzYgOC42OWEuODIyLjgyMiAwIDEgMS0xLjY0MyAwIC44MjIuODIyIDAgMCAxIDEuNjQ0IDBabTAgNi42MmEuODIyLjgyMiAwIDEgMS0xLjY0MyAwIC44MjIuODIyIDAgMCAxIDEuNjQ0IDBabTcuNDYyLTYuNjJhLjgyMi44MjIgMCAxIDEtMS42NDQgMCAuODIyLjgyMiAwIDAgMSAxLjY0NCAwWm0wIDYuNjJhLjgyMi44MjIgMCAxIDEtMS42NDQgMCAuODIyLjgyMiAwIDAgMSAxLjY0NCAwWm03LjQ2MS02LjYyYS44MjIuODIyIDAgMSAxLTEuNjQ0IDAgLjgyMi44MjIgMCAwIDEgMS42NDQgMFptMCA2LjYyYS44MjIuODIyIDAgMSAxLTEuNjQ0IDAgLjgyMi44MjIgMCAwIDEgMS42NDQgMFoiLz48L3N2Zz4=)
 */
export const IconGripHorizontal: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-grip-horizontal'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M5.36 8.69a.822.822 0 1 1-1.643 0 .822.822 0 0 1 1.644 0Zm0 6.62a.822.822 0 1 1-1.643 0 .822.822 0 0 1 1.644 0Zm7.462-6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Zm0 6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Zm7.461-6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Zm0 6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.36 8.69a.822.822 0 1 1-1.643 0 .822.822 0 0 1 1.644 0Zm0 6.62a.822.822 0 1 1-1.643 0 .822.822 0 0 1 1.644 0Zm7.462-6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Zm0 6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Zm7.461-6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Zm0 6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Z'
      />
    </svg>
  )
}
