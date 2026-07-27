import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMjc0IDExLjY4NnYxLjk4NWMtLjI1OC0uMzY2LS42NjgtLjY0Ny0xLjE5OS0uNjQ3LS43NiAwLTEuMzI1LjYyLTEuNTEyLjkzMS0uMTg3LS4zMS0uNzUyLS45My0xLjUxMy0uOTMtLjk1IDAtMS41MTIuODk4LTEuNTEyIDEuNTggMCAxLjUzMSAxLjA1MyAyLjMyNCAyLjAxOCAzLjA1LjM2Ni4yNzYuNzIuNTQyLjk5Ny44MzUtLjM3LjAxLS43OTMuMDEtMS4yNzkuMDFINy43MjZjLTEuODg2IDAtMi44MjkgMC0zLjQxNC0uNTg2LS41ODYtLjU4Ni0uNTg2LTEuNTI4LS41ODYtMy40MTRWNy4zNTdjMC0xLjAyNi44MzEtMS44NTcgMS44NTctMS44NTdoMi45NjJjLjU3OCAwIC44NjcgMCAxLjEzNC4wNzZhMiAyIDAgMCAxIC41MTMuMjI4Yy4yMzYuMTQ3LjQzLjM2LjgxOC43ODkuMzg4LjQyOC41ODIuNjQyLjgxOC43OWEyIDIgMCAwIDAgLjUxMy4yMjdjLjI2Ny4wNzYuNTU2LjA3NiAxLjEzNC4wNzZoMi44YzEuODg1IDAgMi44MjggMCAzLjQxMy41ODYuNTg2LjU4NS41ODYgMS41MjguNTg2IDMuNDE0Wm0tMi43MjEgNi44MDRoLjAybC0uMDEuMDEtLjAxLS4wMVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIwLjI3NCAxMC4yNzZ2LTIuNTlIMTJMMTAuMDIgNS41SDMuNzI2djEzaDguNzYyIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNi4wNSAxMy4wMjRjLjc2MSAwIDEuMzI2LjYyIDEuNTEzLjkzMS4xODctLjMxLjc1MS0uOTMgMS41MTItLjkzLjk1MSAwIDEuNTEzLjg5OCAxLjUxMyAxLjU4IDAgMi4xMTktMi4wMTcgMi44MjQtMy4wMjUgMy44OTUtMS4wMDgtMS4wNzEtMy4wMjUtMS43NzYtMy4wMjUtMy44OTYgMC0uNjgxLjU2MS0xLjU4IDEuNTEyLTEuNThaIi8+PC9zdmc+)
 */
export const IconFolderHeart: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-folder-heart'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M20.274 11.686v1.985c-.258-.366-.668-.647-1.199-.647-.76 0-1.325.62-1.512.931-.187-.31-.752-.93-1.513-.93-.95 0-1.512.898-1.512 1.58 0 1.531 1.053 2.324 2.018 3.05.366.276.72.542.997.835-.37.01-.793.01-1.279.01H7.726c-1.886 0-2.829 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V7.357c0-1.026.831-1.857 1.857-1.857h2.962c.578 0 .867 0 1.134.076a2 2 0 0 1 .513.228c.236.147.43.36.818.789.388.428.582.642.818.79a2 2 0 0 0 .513.227c.267.076.556.076 1.134.076h2.8c1.885 0 2.828 0 3.413.586.586.585.586 1.528.586 3.414Zm-2.721 6.804h.02l-.01.01-.01-.01Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.274 10.276v-2.59H12L10.02 5.5H3.726v13h8.762'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16.05 13.024c.761 0 1.326.62 1.513.931.187-.31.751-.93 1.512-.93.951 0 1.513.898 1.513 1.58 0 2.119-2.017 2.824-3.025 3.895-1.008-1.071-3.025-1.776-3.025-3.896 0-.681.561-1.58 1.512-1.58Z'
      />
    </svg>
  )
}
