import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQgMTAuNzM3YzAtMS42NTYgMC0yLjQ4NC40OS0zLjA0OC40OS0uNTY0IDEuMzEtLjY4IDIuOTUtLjkxMmw4LTEuMTMyYzIuMTIyLS4zIDMuMTgzLS40NSAzLjg3MS4xNDhDMjAgNi4zOSAyMCA3LjQ2MyAyMCA5LjYwNnY0Ljc3NWMwIDIuMTUgMCAzLjIyMy0uNjkgMy44MjItLjY5MS41OTgtMS43NTUuNDQ0LTMuODgxLjEzN2wtOC0xLjE1NGMtMS42MzUtLjIzNi0yLjQ1My0uMzU0LTIuOTQtLjkxN0M0IDE1LjcwNSA0IDE0Ljg3OSA0IDEzLjIyN3YtMi40OVoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNCA3LjM0MiAyMCA1djE0TDQgMTYuNjkxVjcuMzQyWiIvPjwvc3ZnPg==)
 */
export const IconPerspective: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-perspective'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M4 10.737c0-1.656 0-2.484.49-3.048.49-.564 1.31-.68 2.95-.912l8-1.132c2.122-.3 3.183-.45 3.871.148C20 6.39 20 7.463 20 9.606v4.775c0 2.15 0 3.223-.69 3.822-.691.598-1.755.444-3.881.137l-8-1.154c-1.635-.236-2.453-.354-2.94-.917C4 15.705 4 14.879 4 13.227v-2.49Z'
        opacity='.2'
      />
      <path stroke='currentColor' strokeWidth='1.5' d='M4 7.342 20 5v14L4 16.691V7.342Z' />
    </svg>
  )
}
