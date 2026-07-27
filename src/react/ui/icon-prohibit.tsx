import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjE3NyAxMmE4LjE3NyA4LjE3NyAwIDEgMS0xNi4zNTQgMCA4LjE3NyA4LjE3NyAwIDAgMSAxNi4zNTQgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTkuNDg1IDIwLjU0NmEuNzUuNzUgMCAwIDAgMS4wNjEtMS4wNmwtLjUzLjUzLS41My41M1pNNC41MTUgMy40NTRhLjc1Ljc1IDAgMCAwLTEuMDYxIDEuMDZsLjUzLS41My41My0uNTNaTTIwLjE3NiAxMmgtLjc1QTcuNDI3IDcuNDI3IDAgMCAxIDEyIDE5LjQyN3YxLjVBOC45MjcgOC45MjcgMCAwIDAgMjAuOTI3IDEyaC0uNzVaTTEyIDIwLjE3N3YtLjc1QTcuNDI3IDcuNDI3IDAgMCAxIDQuNTczIDEyaC0xLjVBOC45MjcgOC45MjcgMCAwIDAgMTIgMjAuOTI3di0uNzVaTTMuODIzIDEyaC43NUE3LjQyNyA3LjQyNyAwIDAgMSAxMiA0LjU3M3YtMS41QTguOTI3IDguOTI3IDAgMCAwIDMuMDczIDEyaC43NVpNMTIgMy44MjN2Ljc1QTcuNDI3IDcuNDI3IDAgMCAxIDE5LjQyNyAxMmgxLjVBOC45MjcgOC45MjcgMCAwIDAgMTIgMy4wNzN2Ljc1Wm04LjAxNiAxNi4xOTMuNTMtLjUzTDQuNTE0IDMuNDUzbC0uNTMuNTMtLjUzLjUzIDE2LjAzMiAxNi4wMzIuNTMtLjUzWiIvPjwvc3ZnPg==)
 */
export const IconProhibit: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-prohibit'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.177 12a8.177 8.177 0 1 1-16.354 0 8.177 8.177 0 0 1 16.354 0Z'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M19.485 20.546a.75.75 0 0 0 1.061-1.06l-.53.53-.53.53ZM4.515 3.454a.75.75 0 0 0-1.061 1.06l.53-.53.53-.53ZM20.176 12h-.75A7.427 7.427 0 0 1 12 19.427v1.5A8.927 8.927 0 0 0 20.927 12h-.75ZM12 20.177v-.75A7.427 7.427 0 0 1 4.573 12h-1.5A8.927 8.927 0 0 0 12 20.927v-.75ZM3.823 12h.75A7.427 7.427 0 0 1 12 4.573v-1.5A8.927 8.927 0 0 0 3.073 12h.75ZM12 3.823v.75A7.427 7.427 0 0 1 19.427 12h1.5A8.927 8.927 0 0 0 12 3.073v.75Zm8.016 16.193.53-.53L4.514 3.453l-.53.53-.53.53 16.032 16.032.53-.53Z'
      />
    </svg>
  )
}
