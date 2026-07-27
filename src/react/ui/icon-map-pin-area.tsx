import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNzQ3IDE0LjAzNmMxLjA4NS0xLjkzNyAyLjA4LTQuMTU0IDIuMDgtNS43OCAwLTMuMDM0LTIuMTYxLTQuNzkxLTQuODI3LTQuNzkxUzcuMTczIDUuMTkyIDcuMTczIDguMjU2YzAgMS42NTUuOTg0IDMuODYgMi4wNjIgNS43ODItMy4yMTguNDYtNS41MjQgMS42OTgtNS41MjQgMy4xNTMgMCAxLjg0NyAzLjcxMSAzLjM0NCA4LjI4OSAzLjM0NCA0LjU3OCAwIDguMjktMS40OTcgOC4yOS0zLjM0NCAwLTEuNDU4LTIuMzE1LTIuNjk4LTUuNTQzLTMuMTU1Wk0xMiAxMC40NzdhMi4yNiAyLjI2IDAgMCAwIDIuMjY3LTIuMjVjMC0xLjI0NC0xLjE3My0yLjI1Mi0yLjI2Ny0yLjI1Mi0xLjA5NCAwLTIuMjY3IDEuMDA4LTIuMjY3IDIuMjUxQTIuMjYgMi4yNiAwIDAgMCAxMiAxMC40NzdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNy43MTUgMTQuOTgyYzEuNTg2LjU4NyAyLjU3NCAxLjQxNSAyLjU3NCAyLjMzMyAwIDEuNzc4LTMuNzExIDMuMjItOC4yODkgMy4yMi00LjU3OCAwLTguMjktMS40NDItOC4yOS0zLjIyIDAtLjkxOC45OS0xLjc0NyAyLjU3NS0yLjMzM00xNy4wNCA4LjI4M2MwIDIuNS0yLjQyOSA2LjM5My0zLjkxNCA4LjU0LS41NTUuODAxLTEuNy44MDUtMi4yNTguMDA1LTEuNDg2LTIuMTMtMy45MDYtNS45OS0zLjkwNi04LjU0NSAwLTMuMDgyIDIuMjU2LTQuODE4IDUuMDM5LTQuODE4czUuMDQgMS43NjYgNS4wNCA0LjgxOFptLTIuNzYyLS4wMTZhMi4yNzcgMi4yNzcgMCAxIDEtNC41NTQgMGMwLTEuMjU4LjgzNy0yLjI3OCAyLjI3Ny0yLjI3OCAxLjQ0IDAgMi4yNzcgMS4wMiAyLjI3NyAyLjI3OFoiLz48L3N2Zz4=)
 */
export const IconMapPinArea: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-map-pin-area'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M14.747 14.036c1.085-1.937 2.08-4.154 2.08-5.78 0-3.034-2.161-4.791-4.827-4.791S7.173 5.192 7.173 8.256c0 1.655.984 3.86 2.062 5.782-3.218.46-5.524 1.698-5.524 3.153 0 1.847 3.711 3.344 8.289 3.344 4.578 0 8.29-1.497 8.29-3.344 0-1.458-2.315-2.698-5.543-3.155ZM12 10.477a2.26 2.26 0 0 0 2.267-2.25c0-1.244-1.173-2.252-2.267-2.252-1.094 0-2.267 1.008-2.267 2.251A2.26 2.26 0 0 0 12 10.477Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.715 14.982c1.586.587 2.574 1.415 2.574 2.333 0 1.778-3.711 3.22-8.289 3.22-4.578 0-8.29-1.442-8.29-3.22 0-.918.99-1.747 2.575-2.333M17.04 8.283c0 2.5-2.429 6.393-3.914 8.54-.555.801-1.7.805-2.258.005-1.486-2.13-3.906-5.99-3.906-8.545 0-3.082 2.256-4.818 5.039-4.818s5.04 1.766 5.04 4.818Zm-2.762-.016a2.277 2.277 0 1 1-4.554 0c0-1.258.837-2.278 2.277-2.278 1.44 0 2.277 1.02 2.277 2.278Z'
      />
    </svg>
  )
}
