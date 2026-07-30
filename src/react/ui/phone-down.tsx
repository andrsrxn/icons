import type { Icon } from './types'

export const IconPhoneDown: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='phone-down'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m15.81 15.02 3.196.769c.337.08.7.035.897-.25.262-.382.564-1.118.564-2.48 0-1.612-2.252-4.577-8.602-4.577-6.35 0-8.38 3.619-8.38 4.91 0 1.128.207 1.767.405 2.119.17.304.535.358.874.277l3.209-.773a1.5 1.5 0 0 0 1.132-1.236l.12-.8a1.5 1.5 0 0 1 1.483-1.277h2.38a1.5 1.5 0 0 1 1.486 1.303l.1.753a1.5 1.5 0 0 0 1.136 1.262Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m15.81 15.02 3.196.769c.337.08.7.035.897-.25.262-.382.564-1.118.564-2.48 0-1.612-2.252-4.577-8.602-4.577-6.35 0-8.38 3.619-8.38 4.91 0 1.128.207 1.767.405 2.119.17.304.535.358.874.277l3.209-.773a1.5 1.5 0 0 0 1.132-1.236l.12-.8a1.5 1.5 0 0 1 1.483-1.277h2.38a1.5 1.5 0 0 1 1.486 1.303l.1.753a1.5 1.5 0 0 0 1.136 1.262Z'
      />
    </svg>
  )
}
