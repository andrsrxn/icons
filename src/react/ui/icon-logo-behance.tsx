import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE0LjUyIDEzLjg1YTMuMDg0IDMuMDg0IDAgMSAxIDYuMTY4IDBIMTQuNTJabS01LjA5LTIuMTU4aC0uMzA4YTIuMzEzIDIuMzEzIDAgMSAwIDAtNC42MjdINC42NXY5Ljg3aDQuNzhhMi42MjIgMi42MjIgMCAwIDAgMC01LjI0M1oiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNS4xMzYgOC4yOTloNC45MzZNNC42NSAxMS42OTJoNC40NzJtLTQuNDcyIDB2NS4yNDNoNC43OGEyLjYyMiAyLjYyMiAwIDAgMCAwLTUuMjQzaC0uMzA4bS00LjQ3MiAwVjcuMDY1aDQuNDcyYTIuMzEzIDIuMzEzIDAgMSAxIDAgNC42MjdtMTAuOTUgNC4wMWEzLjA4NSAzLjA4NSAwIDAgMS01LjU1Mi0xLjg1MW0wIDBhMy4wODYgMy4wODYgMCAwIDEgMy41NzgtMy4wNDUgMy4wODQgMy4wODQgMCAwIDEgMi41OSAzLjA0NUgxNC41MloiLz48L3N2Zz4=)
 */
export const IconLogoBehance: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-behance'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M14.52 13.85a3.084 3.084 0 1 1 6.168 0H14.52Zm-5.09-2.158h-.308a2.313 2.313 0 1 0 0-4.627H4.65v9.87h4.78a2.622 2.622 0 0 0 0-5.243Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.136 8.299h4.936M4.65 11.692h4.472m-4.472 0v5.243h4.78a2.622 2.622 0 0 0 0-5.243h-.308m-4.472 0V7.065h4.472a2.313 2.313 0 1 1 0 4.627m10.95 4.01a3.085 3.085 0 0 1-5.552-1.851m0 0a3.086 3.086 0 0 1 3.578-3.045 3.084 3.084 0 0 1 2.59 3.045H14.52Z'
      />
    </svg>
  )
}
