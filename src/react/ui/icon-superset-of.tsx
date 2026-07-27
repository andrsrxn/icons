import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYgNC4yNWEuNzUuNzUgMCAxIDAgMCAxLjV2LTEuNVptNy4xNzYuNzV2LS43NVY1Wm0yLjg2OCAxMC4wNC0uMzk2LS42MzguMzk2LjYzN1ptLS4xOTUuMTItLjM5Ni0uNjM2LjM5Ni42MzdaTTEyLjkxIDE2di43NVYxNlpNNiAxNS4yNWEuNzUuNzUgMCAwIDAgMCAxLjV2LTEuNVptOS42NzUtOS42NC4zNDUtLjY2Ny0uMzQ1LjY2NlptMi42MyAxNC4yMzVhLjc1Ljc1IDAgMCAwIDAtMS41djEuNVptLTEyLjYxLTEuNWEuNzUuNzUgMCAwIDAgMCAxLjV2LTEuNVpNNiA1di43NWg3LjE3NnYtMS41SDZWNVptMTAuMDQ0IDEwLjA0LS4zOTYtLjYzOC0uMTk1LjEyMi4zOTYuNjM3LjM5Ni42MzcuMTk1LS4xMjItLjM5Ni0uNjM3Wm0tMy4xMzMuOTZ2LS43NUg2djEuNWg2LjkxMlYxNlptMi45MzgtLjg0LS4zOTYtLjYzNmE0LjgxMSA0LjgxMSAwIDAgMS0yLjU0MS43MjZ2MS41YTYuMzEgNi4zMSAwIDAgMCAzLjMzMy0uOTUybC0uMzk2LS42MzdaTTEzLjE3NiA1di43NWMuNzUgMCAxLjQ4OS4xOCAyLjE1NC41MjVsLjM0NS0uNjY2LjM0NS0uNjY2YTYuMTggNi4xOCAwIDAgMC0yLjg0NC0uNjkzVjVabTIuNS42MS0uMzQ2LjY2NWMzLjIyIDEuNjcgMy4zOTkgNi4yMTEuMzE4IDguMTI3bC4zOTYuNjM3LjM5Ni42MzdjNC4wNjgtMi41MyAzLjgzNC04LjUyNy0uNDItMTAuNzMzbC0uMzQ1LjY2NlptMi42MjggMTMuNDg1di0uNzVINS42OTZ2MS41aDEyLjYwOHYtLjc1WiIvPjwvc3ZnPg==)
 */
export const IconSupersetOf: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-superset-of'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6 4.25a.75.75 0 1 0 0 1.5v-1.5Zm7.176.75v-.75V5Zm2.868 10.04-.396-.638.396.637Zm-.195.12-.396-.636.396.637ZM12.91 16v.75V16ZM6 15.25a.75.75 0 0 0 0 1.5v-1.5Zm9.675-9.64.345-.667-.345.666Zm2.63 14.235a.75.75 0 0 0 0-1.5v1.5Zm-12.61-1.5a.75.75 0 0 0 0 1.5v-1.5ZM6 5v.75h7.176v-1.5H6V5Zm10.044 10.04-.396-.638-.195.122.396.637.396.637.195-.122-.396-.637Zm-3.133.96v-.75H6v1.5h6.912V16Zm2.938-.84-.396-.636a4.811 4.811 0 0 1-2.541.726v1.5a6.31 6.31 0 0 0 3.333-.952l-.396-.637ZM13.176 5v.75c.75 0 1.489.18 2.154.525l.345-.666.345-.666a6.18 6.18 0 0 0-2.844-.693V5Zm2.5.61-.346.665c3.22 1.67 3.399 6.211.318 8.127l.396.637.396.637c4.068-2.53 3.834-8.527-.42-10.733l-.345.666Zm2.628 13.485v-.75H5.696v1.5h12.608v-.75Z'
      />
    </svg>
  )
}
