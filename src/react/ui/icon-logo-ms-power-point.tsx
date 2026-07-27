import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEzLjM4MiA3LjM2M0g0Ljc3YS42NjIuNjYyIDAgMCAwLS42NjMuNjYydjcuOTVjMCAuMzY2LjI5Ny42NjIuNjYzLjY2Mmg4LjYxMmEuNjYyLjY2MiAwIDAgMCAuNjYyLS42NjJ2LTcuOTVhLjY2Mi42NjIgMCAwIDAtLjY2Mi0uNjYyWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjMzMiAxNi42Mzd2My4zMTNtMC0xNS45djMuMzEzTTEzLjY1NyAxMmg2LjYyNW0tMTIuNTg3LjY2Mkg5LjAyYTEuMzI1IDEuMzI1IDAgMCAwIDAtMi42NUg3LjY5NXYyLjY1Wm0wIDB2MS4zMjVNNS44NzMgNy4zNjNhNy45NSA3Ljk1IDAgMSAxIDAgOS4yNzRtLTEuNDktOS4yNzRoOC42MTJjLjM2NiAwIC42NjIuMjk2LjY2Mi42NjJ2Ny45NWEuNjYyLjY2MiAwIDAgMS0uNjYyLjY2Mkg0LjM4M2EuNjYyLjY2MiAwIDAgMS0uNjYzLS42NjJ2LTcuOTVjMC0uMzY2LjI5Ny0uNjYyLjY2My0uNjYyWiIvPjwvc3ZnPg==)
 */
export const IconLogoMsPowerPoint: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-ms-power-point'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.382 7.363H4.77a.662.662 0 0 0-.663.662v7.95c0 .366.297.662.663.662h8.612a.662.662 0 0 0 .662-.662v-7.95a.662.662 0 0 0-.662-.662Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12.332 16.637v3.313m0-15.9v3.313M13.657 12h6.625m-12.587.662H9.02a1.325 1.325 0 0 0 0-2.65H7.695v2.65Zm0 0v1.325M5.873 7.363a7.95 7.95 0 1 1 0 9.274m-1.49-9.274h8.612c.366 0 .662.296.662.662v7.95a.662.662 0 0 1-.662.662H4.383a.662.662 0 0 1-.663-.662v-7.95c0-.366.297-.662.663-.662Z'
      />
    </svg>
  )
}
