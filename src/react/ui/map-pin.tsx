import type { Icon } from '../types'

export const IconMapPin: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='map-pin'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M13.198 19.827C14.95 17.32 18 12.514 18 9.457c0-3.633-2.686-5.737-6-5.737S6 5.788 6 9.457c0 3.125 3.041 7.89 4.793 10.376a1.47 1.47 0 0 0 2.405-.006Zm1.62-10.406c0 1.488-1.261 2.695-2.818 2.695-1.557 0-2.819-1.207-2.819-2.695 0-1.489 1.46-2.695 2.819-2.695 1.36 0 2.819 1.206 2.819 2.695Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M18 9.457c0 3.097-3.13 7.989-4.87 10.466a1.376 1.376 0 0 1-2.27.006C9.12 17.472 6 12.623 6 9.457c0-3.67 2.686-5.737 6-5.737s6 2.104 6 5.737Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M14.712 9.437a2.712 2.712 0 0 1-5.424 0c0-1.497.998-2.711 2.712-2.711 1.714 0 2.712 1.214 2.712 2.711Z'
      />
    </svg>
  )
}
