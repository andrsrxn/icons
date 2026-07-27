import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwLjczIDQuNDk0Yy42MTMtLjQ0NS45Mi0uNjY3IDEuMjctLjY2N3MuNjU3LjIyMiAxLjI3LjY2N2w2LjE4OSA0LjQ5N2MuNjEyLjQ0NS45MTguNjY3IDEuMDI2IDEgLjEwOS4zMzQtLjAwOC42OTQtLjI0MiAxLjQxNGwtMi4zNjQgNy4yNzZjLS4yMzQuNzItLjM1IDEuMDgtLjYzNSAxLjI4Ni0uMjg0LjIwNi0uNjYyLjIwNi0xLjQxOS4yMDZoLTcuNjVjLS43NTcgMC0xLjEzNSAwLTEuNDItLjIwNi0uMjgzLS4yMDYtLjQtLjU2Ni0uNjM0LTEuMjg2bC0yLjM2NC03LjI3NmMtLjIzNC0uNzItLjM1LTEuMDgtLjI0Mi0xLjQxMy4xMDgtLjMzNC40MTQtLjU1NiAxLjAyNi0xLjAwMWw2LjE5LTQuNDk3WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMC43MyA0LjQ5NGMuNjEzLS40NDUuOTItLjY2NyAxLjI3LS42NjdzLjY1Ny4yMjIgMS4yNy42NjdsNi4xODkgNC40OTdjLjYxMi40NDUuOTE4LjY2NyAxLjAyNiAxIC4xMDkuMzM0LS4wMDguNjk0LS4yNDIgMS40MTRsLTIuMzY0IDcuMjc2Yy0uMjM0LjcyLS4zNSAxLjA4LS42MzUgMS4yODYtLjI4NC4yMDYtLjY2Mi4yMDYtMS40MTkuMjA2aC03LjY1Yy0uNzU3IDAtMS4xMzUgMC0xLjQyLS4yMDYtLjI4My0uMjA2LS40LS41NjYtLjYzNC0xLjI4NmwtMi4zNjQtNy4yNzZjLS4yMzQtLjcyLS4zNS0xLjA4LS4yNDItMS40MTMuMTA4LS4zMzQuNDE0LS41NTYgMS4wMjYtMS4wMDFsNi4xOS00LjQ5N1oiLz48L3N2Zz4=)
 */
export const IconPentagon: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-pentagon'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M10.73 4.494c.613-.445.92-.667 1.27-.667s.657.222 1.27.667l6.189 4.497c.612.445.918.667 1.026 1 .109.334-.008.694-.242 1.414l-2.364 7.276c-.234.72-.35 1.08-.635 1.286-.284.206-.662.206-1.419.206h-7.65c-.757 0-1.135 0-1.42-.206-.283-.206-.4-.566-.634-1.286l-2.364-7.276c-.234-.72-.35-1.08-.242-1.413.108-.334.414-.556 1.026-1.001l6.19-4.497Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.73 4.494c.613-.445.92-.667 1.27-.667s.657.222 1.27.667l6.189 4.497c.612.445.918.667 1.026 1 .109.334-.008.694-.242 1.414l-2.364 7.276c-.234.72-.35 1.08-.635 1.286-.284.206-.662.206-1.419.206h-7.65c-.757 0-1.135 0-1.42-.206-.283-.206-.4-.566-.634-1.286l-2.364-7.276c-.234-.72-.35-1.08-.242-1.413.108-.334.414-.556 1.026-1.001l6.19-4.497Z'
      />
    </svg>
  )
}
