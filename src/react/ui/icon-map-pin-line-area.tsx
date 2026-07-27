import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjI2NCA2Ljk3MWEzLjI2NCAzLjI2NCAwIDEgMS02LjUyOCAwIDMuMjY0IDMuMjY0IDAgMCAxIDYuNTI4IDBabTUuMDI2IDEwLjMxOGMwIDEuNzc5LTMuNzEyIDMuMjItOC4yOSAzLjIyLTQuNTc4IDAtOC4yOS0xLjQ0MS04LjI5LTMuMjIgMC0xLjc3OSAzLjcxMi0zLjIyIDguMjktMy4yMiA0LjU3OCAwIDguMjkgMS40NDEgOC4yOSAzLjIyWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDEwLjIzNmEzLjI2NCAzLjI2NCAwIDEgMCAwLTYuNTI5IDMuMjY0IDMuMjY0IDAgMCAwIDAgNi41MjlabTAgMHY2Ljk0bTMuNjU1LTIuNzc4YzIuNzQ1LjUyNCA0LjYzNCAxLjYyMiA0LjYzNCAyLjg5IDAgMS43OC0zLjcxMSAzLjIyMS04LjI4OSAzLjIyMS00LjU3OCAwLTguMjktMS40NDEtOC4yOS0zLjIyIDAtMS4yNyAxLjg5LTIuMzY3IDQuNjM2LTIuODkyIi8+PC9zdmc+)
 */
export const IconMapPinLineArea: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-map-pin-line-area'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.264 6.971a3.264 3.264 0 1 1-6.528 0 3.264 3.264 0 0 1 6.528 0Zm5.026 10.318c0 1.779-3.712 3.22-8.29 3.22-4.578 0-8.29-1.441-8.29-3.22 0-1.779 3.712-3.22 8.29-3.22 4.578 0 8.29 1.441 8.29 3.22Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 10.236a3.264 3.264 0 1 0 0-6.529 3.264 3.264 0 0 0 0 6.529Zm0 0v6.94m3.655-2.778c2.745.524 4.634 1.622 4.634 2.89 0 1.78-3.711 3.221-8.289 3.221-4.578 0-8.29-1.441-8.29-3.22 0-1.27 1.89-2.367 4.636-2.892'
      />
    </svg>
  )
}
