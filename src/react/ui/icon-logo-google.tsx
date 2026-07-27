import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMTQ1IDE0LjUxYTQuOTI4IDQuOTI4IDAgMSAxLS40My01Ljg3NWwyLjU5Ni0yLjA5N2E4LjM2MiA4LjM2MiAwIDEgMCAyLjAzOCA1LjMyMWgtOC44MzJ2Mi42NWg0LjYyOFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE2LjE0NSAxNC41MWE0LjkyOCA0LjkyOCAwIDEgMS0uNDMtNS44NzVsMi41OTYtMi4wOTdhOC4zNjIgOC4zNjIgMCAxIDAgMi4wMzggNS4zMjFoLTguODMydjIuNjVoNC42MjhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)
 */
export const IconLogoGoogle: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-google'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillOpacity='.2'
        fillRule='evenodd'
        d='M16.145 14.51a4.928 4.928 0 1 1-.43-5.875l2.596-2.097a8.362 8.362 0 1 0 2.038 5.321h-8.832v2.65h4.628Z'
        clipRule='evenodd'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16.145 14.51a4.928 4.928 0 1 1-.43-5.875l2.596-2.097a8.362 8.362 0 1 0 2.038 5.321h-8.832v2.65h4.628Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
