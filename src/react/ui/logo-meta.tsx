import type { Icon } from './types'

export const IconLogoMeta: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-meta'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M16.402 6.13c-1.029 0-1.965.873-2.853 2.142l-1.51 2.636c1.775 3.249 3.499 6.961 5.621 6.961 5.032 0 2.516-11.738-1.258-11.738Z'
        />
        <path
          fill='currentColor'
          d='M7.598 6.13c-3.774 0-6.29 11.74-1.258 11.74 1.548 0 2.879-1.969 4.175-4.293l1.525-2.67C10.66 8.38 9.249 6.132 7.598 6.132Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.515 13.577c-1.296 2.324-2.63 4.292-4.175 4.292-5.032 0-2.516-11.738 1.258-11.738s6.29 11.738 10.063 11.738c5.03 0 2.515-11.738-1.26-11.738-1.028 0-1.964.872-2.852 2.141'
      />
    </svg>
  )
}
