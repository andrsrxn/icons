import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDIwLjM1MmE4LjM1MiA4LjM1MiAwIDEgMCAwLTE2LjcwNCA4LjM1MiA4LjM1MiAwIDAgMCAwIDE2LjcwNFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03LjA0MSAxOC43MjJhMTMuOTE0IDEzLjkxNCAwIDAgMSAxMy4zMS02LjY1M00xNy4yMiA1LjQ4M2ExMy44OTIgMTMuODkyIDAgMCAxLTEwLjc4OCA1LjEyNWMtLjg4IDAtMS43NTktLjA4My0yLjYyNC0uMjQ3TTguMzQgNC40OWExMy45MTIgMTMuOTEyIDAgMCAxIDYuODczIDEyLjAwNmMwIDEuMTM3LS4xMzggMi4yNy0uNDEyIDMuMzc0bTUuNTUtNy44N2E4LjM1MiA4LjM1MiAwIDEgMS0xNi43MDMgMCA4LjM1MiA4LjM1MiAwIDAgMSAxNi43MDQgMFoiLz48L3N2Zz4=)
 */
export const IconLogoDribbble: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-dribbble'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 20.352a8.352 8.352 0 1 0 0-16.704 8.352 8.352 0 0 0 0 16.704Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.041 18.722a13.914 13.914 0 0 1 13.31-6.653M17.22 5.483a13.892 13.892 0 0 1-10.788 5.125c-.88 0-1.759-.083-2.624-.247M8.34 4.49a13.912 13.912 0 0 1 6.873 12.006c0 1.137-.138 2.27-.412 3.374m5.55-7.87a8.352 8.352 0 1 1-16.703 0 8.352 8.352 0 0 1 16.704 0Z'
      />
    </svg>
  )
}
