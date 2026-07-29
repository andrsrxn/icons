import type { Icon } from '../types'

export const IconLogoEdge: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-edge'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M14.309 13.02c2.16.768 6.675.914 6.675-1.02a8.984 8.984 0 0 0-17.866-1.36c1.593-1.468 5.644-4.134 9.148-2.37 0 0 3.293.98 2.043 4.75Z'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          d='M12.137 20.936c-3.277 0-3.714-5.704-3.527-7.655 2.565 4.906 8.015 4.743 10.42 4.048-1.31 1.99-3.616 3.607-6.893 3.607Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M19.385 17.145a9 9 0 1 1 1.593-5.773c.21 2.993-5.034 2.413-6.913 1.486 1.392-1.6.402-4.038-2.274-3.851-1.745.122-2.927 1.157-2.784 3.202.28 3.99 4.444 6.205 10.36 4.79M3.022 12.628C2.739 8.585 11.739 5.4 14.27 9.94m-1.642 11.038c-2.993.21-5.162-4.725-3.567-9.748'
      />
    </svg>
  )
}
