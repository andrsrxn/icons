import type { Icon } from './types'

export const IconLogoCodepen: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-codepen'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.797 14.524 12 10.107l8.203 4.417L12 18.941l-8.203-4.417Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m12 18.941 8.203-4.417V9.476L12 5.059 3.797 9.476v5.048L12 18.941Zm8.203-9.465L12 13.893m8.203.631L12 10.107m-8.203-.631L12 13.893m-8.203.631L12 10.107m0-5.048v5.048m0 3.786v5.048'
      />
    </svg>
  )
}
