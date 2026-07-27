import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTguMzg4IDE5di04LjMzNGMwLTEuMDEtLjI0My0yLjAwNi0uNzA4LTIuOTAyLTIuMjUtNC4zNC04LjM3LTQuNTgtMTAuOTUyLS40M2wtLjE0MS4yMjhhNi40NTggNi40NTggMCAwIDAtLjk3NSAzLjQxMVYxOSIvPjwvc3ZnPg==)
 */
export const IconIntersection: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-intersection'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M18.388 19v-8.334c0-1.01-.243-2.006-.708-2.902-2.25-4.34-8.37-4.58-10.952-.43l-.141.228a6.458 6.458 0 0 0-.975 3.411V19'
      />
    </svg>
  )
}
