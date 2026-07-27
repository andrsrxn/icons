import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjAyMiAxOS4xOGMtLjkxOC4yMzUtMi4wMy0uNTc0LTMuMDIyLS41NzRzLTIuMTA0LjgxLTMuMDIyLjU3NGMtLjk1LS4yNDMtMS40MDgtMS43MjQtMi4yNDctMi4xODUtLjg1MS0uNDY5LTIuNTM3LS4xNTktMy4yNDEtLjgxOSAwIDAgNC4yNTUtMS41MiA0LjI1NS03Ljg5N2E0LjI1NSA0LjI1NSAwIDEgMSA4LjUxIDBjMCA2LjM3NCA0LjI1NSA3Ljg5NyA0LjI1NSA3Ljg5Ny0uNzA0LjY2LTIuMzkuMzUtMy4yNDEuODItLjg0LjQ2LTEuMjk3IDEuOTQxLTIuMjQ3IDIuMTg0WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTcuMzEzIDExLjUxMy0yLS44bTExLjM3NC44IDItLjhtLTMuNjY1IDguNDY3Yy0uOTE4LjIzNS0yLjAzLS41NzQtMy4wMjItLjU3NHMtMi4xMDQuODEtMy4wMjIuNTc0Yy0uOTUtLjI0My0xLjQwOC0xLjcyNC0yLjI0Ny0yLjE4NS0uODUxLS40NjktMi41MzctLjE1OS0zLjI0MS0uODE5IDAgMCA0LjI1NS0xLjUyIDQuMjU1LTcuODk3YTQuMjU1IDQuMjU1IDAgMSAxIDguNTEgMGMwIDYuMzc0IDQuMjU1IDcuODk3IDQuMjU1IDcuODk3LS43MDQuNjYtMi4zOS4zNS0zLjI0MS44Mi0uODQuNDYtMS4yOTcgMS45NDEtMi4yNDcgMi4xODRaIi8+PC9zdmc+)
 */
export const IconLogoSnapchat: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-snapchat'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.022 19.18c-.918.235-2.03-.574-3.022-.574s-2.104.81-3.022.574c-.95-.243-1.408-1.724-2.247-2.185-.851-.469-2.537-.159-3.241-.819 0 0 4.255-1.52 4.255-7.897a4.255 4.255 0 1 1 8.51 0c0 6.374 4.255 7.897 4.255 7.897-.704.66-2.39.35-3.241.82-.84.46-1.297 1.941-2.247 2.184Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m7.313 11.513-2-.8m11.374.8 2-.8m-3.665 8.467c-.918.235-2.03-.574-3.022-.574s-2.104.81-3.022.574c-.95-.243-1.408-1.724-2.247-2.185-.851-.469-2.537-.159-3.241-.819 0 0 4.255-1.52 4.255-7.897a4.255 4.255 0 1 1 8.51 0c0 6.374 4.255 7.897 4.255 7.897-.704.66-2.39.35-3.241.82-.84.46-1.297 1.941-2.247 2.184Z'
      />
    </svg>
  )
}
