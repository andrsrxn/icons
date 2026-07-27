import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjM1OCAxMmE4LjM1OCA4LjM1OCAwIDEgMS0xNi43MTYgMCA4LjM1OCA4LjM1OCAwIDAgMSAxNi43MTYgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNOS45MTUgOS40OWEuNTk0LjU5NCAwIDEgMS0xLjE4OCAwIC41OTQuNTk0IDAgMCAxIDEuMTg4IDBaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjAwOSAxNXMxLjAzNiAxLjAwNiAyLjk5NSAxLjAwNkMxMy45NjQgMTYuMDA2IDE1IDE1IDE1IDE1bS0xLjE4NC01LjUxaDJNMjAuMzU4IDEyYTguMzU4IDguMzU4IDAgMSAxLTE2LjcxNiAwIDguMzU4IDguMzU4IDAgMCAxIDE2LjcxNiAwWk05LjkxNSA5LjQ5YS41OTQuNTk0IDAgMSAxLTEuMTg4IDAgLjU5NC41OTQgMCAwIDEgMS4xODggMFoiLz48L3N2Zz4=)
 */
export const IconSmileyBlink: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-smiley-blink'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.358 12a8.358 8.358 0 1 1-16.716 0 8.358 8.358 0 0 1 16.716 0Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M9.915 9.49a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Z' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.009 15s1.036 1.006 2.995 1.006C13.964 16.006 15 15 15 15m-1.184-5.51h2M20.358 12a8.358 8.358 0 1 1-16.716 0 8.358 8.358 0 0 1 16.716 0ZM9.915 9.49a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Z'
      />
    </svg>
  )
}
