import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIuOTMgMTIuMTgzYzAtLjc0OSAwLTEuMTIzLjEzLTEuNDE1YTEuNSAxLjUgMCAwIDEgLjc1OC0uNzU4Yy4yOTItLjEzLjY2Ny0uMTMgMS40MTUtLjEzLjc1IDAgMS4xMjMgMCAxLjQxNi4xM2ExLjUgMS41IDAgMCAxIC43NTcuNzU4Yy4xMy4yOTIuMTMuNjY2LjEzIDEuNDE1djUuNjM3YzAgLjc1IDAgMS4xMjMtLjEzIDEuNDE2YTEuNSAxLjUgMCAwIDEtLjc1Ny43NTdjLS4yOTMuMTMtLjY2Ny4xMy0xLjQxNi4xMy0uNzQ4IDAtMS4xMjMgMC0xLjQxNS0uMTNhMS41IDEuNSAwIDAgMS0uNzU3LS43NTdjLS4xMy0uMjkzLS4xMy0uNjY3LS4xMy0xLjQxNnYtNS42MzdabTcuMTIzLTQuODI3Yy0uMDg2IDEuMDk3LS43NTIgMS43ODctMS4yMDkgMi4zMzRhLjg5OC44OTggMCAwIDAtLjIwMS41OHY4Ljg1M2ExIDEgMCAwIDAgMSAxaDcuNDYyYTIgMiAwIDAgMCAxLjg3My0xLjNsMi4xMS01LjY0MmEyIDIgMCAwIDAtMS44NzQtMi43aC00LjQ4M2MtLjQ0NiAwLS43Ni0uNjE4LS41OS0xLjAzLjI2NS0uNjM5LjUwMi0xLjU5LjQ0Mi0yLjg5MS0uMS0yLjE4LTEuOTQxLTIuNTktMy40NjItMi42NjYtLjU3Ny0uMDI5LTEuMDM3LjQ3Mi0xLjAyMiAxLjA1YTI0LjY5IDI0LjY5IDAgMCAxLS4wNDYgMi40MTJaIi8+PC9zdmc+)
 */
export const IconLikeFilled: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-like-filled'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M2.93 12.183c0-.749 0-1.123.13-1.415a1.5 1.5 0 0 1 .758-.758c.292-.13.667-.13 1.415-.13.75 0 1.123 0 1.416.13a1.5 1.5 0 0 1 .757.758c.13.292.13.666.13 1.415v5.637c0 .75 0 1.123-.13 1.416a1.5 1.5 0 0 1-.757.757c-.293.13-.667.13-1.416.13-.748 0-1.123 0-1.415-.13a1.5 1.5 0 0 1-.757-.757c-.13-.293-.13-.667-.13-1.416v-5.637Zm7.123-4.827c-.086 1.097-.752 1.787-1.209 2.334a.898.898 0 0 0-.201.58v8.853a1 1 0 0 0 1 1h7.462a2 2 0 0 0 1.873-1.3l2.11-5.642a2 2 0 0 0-1.874-2.7h-4.483c-.446 0-.76-.618-.59-1.03.265-.639.502-1.59.442-2.891-.1-2.18-1.941-2.59-3.462-2.666-.577-.029-1.037.472-1.022 1.05a24.69 24.69 0 0 1-.046 2.412Z'
      />
    </svg>
  )
}
