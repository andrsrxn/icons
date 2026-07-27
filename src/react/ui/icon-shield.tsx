import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTExLjk5NyAxNy45NFY1LjYxYTEgMSAwIDAgMC0xLjUyLS44NTRsLTIuNjEzIDEuNTlhMSAxIDAgMCAxLS4xNzMuMDg0TDQuNTYyIDcuNTg1YTEgMSAwIDAgMC0uNTcgMS4zNGwyLjY1OCA2LjA2MWExIDEgMCAwIDAgLjIxNy4zMTRsMy40MyAzLjM1NGMuNjM0LjYyIDEuNy4xNyAxLjctLjcxNVoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMS45OTcgMjAuMTI1VjMuOTU4bS0uNjI3LjIxYy0uNzQ0LjU2Mi0yLjAzIDEuNTAzLTMuMTkyIDIuMTk2LTEuMDU0LjYyOC0yLjM4NiAxLjAzMy0zLjI4NyAxLjI1OC0uNTUxLjEzNy0uOTEzLjY5OC0uNzUgMS4yNTkuMzkzIDEuMzU3IDEuMjUgMy44NCAyLjc3NSA2LjE4MmExOS42MTMgMTkuNjEzIDAgMCAwIDQuNTY0IDQuODg4Ljg1Ny44NTcgMCAwIDAgMS4wMzQgMCAxOS42MSAxOS42MSAwIDAgMCA0LjU2NC00Ljg4OGMxLjUyNi0yLjM0MyAyLjM4Mi00LjgyNSAyLjc3NS02LjE4Mi4xNjMtLjU2MS0uMTk5LTEuMTIyLS43NS0xLjI2LS45MDEtLjIyNC0yLjIzMy0uNjI5LTMuMjg3LTEuMjU3LTEuMTYyLS42OTMtMi40NDgtMS42MzQtMy4xOTItMi4xOTYtLjM3LS4yOC0uODg0LS4yOC0xLjI1NCAwWiIvPjwvc3ZnPg==)
 */
export const IconShield: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-shield'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M11.997 17.94V5.61a1 1 0 0 0-1.52-.854l-2.613 1.59a1 1 0 0 1-.173.084L4.562 7.585a1 1 0 0 0-.57 1.34l2.658 6.061a1 1 0 0 0 .217.314l3.43 3.354c.634.62 1.7.17 1.7-.715Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11.997 20.125V3.958m-.627.21c-.744.562-2.03 1.503-3.192 2.196-1.054.628-2.386 1.033-3.287 1.258-.551.137-.913.698-.75 1.259.393 1.357 1.25 3.84 2.775 6.182a19.613 19.613 0 0 0 4.564 4.888.857.857 0 0 0 1.034 0 19.61 19.61 0 0 0 4.564-4.888c1.526-2.343 2.382-4.825 2.775-6.182.163-.561-.199-1.122-.75-1.26-.901-.224-2.233-.629-3.287-1.257-1.162-.693-2.448-1.634-3.192-2.196-.37-.28-.884-.28-1.254 0Z'
      />
    </svg>
  )
}
