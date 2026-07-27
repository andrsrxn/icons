import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTE1LjgxIDE1LjAyIDMuMTk2Ljc2OWMuMzM3LjA4LjcuMDM1Ljg5Ny0uMjUuMjYyLS4zODIuNTY0LTEuMTE4LjU2NC0yLjQ4IDAtMS42MTItMi4yNTItNC41NzctOC42MDItNC41NzctNi4zNSAwLTguMzggMy42MTktOC4zOCA0LjkxIDAgMS4xMjguMjA3IDEuNzY3LjQwNSAyLjExOS4xNy4zMDQuNTM1LjM1OC44NzQuMjc3bDMuMjA5LS43NzNhMS41IDEuNSAwIDAgMCAxLjEzMi0xLjIzNmwuMTItLjhhMS41IDEuNSAwIDAgMSAxLjQ4My0xLjI3N2gyLjM4YTEuNSAxLjUgMCAwIDEgMS40ODYgMS4zMDNsLjEuNzUzYTEuNSAxLjUgMCAwIDAgMS4xMzYgMS4yNjJaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTUuODEgMTUuMDIgMy4xOTYuNzY5Yy4zMzcuMDguNy4wMzUuODk3LS4yNS4yNjItLjM4Mi41NjQtMS4xMTguNTY0LTIuNDggMC0xLjYxMi0yLjI1Mi00LjU3Ny04LjYwMi00LjU3Ny02LjM1IDAtOC4zOCAzLjYxOS04LjM4IDQuOTEgMCAxLjEyOC4yMDcgMS43NjcuNDA1IDIuMTE5LjE3LjMwNC41MzUuMzU4Ljg3NC4yNzdsMy4yMDktLjc3M2ExLjUgMS41IDAgMCAwIDEuMTMyLTEuMjM2bC4xMi0uOGExLjUgMS41IDAgMCAxIDEuNDgzLTEuMjc3aDIuMzhhMS41IDEuNSAwIDAgMSAxLjQ4NiAxLjMwM2wuMS43NTNhMS41IDEuNSAwIDAgMCAxLjEzNiAxLjI2MloiLz48L3N2Zz4=)
 */
export const IconPhoneDown: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-phone-down'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m15.81 15.02 3.196.769c.337.08.7.035.897-.25.262-.382.564-1.118.564-2.48 0-1.612-2.252-4.577-8.602-4.577-6.35 0-8.38 3.619-8.38 4.91 0 1.128.207 1.767.405 2.119.17.304.535.358.874.277l3.209-.773a1.5 1.5 0 0 0 1.132-1.236l.12-.8a1.5 1.5 0 0 1 1.483-1.277h2.38a1.5 1.5 0 0 1 1.486 1.303l.1.753a1.5 1.5 0 0 0 1.136 1.262Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m15.81 15.02 3.196.769c.337.08.7.035.897-.25.262-.382.564-1.118.564-2.48 0-1.612-2.252-4.577-8.602-4.577-6.35 0-8.38 3.619-8.38 4.91 0 1.128.207 1.767.405 2.119.17.304.535.358.874.277l3.209-.773a1.5 1.5 0 0 0 1.132-1.236l.12-.8a1.5 1.5 0 0 1 1.483-1.277h2.38a1.5 1.5 0 0 1 1.486 1.303l.1.753a1.5 1.5 0 0 0 1.136 1.262Z'
      />
    </svg>
  )
}
