import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS42NTIgMTUuNDM0YTguOTQgOC45NCAwIDAgMS0uNTE5LS4wMTVjLS45NTYtLjA1NS0xLjQzNC0uMDgzLTEuNTg3LjE5LS4xNTMuMjczLjA3Ny42MDMuNTM2IDEuMjY0YTguODcgOC44NyAwIDEgMCAxMS43MS0xMi43NDljLS42OTgtLjQwMS0xLjA0Ni0uNjAyLTEuMzA1LS40MjYtLjI1OS4xNzUtLjE5LjY1LS4wNTUgMS41OThhOC44NyA4Ljg3IDAgMCAxLTguNzggMTAuMTM4WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTUuNjUyIDE1LjQzNGE4Ljk0IDguOTQgMCAwIDEtLjUxOS0uMDE1Yy0uOTU2LS4wNTUtMS40MzQtLjA4My0xLjU4Ny4xOS0uMTUzLjI3My4wNzcuNjAzLjUzNiAxLjI2NGE4Ljg3IDguODcgMCAxIDAgMTEuNzEtMTIuNzQ5Yy0uNjk4LS40MDEtMS4wNDYtLjYwMi0xLjMwNS0uNDI2LS4yNTkuMTc1LS4xOS42NS0uMDU1IDEuNTk4YTguODcgOC44NyAwIDAgMS04Ljc4IDEwLjEzOFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)
 */
export const IconMoon: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-moon'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M5.652 15.434a8.94 8.94 0 0 1-.519-.015c-.956-.055-1.434-.083-1.587.19-.153.273.077.603.536 1.264a8.87 8.87 0 1 0 11.71-12.749c-.698-.401-1.046-.602-1.305-.426-.259.175-.19.65-.055 1.598a8.87 8.87 0 0 1-8.78 10.138Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M5.652 15.434a8.94 8.94 0 0 1-.519-.015c-.956-.055-1.434-.083-1.587.19-.153.273.077.603.536 1.264a8.87 8.87 0 1 0 11.71-12.749c-.698-.401-1.046-.602-1.305-.426-.259.175-.19.65-.055 1.598a8.87 8.87 0 0 1-8.78 10.138Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
