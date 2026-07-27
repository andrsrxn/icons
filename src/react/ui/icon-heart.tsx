import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTcuODY4IDQuNjExYzEuMjUgMCAyLjMwNi42MTMgMy4wNiAxLjI4Ni41ODguNTI0Ljg4MS43ODYgMS4wNzIuNzg2LjE5IDAgLjQ4NC0uMjYyIDEuMDcyLS43ODYuNzU0LS42NzMgMS44MS0xLjI4NiAzLjA2LTEuMjg2IDIuNTk4IDAgNC4xMzEgMi40NTQgNC4xMzEgNC4zMTYgMCA1LjI5My00LjYwMyA3LjM1Ni03LjQ5NyA5LjkwNy0uMzg1LjMzOS0uNTc3LjUwOC0uNzY2LjUwOC0uMTg5IDAtLjM4MS0uMTctLjc2Ni0uNTA4LTIuODk0LTIuNTUtNy40OTctNC42MTQtNy40OTctOS45MDcgMC0xLjg2MiAxLjUzMy00LjMxNiA0LjEzMS00LjMxNloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03Ljg2OCA0LjYxMWMyLjA3OSAwIDMuNjIgMS42OTUgNC4xMzIgMi41NDMuNTExLS44NDggMi4wNTMtMi41NDMgNC4xMzItMi41NDMgMi41OTggMCA0LjEzMSAyLjQ1NCA0LjEzMSA0LjMxNiAwIDUuNzktNS41MDkgNy43MTYtOC4yNjMgMTAuNjQyLTIuNzU0LTIuOTI2LTguMjYzLTQuODUyLTguMjYzLTEwLjY0MiAwLTEuODYyIDEuNTMzLTQuMzE2IDQuMTMxLTQuMzE2WiIvPjwvc3ZnPg==)
 */
export const IconHeart: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-heart'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.868 4.611c1.25 0 2.306.613 3.06 1.286.588.524.881.786 1.072.786.19 0 .484-.262 1.072-.786.754-.673 1.81-1.286 3.06-1.286 2.598 0 4.131 2.454 4.131 4.316 0 5.293-4.603 7.356-7.497 9.907-.385.339-.577.508-.766.508-.189 0-.381-.17-.766-.508-2.894-2.55-7.497-4.614-7.497-9.907 0-1.862 1.533-4.316 4.131-4.316Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.868 4.611c2.079 0 3.62 1.695 4.132 2.543.511-.848 2.053-2.543 4.132-2.543 2.598 0 4.131 2.454 4.131 4.316 0 5.79-5.509 7.716-8.263 10.642-2.754-2.926-8.263-4.852-8.263-10.642 0-1.862 1.533-4.316 4.131-4.316Z'
      />
    </svg>
  )
}
