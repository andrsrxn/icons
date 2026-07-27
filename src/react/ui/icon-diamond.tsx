import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTMuNjE2IDEwLjQ3NCAyLjY4Ny01LjM2NmExIDEgMCAwIDEgLjg5NC0uNTUyaDkuNTgxYTEgMSAwIDAgMSAuODkzLjU0OWwyLjcxIDUuMzY3YTEgMSAwIDAgMS0uMTQ2IDEuMTE2bC03LjQ5NyA4LjQyMmExIDEgMCAwIDEtMS40OTUtLjAwMWwtNy40OC04LjQyM2ExIDEgMCAwIDEtLjE0Ny0xLjExMloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0zLjYxNiAxMC40NzQgMi42ODctNS4zNjZhMSAxIDAgMCAxIC44OTQtLjU1Mmg5LjU4MWExIDEgMCAwIDEgLjg5My41NDlsMi43MSA1LjM2N2ExIDEgMCAwIDEtLjE0NiAxLjExNmwtNy40OTcgOC40MjJhMSAxIDAgMCAxLTEuNDk1LS4wMDFsLTcuNDgtOC40MjNhMSAxIDAgMCAxLS4xNDctMS4xMTJaIi8+PC9zdmc+)
 */
export const IconDiamond: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-diamond'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m3.616 10.474 2.687-5.366a1 1 0 0 1 .894-.552h9.581a1 1 0 0 1 .893.549l2.71 5.367a1 1 0 0 1-.146 1.116l-7.497 8.422a1 1 0 0 1-1.495-.001l-7.48-8.423a1 1 0 0 1-.147-1.112Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m3.616 10.474 2.687-5.366a1 1 0 0 1 .894-.552h9.581a1 1 0 0 1 .893.549l2.71 5.367a1 1 0 0 1-.146 1.116l-7.497 8.422a1 1 0 0 1-1.495-.001l-7.48-8.423a1 1 0 0 1-.147-1.112Z'
      />
    </svg>
  )
}
