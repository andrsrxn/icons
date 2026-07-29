import type { Icon } from '../types'

export const IconLogoSlack: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-slack'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 14.098V12h6.294a2.098 2.098 0 0 1 0 4.196h-4.196A2.098 2.098 0 0 1 12 14.098Zm0 2.098h2.098A2.098 2.098 0 1 1 12 18.294v-2.098Zm0-6.294V12H5.706a2.098 2.098 0 0 1 0-4.196h4.196A2.098 2.098 0 0 1 12 9.902Zm0-2.098H9.902A2.098 2.098 0 1 1 12 5.706v2.098Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 12V9.902a2.098 2.098 0 0 0-2.098-2.098M12 12H5.706M12 12h2.098a2.098 2.098 0 0 0 2.098-2.098M12 12V5.706M12 12v2.098a2.098 2.098 0 0 0 2.098 2.098M12 12h6.294M12 12H9.902a2.098 2.098 0 0 0-2.098 2.098M12 12v6.294M5.706 12a2.098 2.098 0 0 1 0-4.196h4.196M5.706 12a2.098 2.098 0 1 0 2.098 2.098M5.706 12h2.098v2.098m2.098-6.294H12V5.706M9.902 7.804A2.098 2.098 0 1 1 12 5.706m0 0a2.098 2.098 0 0 1 4.196 0v4.196m0 0V12h2.098m-2.098-2.098A2.098 2.098 0 1 1 18.294 12m0 0a2.098 2.098 0 0 1 0 4.196h-4.196m0 0H12v2.098m2.098-2.098A2.098 2.098 0 1 1 12 18.294m0 0a2.098 2.098 0 0 1-4.196 0v-4.196'
      />
    </svg>
  )
}
