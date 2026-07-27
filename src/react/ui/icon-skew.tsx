import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYuMTAzIDcuNzkyYy40LTEuMzk0LjYtMi4wOTEgMS4xMzUtMi40OTQuNTM0LS40MDMgMS4yNi0uNDAzIDIuNzEtLjQwM2g1Ljg4NmMyLjQzNSAwIDMuNjUyIDAgNC4yNTIuNzk3LjYuNzk3LjI2NSAxLjk2Ny0uNDA3IDQuMzA3bC0xLjc4MiA2LjIxYy0uNCAxLjM5My0uNiAyLjA5LTEuMTM1IDIuNDkzLS41MzQuNDAzLTEuMjYuNDAzLTIuNzEuNDAzSDguMTY2Yy0yLjQzNSAwLTMuNjUyIDAtNC4yNTItLjc5Ny0uNi0uNzk2LS4yNjUtMS45NjcuNDA3LTQuMzA3bDEuNzgyLTYuMjFaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTYuMTAzIDcuNzkyYy40LTEuMzk0LjYtMi4wOTEgMS4xMzUtMi40OTQuNTM0LS40MDMgMS4yNi0uNDAzIDIuNzEtLjQwM2g1Ljg4NmMyLjQzNSAwIDMuNjUyIDAgNC4yNTIuNzk3LjYuNzk3LjI2NSAxLjk2Ny0uNDA3IDQuMzA3bC0xLjc4MiA2LjIxYy0uNCAxLjM5My0uNiAyLjA5LTEuMTM1IDIuNDkzLS41MzQuNDAzLTEuMjYuNDAzLTIuNzEuNDAzSDguMTY2Yy0yLjQzNSAwLTMuNjUyIDAtNC4yNTItLjc5Ny0uNi0uNzk2LS4yNjUtMS45NjcuNDA3LTQuMzA3bDEuNzgyLTYuMjFaIi8+PC9zdmc+)
 */
export const IconSkew: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-skew'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6.103 7.792c.4-1.394.6-2.091 1.135-2.494.534-.403 1.26-.403 2.71-.403h5.886c2.435 0 3.652 0 4.252.797.6.797.265 1.967-.407 4.307l-1.782 6.21c-.4 1.393-.6 2.09-1.135 2.493-.534.403-1.26.403-2.71.403H8.166c-2.435 0-3.652 0-4.252-.797-.6-.796-.265-1.967.407-4.307l1.782-6.21Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M6.103 7.792c.4-1.394.6-2.091 1.135-2.494.534-.403 1.26-.403 2.71-.403h5.886c2.435 0 3.652 0 4.252.797.6.797.265 1.967-.407 4.307l-1.782 6.21c-.4 1.393-.6 2.09-1.135 2.493-.534.403-1.26.403-2.71.403H8.166c-2.435 0-3.652 0-4.252-.797-.6-.796-.265-1.967.407-4.307l1.782-6.21Z'
      />
    </svg>
  )
}
