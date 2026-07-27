import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTYuMTk3IDRzMy43NjIgMi4wNjkgMy43NjIgOC4wNjljMCA2LTMuNzYyIDcuOTMxLTMuNzYyIDcuOTMxTTcuNzkgNHMtMy43NiAyLjA2OS0zLjc2IDguMDY5YzAgNiAzLjc2MiA3LjkzMSAzLjc2MiA3LjkzMW0uNjU3LTQuNzI4YzMuMTMzLS4zMTcgNC02LjE2MiA3LjEyNy02LjU0NG0wIDYuNTQ0aC0xLjA4M0w5Ljc4IDguNzI4SDguNDQ4Ii8+PC9zdmc+)
 */
export const IconVariable: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-variable'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16.197 4s3.762 2.069 3.762 8.069c0 6-3.762 7.931-3.762 7.931M7.79 4s-3.76 2.069-3.76 8.069c0 6 3.762 7.931 3.762 7.931m.657-4.728c3.133-.317 4-6.162 7.127-6.544m0 6.544h-1.083L9.78 8.728H8.448'
      />
    </svg>
  )
}
