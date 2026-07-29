import type { Icon } from './types'

export const IconLogoStackOverflow: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-stack-overflow'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path fill='currentColor' d='M19.238 14.46H4.762v5.79h14.476v-5.79Z' opacity='.2' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M4.762 14.46v5.79h14.476v-5.79M8.38 16.63h7.238m-6.61-4.777 6.993 1.874m-5.148-6.325 6.268 3.619M13.787 3.58l5.118 5.118'
      />
    </svg>
  )
}
