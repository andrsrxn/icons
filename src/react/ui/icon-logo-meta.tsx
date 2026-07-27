import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNi40MDIgNi4xM2MtMS4wMjkgMC0xLjk2NS44NzMtMi44NTMgMi4xNDJsLTEuNTEgMi42MzZjMS43NzUgMy4yNDkgMy40OTkgNi45NjEgNS42MjEgNi45NjEgNS4wMzIgMCAyLjUxNi0xMS43MzgtMS4yNTgtMTEuNzM4WiIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTcuNTk4IDYuMTNjLTMuNzc0IDAtNi4yOSAxMS43NC0xLjI1OCAxMS43NCAxLjU0OCAwIDIuODc5LTEuOTY5IDQuMTc1LTQuMjkzbDEuNTI1LTIuNjdDMTAuNjYgOC4zOCA5LjI0OSA2LjEzMiA3LjU5OCA2LjEzMloiLz48L2c+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMC41MTUgMTMuNTc3Yy0xLjI5NiAyLjMyNC0yLjYzIDQuMjkyLTQuMTc1IDQuMjkyLTUuMDMyIDAtMi41MTYtMTEuNzM4IDEuMjU4LTExLjczOHM2LjI5IDExLjczOCAxMC4wNjMgMTEuNzM4YzUuMDMgMCAyLjUxNS0xMS43MzgtMS4yNi0xMS43MzgtMS4wMjggMC0xLjk2NC44NzItMi44NTIgMi4xNDEiLz48L3N2Zz4=)
 */
export const IconLogoMeta: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-meta'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M16.402 6.13c-1.029 0-1.965.873-2.853 2.142l-1.51 2.636c1.775 3.249 3.499 6.961 5.621 6.961 5.032 0 2.516-11.738-1.258-11.738Z'
        />
        <path
          fill='currentColor'
          d='M7.598 6.13c-3.774 0-6.29 11.74-1.258 11.74 1.548 0 2.879-1.969 4.175-4.293l1.525-2.67C10.66 8.38 9.249 6.132 7.598 6.132Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.515 13.577c-1.296 2.324-2.63 4.292-4.175 4.292-5.032 0-2.516-11.738 1.258-11.738s6.29 11.738 10.063 11.738c5.03 0 2.515-11.738-1.26-11.738-1.028 0-1.964.872-2.852 2.141'
      />
    </svg>
  )
}
