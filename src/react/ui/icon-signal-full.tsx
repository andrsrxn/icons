import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTYuMzUzIDE0LjIyMyAxMC40Ni03LjcwOGMxLjM5My0xLjAyNiAyLjA4OS0xLjUzOSAyLjYzOC0xLjI2MUMyMCA1LjUzIDIwIDYuMzk2IDIwIDguMTI1djcuNzA4YzAgLjk0MyAwIDEuNDE0LS4yOTMgMS43MDctLjI5My4yOTMtLjc2NC4yOTMtMS43MDcuMjkzSDcuNTRjLTIuNTEyIDAtMy43NjggMC0zLjk5NC0uNjg4LS4yMjYtLjY4OC43ODUtMS40MzIgMi44MDctMi45MjJaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtNy42NyAxMi44OTMtMS40MDIgMS4wMzNjLTEuNzE1IDEuMjYzLTIuNTcyIDEuODk1LTIuNjkyIDIuNDQ4YTEuNSAxLjUgMCAwIDAgLjQ3NSAxLjQ0NWMuNDI1LjM3MyAxLjQ5LjM3MyAzLjYxOS4zNzNtMC01LjN2NS4zbTAtNS4zIDQuMTEtMy4wMjhtLTQuMTEgOC4zMjhoNC4xMW0wIDBWOS44NjRtMCA4LjMyOGg0LjExbS00LjExLTguMzI4IDQuMTEtMy4wMjhtMCAxMS4zNTZIMTdjMS40MTQgMCAyLjEyMSAwIDIuNTYtLjQzOS40NC0uNDQuNDQtMS4xNDYuNDQtMi41NnYtNi4yOGMwLTEuODQ0IDAtMi43NjYtLjQ0OC0zLjIwN2ExLjUgMS41IDAgMCAwLS44MTUtLjQxMWMtLjYyLS4xLTEuMzYzLjQ0Ny0yLjg0NyAxLjU0bTAgMTEuMzU3VjYuODM2Ii8+PC9zdmc+)
 */
export const IconSignalFull: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-signal-full'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m6.353 14.223 10.46-7.708c1.393-1.026 2.089-1.539 2.638-1.261C20 5.53 20 6.396 20 8.125v7.708c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293H7.54c-2.512 0-3.768 0-3.994-.688-.226-.688.785-1.432 2.807-2.922Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m7.67 12.893-1.402 1.033c-1.715 1.263-2.572 1.895-2.692 2.448a1.5 1.5 0 0 0 .475 1.445c.425.373 1.49.373 3.619.373m0-5.3v5.3m0-5.3 4.11-3.028m-4.11 8.328h4.11m0 0V9.864m0 8.328h4.11m-4.11-8.328 4.11-3.028m0 11.356H17c1.414 0 2.121 0 2.56-.439.44-.44.44-1.146.44-2.56v-6.28c0-1.844 0-2.766-.448-3.207a1.5 1.5 0 0 0-.815-.411c-.62-.1-1.363.447-2.847 1.54m0 11.357V6.836'
      />
    </svg>
  )
}
