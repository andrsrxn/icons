import type { Icon } from './types'

export const IconLogoAppStore: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-app-store'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path fill='currentColor' d='M16.236 15.281 12 8.113 7.764 15.28h8.472Z' opacity='.2' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M18.563 19.219 10.03 4.78m-2.266 10.5-2.326 3.939m8.53-14.438-6.204 10.5m8.472 0h4.295m-17.062 0h12.906'
      />
    </svg>
  )
}
