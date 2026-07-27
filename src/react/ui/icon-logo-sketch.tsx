import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTguMzIgMTAuMTI0IDEyIDQuOThoNC4yOTNsNC4yOTQgNS4xNDRMMTIgMTkuNzdsLTMuNjgtOS42NDZaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy40MTMgMTAuMTI0IDEyIDE5Ljc3bDguNTg3LTkuNjQ2LTQuMjk0LTUuMTQ0SDcuNzA3bC00LjI5NCA1LjE0NFptMTcuMTc0IDBIMy40MTNNMTIgMTkuNzdsMy42OC05LjY0NkwxMiA0Ljk4bC0zLjY4IDUuMTQ0TDEyIDE5Ljc3WiIvPjwvc3ZnPg==)
 */
export const IconLogoSketch: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-sketch'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M8.32 10.124 12 4.98h4.293l4.294 5.144L12 19.77l-3.68-9.646Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3.413 10.124 12 19.77l8.587-9.646-4.294-5.144H7.707l-4.294 5.144Zm17.174 0H3.413M12 19.77l3.68-9.646L12 4.98l-3.68 5.144L12 19.77Z'
      />
    </svg>
  )
}
