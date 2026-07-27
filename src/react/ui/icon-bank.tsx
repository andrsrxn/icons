import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTExLjczIDMuODc5IDMuNyA5LjAxNmMtLjQyMS4yNy0uMjMuOTIyLjI2OS45MjJIMjAuMDNjLjUgMCAuNjktLjY1Mi4yNy0uOTIyTDEyLjI3IDMuODhhLjUuNSAwIDAgMC0uNTQgMFpNMy43NDggMTguODQ2YzAtLjM3OCAwLS41NjcuMDUtLjcyYTEgMSAwIDAgMSAuNjM2LS42MzZjLjE1My0uMDUuMzQyLS4wNS43Mi0uMDVoMTMuNjkyYy4zNzggMCAuNTY3IDAgLjcyLjA1YTEgMSAwIDAgMSAuNjM2LjYzNmMuMDUuMTUyLjA1LjM0Mi4wNS43MiAwIC4zNzkgMCAuNTY4LS4wNS43MmExIDEgMCAwIDEtLjYzNi42MzZjLS4xNTMuMDUtLjM0Mi4wNS0uNzIuMDVINS4xNTVjLS4zNzkgMC0uNTY4IDAtLjcyMS0uMDVhMSAxIDAgMCAxLS42MzYtLjYzNWMtLjA1LS4xNTMtLjA1LS4zNDItLjA1LS43MloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik02LjE1MiAxNy4xNTh2LTcuMjJtMy44ODMgNy41MDJWOS45MzhtMy45NDYgNy41MDJWOS45MzhtMy44NjcgNy41MDJWOS45MzhNMy42OTkgOS4wMTZsOC4wMzItNS4xMzdhLjUuNSAwIDAgMSAuNTM5IDBsOC4wMyA1LjEzN2MuNDIxLjI3LjIzLjkyMi0uMjY5LjkyMkgzLjk3Yy0uNSAwLS42OS0uNjUyLS4yNy0uOTIyWm0xLjQ1NiAxMS4yMzdoMTMuNjljLjM3OSAwIC41NjggMCAuNzIxLS4wNWExIDEgMCAwIDAgLjYzNi0uNjM2Yy4wNS0uMTUzLjA1LS4zNDIuMDUtLjcyIDAtLjM4IDAtLjU2OS0uMDUtLjcyMWExIDEgMCAwIDAtLjYzNi0uNjM2Yy0uMTUzLS4wNS0uMzQyLS4wNS0uNzItLjA1SDUuMTU1Yy0uMzc5IDAtLjU2OCAwLS43MjEuMDVhMSAxIDAgMCAwLS42MzYuNjM2Yy0uMDUuMTUyLS4wNS4zNDItLjA1LjcyIDAgLjM3OSAwIC41NjguMDUuNzJhMSAxIDAgMCAwIC42MzYuNjM2Yy4xNTMuMDUuMzQyLjA1LjcyLjA1WiIvPjwvc3ZnPg==)
 */
export const IconBank: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-bank'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M11.73 3.879 3.7 9.016c-.421.27-.23.922.269.922H20.03c.5 0 .69-.652.27-.922L12.27 3.88a.5.5 0 0 0-.54 0ZM3.748 18.846c0-.378 0-.567.05-.72a1 1 0 0 1 .636-.636c.153-.05.342-.05.72-.05h13.692c.378 0 .567 0 .72.05a1 1 0 0 1 .636.636c.05.152.05.342.05.72 0 .379 0 .568-.05.72a1 1 0 0 1-.636.636c-.153.05-.342.05-.72.05H5.155c-.379 0-.568 0-.721-.05a1 1 0 0 1-.636-.635c-.05-.153-.05-.342-.05-.72Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.152 17.158v-7.22m3.883 7.502V9.938m3.946 7.502V9.938m3.867 7.502V9.938M3.699 9.016l8.032-5.137a.5.5 0 0 1 .539 0l8.03 5.137c.421.27.23.922-.269.922H3.97c-.5 0-.69-.652-.27-.922Zm1.456 11.237h13.69c.379 0 .568 0 .721-.05a1 1 0 0 0 .636-.636c.05-.153.05-.342.05-.72 0-.38 0-.569-.05-.721a1 1 0 0 0-.636-.636c-.153-.05-.342-.05-.72-.05H5.155c-.379 0-.568 0-.721.05a1 1 0 0 0-.636.636c-.05.152-.05.342-.05.72 0 .379 0 .568.05.72a1 1 0 0 0 .636.636c.153.05.342.05.72.05Z'
      />
    </svg>
  )
}
