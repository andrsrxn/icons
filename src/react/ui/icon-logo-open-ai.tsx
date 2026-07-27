import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik01LjY0IDEzLjcwNGEzLjk5MiAzLjk5MiAwIDAgMS0uODY0LS42NzEgMy45OTEgMy45OTEgMCAwIDAgNS41MjEgNS4zMjhsMy43LTIuMTM2di0zLjA3M2wtNC42NTggMi42ODktMy43LTIuMTM2WiIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTE4LjM2MiAxMC4yOTUtMy43LTIuMTM2TDEyIDkuNjk2bDQuNjU3IDIuNjg4djQuMjczYzAgLjM2NS0uMDUxLjcyOS0uMTUgMS4wOGEzLjk5MiAzLjk5MiAwIDAgMCAxLjg1NS03LjQ0MloiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMC4wMDUgMTMuMTUyVjcuNzc1bDMuNy0yLjEzN2EzLjk3MiAzLjk3MiAwIDAgMSAxLjAxNC0uNDE1IDMuOTkyIDMuOTkyIDAgMCAwLTcuMzc1IDIuMTJ2NC4yNzNsMi42NiAxLjUzNloiLz48L2c+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMC4wMDUgMTMuMTUyVjcuNzc1bDMuNy0yLjEzN2EzLjk5MiAzLjk5MiAwIDAgMSA1LjUyMiA1LjMzTTEyIDE0LjMwM2wtNC42NTYtMi42ODhWNy4zNDNhMy45OTEgMy45OTEgMCAwIDEgNy4zNzUtMi4xMThtLS43MjMgNy45MjdMOS4zNCAxNS44NDFsLTMuNy0yLjEzNmEzLjk5MSAzLjk5MSAwIDAgMSAxLjg1NC03LjQ0M202LjUwMyA0LjU4NXY1LjM3OGwtMy43IDIuMTM2YTMuOTkxIDMuOTkxIDAgMCAxLTUuNTIyLTUuMzI4TTEyIDkuNjk2bDQuNjU3IDIuNjg4djQuMjczYTMuOTkxIDMuOTkxIDAgMCAxLTcuMzc1IDIuMTE3bS43MjMtNy45MjdMMTQuNjYgOC4xNmwzLjcgMi4xMzZhMy45OTEgMy45OTEgMCAwIDEtMS44NTMgNy40NDciLz48L3N2Zz4=)
 */
export const IconLogoOpenAi: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-open-ai'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M5.64 13.704a3.992 3.992 0 0 1-.864-.671 3.991 3.991 0 0 0 5.521 5.328l3.7-2.136v-3.073l-4.658 2.689-3.7-2.136Z'
        />
        <path
          fill='currentColor'
          d='m18.362 10.295-3.7-2.136L12 9.696l4.657 2.688v4.273c0 .365-.051.729-.15 1.08a3.992 3.992 0 0 0 1.855-7.442Z'
        />
        <path
          fill='currentColor'
          d='M10.005 13.152V7.775l3.7-2.137a3.972 3.972 0 0 1 1.014-.415 3.992 3.992 0 0 0-7.375 2.12v4.273l2.66 1.536Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.005 13.152V7.775l3.7-2.137a3.992 3.992 0 0 1 5.522 5.33M12 14.303l-4.656-2.688V7.343a3.991 3.991 0 0 1 7.375-2.118m-.723 7.927L9.34 15.841l-3.7-2.136a3.991 3.991 0 0 1 1.854-7.443m6.503 4.585v5.378l-3.7 2.136a3.991 3.991 0 0 1-5.522-5.328M12 9.696l4.657 2.688v4.273a3.991 3.991 0 0 1-7.375 2.117m.723-7.927L14.66 8.16l3.7 2.136a3.991 3.991 0 0 1-1.853 7.447'
      />
    </svg>
  )
}
