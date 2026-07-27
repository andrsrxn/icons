import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMuNzM4IDkuODYzaDE2LjUyNFYxNi4yYzAgMS44ODYgMCAyLjgyOC0uNTg1IDMuNDE0LS41ODYuNTg2LTEuNTMuNTg2LTMuNDE1LjU4Nkg3LjczOGMtMS44ODYgMC0yLjgyOSAwLTMuNDE0LS41ODYtLjU4Ni0uNTg2LS41ODYtMS41MjgtLjU4Ni0zLjQxNFY5Ljg2M1oiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjAuMjYyIDkuODUydjYuMzQ5YzAgMS44ODYgMCAyLjgyOC0uNTg1IDMuNDE0LS41ODYuNTg2LTEuNTMuNTg2LTMuNDE1LjU4Nkg3LjczOGMtMS44ODYgMC0yLjgyOSAwLTMuNDE0LS41ODYtLjU4Ni0uNTg2LS41ODYtMS41MjgtLjU4Ni0zLjQxNFY5Ljg1MmMwLS45MTkgMC0xLjM3OC4xNDgtMS43NDJhMiAyIDAgMCAxIDEuMDk2LTEuMDk2Yy4zNjMtLjE0OC44MjMtLjE0OCAxLjc0Mi0uMTQ4aC4wNjdtMCAwIC4xNDItLjRjLjQ1Ni0xLjI5LjY4My0xLjkzMyAxLjIwMi0yLjMuNTItLjM2NyAxLjIwMy0uMzY3IDIuNTY5LS4zNjdoMi41NTJjMS4zODMgMCAyLjA3NSAwIDIuNTk3LjM3NC41MjIuMzc0Ljc0NSAxLjAyOSAxLjE5IDIuMzM4bC4xMjEuMzU1bS0xMC4zNzMgMGgxMC4zNzNtMCAwaC4xMTJjLjkxOSAwIDEuMzc5IDAgMS43NDIuMTQ4YTIgMiAwIDAgMSAxLjA5NiAxLjA5NmMuMTQ4LjM2NC4xNDguODIzLjE0OCAxLjc0Mm0tMTYuNTI0IDBoMTYuNTI0Ii8+PC9zdmc+)
 */
export const IconBriefcase: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-briefcase'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.738 9.863h16.524V16.2c0 1.886 0 2.828-.585 3.414-.586.586-1.53.586-3.415.586H7.738c-1.886 0-2.829 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V9.863Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M20.262 9.852v6.349c0 1.886 0 2.828-.585 3.414-.586.586-1.53.586-3.415.586H7.738c-1.886 0-2.829 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V9.852c0-.919 0-1.378.148-1.742a2 2 0 0 1 1.096-1.096c.363-.148.823-.148 1.742-.148h.067m0 0 .142-.4c.456-1.29.683-1.933 1.202-2.3.52-.367 1.203-.367 2.569-.367h2.552c1.383 0 2.075 0 2.597.374.522.374.745 1.029 1.19 2.338l.121.355m-10.373 0h10.373m0 0h.112c.919 0 1.379 0 1.742.148a2 2 0 0 1 1.096 1.096c.148.364.148.823.148 1.742m-16.524 0h16.524'
      />
    </svg>
  )
}
