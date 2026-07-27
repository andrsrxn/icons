import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEzLjkwNyAxMiA1LjYxMyAzLjcwNmEuNjI4LjYyOCAwIDAgMC0uMTkuNDUydjE1LjY4NGEuNjI4LjYyOCAwIDAgMCAuMTkuNDUyTDEzLjkwNyAxMloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik01LjYxNCAzLjcwNyAxNi41MTcgMTQuNjFNNS42MTQgMjAuMjkzIDE2LjUxNSA5LjM5Mk01LjQyNCAxOS44NDJhLjY1Mi42NTIgMCAwIDAgLjk4My41NTJsMTMuNjktNy44MzZhLjYzMi42MzIgMCAwIDAgMC0xLjExNkw2LjQwNyAzLjYwNmEuNjUzLjY1MyAwIDAgMC0uOTgzLjU1MnYxNS42ODRaIi8+PC9zdmc+)
 */
export const IconLogoPlayStore: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-play-store'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.907 12 5.613 3.706a.628.628 0 0 0-.19.452v15.684a.628.628 0 0 0 .19.452L13.907 12Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M5.614 3.707 16.517 14.61M5.614 20.293 16.515 9.392M5.424 19.842a.652.652 0 0 0 .983.552l13.69-7.836a.632.632 0 0 0 0-1.116L6.407 3.606a.653.653 0 0 0-.983.552v15.684Z'
      />
    </svg>
  )
}
