import type { Icon } from '../types'

export const IconDislikeFilled: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='dislike-filled'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M21.066 11.817c0 .749 0 1.123-.131 1.415a1.5 1.5 0 0 1-.757.758c-.292.13-.667.13-1.415.13-.75 0-1.123 0-1.416-.13a1.5 1.5 0 0 1-.757-.758c-.13-.292-.13-.666-.13-1.415V6.18c0-.75 0-1.123.13-1.416a1.5 1.5 0 0 1 .757-.757c.293-.13.667-.13 1.416-.13.748 0 1.123 0 1.415.13.337.15.606.42.757.757.13.293.13.667.13 1.416v5.637Zm-7.123 4.827c.086-1.097.752-1.787 1.209-2.334a.898.898 0 0 0 .201-.58V4.878a1 1 0 0 0-1-1H6.891a2 2 0 0 0-1.874 1.3L2.908 10.82a2 2 0 0 0 1.874 2.7h4.483c.446 0 .76.618.59 1.03-.265.639-.502 1.59-.442 2.891.1 2.18 1.941 2.59 3.462 2.666.577.029 1.037-.472 1.022-1.05a24.657 24.657 0 0 1 .046-2.412Z'
      />
    </svg>
  )
}
