import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE5LjcxMyAxNS45ODdjLjUxMSAxLjAxNy43NjcgMS41MjUuNjI1IDEuOTI2YTEuMDAxIDEuMDAxIDAgMCAxLS4yMjMuMzYxYy0uMjk1LjMwNy0uODY0LjMwNy0yLjAwMi4zMDdINS44NzhjLTEuMTQ3IDAtMS43MiAwLTIuMDE1LS4zMWExIDEgMCAwIDEtLjIyMi0uMzYyYy0uMTQtLjQwMy4xMi0uOTE0LjY0My0xLjkzNC4yMTMtLjQxOC4zMi0uNjI3LjQ5NC0uNzYyYS45OTguOTk4IDAgMCAxIC4xOTYtLjEyYy4yLS4wOTMuNDM0LS4wOTMuOTA0LS4wOTNoMTIuMjM1Yy40NzMgMCAuNzEgMCAuOTEuMDk0YTEgMSAwIDAgMSAuMTk4LjEyMWMuMTc0LjEzOC4yOC4zNS40OTIuNzcyWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xOS4xNTUgMTQuOTg0SDQuNzltMTQuMzY1IDBWOS40MmMwLTEuODg1IDAtMi44MjgtLjU4Ni0zLjQxNC0uNTg1LS41ODYtMS41MjgtLjU4Ni0zLjQxNC0uNTg2SDguNzljLTEuODg2IDAtMi44MjkgMC0zLjQxNC41ODYtLjU4Ni41ODYtLjU4NiAxLjUyOS0uNTg2IDMuNDE0djUuNTY1bTE0LjM2NSAwIC4zMzYuNTM5Yy44NDMgMS4zNTIgMS4yNjUgMi4wMjguOTc5IDIuNTQzLS4yODYuNTE1LTEuMDgzLjUxNS0yLjY3Ni41MTVINi4xNmMtMS41NzYgMC0yLjM2NCAwLTIuNjUtLjUxLS4yODctLjUxLjEyMi0xLjE4My45NC0yLjUzbC4zNC0uNTU3Ii8+PC9zdmc+)
 */
export const IconDeviceLaptop: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-device-laptop'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M19.713 15.987c.511 1.017.767 1.525.625 1.926a1.001 1.001 0 0 1-.223.361c-.295.307-.864.307-2.002.307H5.878c-1.147 0-1.72 0-2.015-.31a1 1 0 0 1-.222-.362c-.14-.403.12-.914.643-1.934.213-.418.32-.627.494-.762a.998.998 0 0 1 .196-.12c.2-.093.434-.093.904-.093h12.235c.473 0 .71 0 .91.094a1 1 0 0 1 .198.121c.174.138.28.35.492.772Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M19.155 14.984H4.79m14.365 0V9.42c0-1.885 0-2.828-.586-3.414-.585-.586-1.528-.586-3.414-.586H8.79c-1.886 0-2.829 0-3.414.586-.586.586-.586 1.529-.586 3.414v5.565m14.365 0 .336.539c.843 1.352 1.265 2.028.979 2.543-.286.515-1.083.515-2.676.515H6.16c-1.576 0-2.364 0-2.65-.51-.287-.51.122-1.183.94-2.53l.34-.557'
      />
    </svg>
  )
}
