import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMTk4IDE5LjgyN0MxNC45NSAxNy4zMiAxOCAxMi41MTQgMTggOS40NTdjMC0zLjYzMy0yLjY4Ni01LjczNy02LTUuNzM3UzYgNS43ODggNiA5LjQ1N2MwIDMuMTI1IDMuMDQxIDcuODkgNC43OTMgMTAuMzc2YTEuNDcgMS40NyAwIDAgMCAyLjQwNS0uMDA2Wm0xLjYyLTEwLjQwNmMwIDEuNDg4LTEuMjYxIDIuNjk1LTIuODE4IDIuNjk1LTEuNTU3IDAtMi44MTktMS4yMDctMi44MTktMi42OTUgMC0xLjQ4OSAxLjQ2LTIuNjk1IDIuODE5LTIuNjk1IDEuMzYgMCAyLjgxOSAxLjIwNiAyLjgxOSAyLjY5NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xOCA5LjQ1N2MwIDMuMDk3LTMuMTMgNy45ODktNC44NyAxMC40NjZhMS4zNzYgMS4zNzYgMCAwIDEtMi4yNy4wMDZDOS4xMiAxNy40NzIgNiAxMi42MjMgNiA5LjQ1N2MwLTMuNjcgMi42ODYtNS43MzcgNi01LjczN3M2IDIuMTA0IDYgNS43MzdaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTQuNzEyIDkuNDM3YTIuNzEyIDIuNzEyIDAgMCAxLTUuNDI0IDBjMC0xLjQ5Ny45OTgtMi43MTEgMi43MTItMi43MTEgMS43MTQgMCAyLjcxMiAxLjIxNCAyLjcxMiAyLjcxMVoiLz48L3N2Zz4=)
 */
export const IconMapPin: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-map-pin'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M13.198 19.827C14.95 17.32 18 12.514 18 9.457c0-3.633-2.686-5.737-6-5.737S6 5.788 6 9.457c0 3.125 3.041 7.89 4.793 10.376a1.47 1.47 0 0 0 2.405-.006Zm1.62-10.406c0 1.488-1.261 2.695-2.818 2.695-1.557 0-2.819-1.207-2.819-2.695 0-1.489 1.46-2.695 2.819-2.695 1.36 0 2.819 1.206 2.819 2.695Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M18 9.457c0 3.097-3.13 7.989-4.87 10.466a1.376 1.376 0 0 1-2.27.006C9.12 17.472 6 12.623 6 9.457c0-3.67 2.686-5.737 6-5.737s6 2.104 6 5.737Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M14.712 9.437a2.712 2.712 0 0 1-5.424 0c0-1.497.998-2.711 2.712-2.711 1.714 0 2.712 1.214 2.712 2.711Z'
      />
    </svg>
  )
}
