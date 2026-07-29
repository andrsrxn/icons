import type { Icon } from '../types'

export const IconUserProhibit: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='user-prohibit'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M16.807 8.261a4.807 4.807 0 1 1-9.614 0 4.807 4.807 0 0 1 9.614 0Z'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M4.59 19.548c.506-3.764 3.838-6.48 7.41-6.48 2.216 0 4.34 1.046 5.755 2.74-1.159.275-2.187 1.164-2.187 2.407 0 .905.624 1.857 1.32 2.33H5.524c-.553 0-1.007-.45-.934-.997Z'
          clipRule='evenodd'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 13.068a4.807 4.807 0 1 0 0-9.613 4.807 4.807 0 0 0 0 9.613Zm0 0c-3.88 0-7.477 3.205-7.477 7.478M12 13.068c.868 0 1.721.16 2.524.457m5.028 6.027L16.04 16.04m4.635 1.869a2.766 2.766 0 1 1-5.532 0 2.766 2.766 0 0 1 5.532 0Z'
      />
    </svg>
  )
}
