import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEzLjk4NCA3LjIxSDUuMDg5YS42ODQuNjg0IDAgMCAwLS42ODQuNjg1djguMjFjMCAuMzc4LjMwNi42ODQuNjg0LjY4NGg4Ljg5NWEuNjg0LjY4NCAwIDAgMCAuNjg0LS42ODR2LTguMjFhLjY4NC42ODQgMCAwIDAtLjY4NC0uNjg0WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE0LjY2OCA5LjI2M2g0Ljc5bS00Ljc5IDUuNDc0aDQuNzlNNy4xNDEgNy4yMVY0LjQ3NGEuNjg0LjY4NCAwIDAgMSAuNjg0LS42ODVoMTAuOTQ3YS42ODQuNjg0IDAgMCAxIC42ODQuNjg1djE1LjA1MmEuNjg0LjY4NCAwIDAgMS0uNjg0LjY4NEg3LjgyNmEuNjg0LjY4NCAwIDAgMS0uNjg0LS42ODRWMTYuNzltNi4xNTggMHYzLjQybTAtMTYuNDJ2My40Mk03LjgyNiA5Ljk0OGwzLjQyMSA0LjEwNm0wLTQuMTA2LTMuNDIxIDQuMTA2TTUuMDg5IDcuMjFoOC44OTVjLjM3OCAwIC42ODQuMzA2LjY4NC42ODR2OC4yMWEuNjg0LjY4NCAwIDAgMS0uNjg0LjY4NEg1LjA4OWEuNjg0LjY4NCAwIDAgMS0uNjg0LS42ODR2LTguMjFjMC0uMzc4LjMwNi0uNjg0LjY4NC0uNjg0WiIvPjwvc3ZnPg==)
 */
export const IconLogoMsExcel: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-ms-excel'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.984 7.21H5.089a.684.684 0 0 0-.684.685v8.21c0 .378.306.684.684.684h8.895a.684.684 0 0 0 .684-.684v-8.21a.684.684 0 0 0-.684-.684Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M14.668 9.263h4.79m-4.79 5.474h4.79M7.141 7.21V4.474a.684.684 0 0 1 .684-.685h10.947a.684.684 0 0 1 .684.685v15.052a.684.684 0 0 1-.684.684H7.826a.684.684 0 0 1-.684-.684V16.79m6.158 0v3.42m0-16.42v3.42M7.826 9.948l3.421 4.106m0-4.106-3.421 4.106M5.089 7.21h8.895c.378 0 .684.306.684.684v8.21a.684.684 0 0 1-.684.684H5.089a.684.684 0 0 1-.684-.684v-8.21c0-.378.306-.684.684-.684Z'
      />
    </svg>
  )
}
