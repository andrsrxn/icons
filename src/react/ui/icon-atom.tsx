import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjAxIDE1LjExMmMtNC4wMzQgNC4wMzQtOC42OTggNS45MTItMTAuNDE3IDQuMTkzLTEuNzE4LTEuNzE4LjE2LTYuMzgyIDQuMTk0LTEwLjQxNyA0LjAzNS00LjAzNCA4LjY5OC01LjkxMiAxMC40MTctNC4xOTMgMS43MTggMS43MTgtLjE1OSA2LjM4Mi00LjE5NCAxMC40MTdaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyLjkyNCAxMmEuOTI0LjkyNCAwIDEgMS0xLjg0OCAwIC45MjQuOTI0IDAgMCAxIDEuODQ4IDBaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNS4wMSAxNS4xMTJjLTQuMDM0IDQuMDM0LTguNjk4IDUuOTEyLTEwLjQxNyA0LjE5My0xLjcxOC0xLjcxOC4xNi02LjM4MiA0LjE5NC0xMC40MTcgNC4wMzUtNC4wMzQgOC42OTgtNS45MTIgMTAuNDE3LTQuMTkzIDEuNzE4IDEuNzE4LS4xNTkgNi4zODItNC4xOTQgMTAuNDE3WiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOC43ODQgMTUuMTE1YzQuMDM0IDQuMDM0IDguNjk4IDUuOTEyIDEwLjQxNiA0LjE5NCAxLjcxOS0xLjcxOC0uMTYtNi4zODItNC4xOTQtMTAuNDE3QzEwLjk3MiA0Ljg1OCA2LjMwOCAyLjk4IDQuNTkgNC42OThjLTEuNzE4IDEuNzE5LjE2IDYuMzgyIDQuMTk0IDEwLjQxN1oiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjkyNCAxMmEuOTI0LjkyNCAwIDEgMS0xLjg0OCAwIC45MjQuOTI0IDAgMCAxIDEuODQ4IDBaIi8+PC9zdmc+)
 */
export const IconAtom: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-atom'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.01 15.112c-4.034 4.034-8.698 5.912-10.417 4.193-1.718-1.718.16-6.382 4.194-10.417 4.035-4.034 8.698-5.912 10.417-4.193 1.718 1.718-.159 6.382-4.194 10.417Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M12.924 12a.924.924 0 1 1-1.848 0 .924.924 0 0 1 1.848 0Z' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.01 15.112c-4.034 4.034-8.698 5.912-10.417 4.193-1.718-1.718.16-6.382 4.194-10.417 4.035-4.034 8.698-5.912 10.417-4.193 1.718 1.718-.159 6.382-4.194 10.417Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.784 15.115c4.034 4.034 8.698 5.912 10.416 4.194 1.719-1.718-.16-6.382-4.194-10.417C10.972 4.858 6.308 2.98 4.59 4.698c-1.718 1.719.16 6.382 4.194 10.417Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.924 12a.924.924 0 1 1-1.848 0 .924.924 0 0 1 1.848 0Z'
      />
    </svg>
  )
}
