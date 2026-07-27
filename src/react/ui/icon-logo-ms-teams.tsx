import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyLjQ4MyA3LjY2NmgtOGEuNjY3LjY2NyAwIDAgMC0uNjY3LjY2N3Y4YzAgLjM2OC4yOTkuNjY2LjY2Ny42NjZoOGEuNjY3LjY2NyAwIDAgMCAuNjY3LS42NjZ2LThhLjY2Ny42NjcgMCAwIDAtLjY2Ny0uNjY3WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEzLjE1IDloMy4zMzNtMCAwYS42NjcuNjY3IDAgMCAxIC42NjcuNjY2djZhNC42NjcgNC42NjcgMCAwIDEtOS4xNCAxLjMzM204LjQ3My04aDIuOTM4YS4zOTUuMzk1IDAgMCAxIC4zOTUuMzk1djQuOTM5YTIuNjY3IDIuNjY3IDAgMCAxLTIuNjY2IDIuNjY2Yy0uMDY1IDAtLjEyOSAwLS4xOTItLjAwNm0tLjQ3NS03Ljk5NGEyIDIgMCAxIDAtMS40MzQtMy4zOTRtLTUuMjMzIDQuNzI4SDcuMTVtMS4zMzMgNHYtNG0xLjY5LTIuNjY3YTIuNjY3IDIuNjY3IDAgMSAxIDIuOTc3IDEuMjVtLTguNjY3LTEuMjVoOGMuMzY4IDAgLjY2Ny4yOTguNjY3LjY2N3Y4YS42NjcuNjY3IDAgMCAxLS42NjcuNjY2aC04YS42NjcuNjY3IDAgMCAxLS42NjctLjY2NnYtOGMwLS4zNjkuMjk5LS42NjcuNjY3LS42NjdaIi8+PC9zdmc+)
 */
export const IconLogoMsTeams: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-ms-teams'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12.483 7.666h-8a.667.667 0 0 0-.667.667v8c0 .368.299.666.667.666h8a.667.667 0 0 0 .667-.666v-8a.667.667 0 0 0-.667-.667Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M13.15 9h3.333m0 0a.667.667 0 0 1 .667.666v6a4.667 4.667 0 0 1-9.14 1.333m8.473-8h2.938a.395.395 0 0 1 .395.395v4.939a2.667 2.667 0 0 1-2.666 2.666c-.065 0-.129 0-.192-.006m-.475-7.994a2 2 0 1 0-1.434-3.394m-5.233 4.728H7.15m1.333 4v-4m1.69-2.667a2.667 2.667 0 1 1 2.977 1.25m-8.667-1.25h8c.368 0 .667.298.667.667v8a.667.667 0 0 1-.667.666h-8a.667.667 0 0 1-.667-.666v-8c0-.369.299-.667.667-.667Z'
      />
    </svg>
  )
}
