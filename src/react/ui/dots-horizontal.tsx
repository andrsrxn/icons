import type { Icon } from './types'

export const IconDotsHorizontal: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='dots-horizontal'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6 12a1.252 1.252 0 1 1-2.504 0A1.252 1.252 0 0 1 6 12Zm7.252 0a1.252 1.252 0 1 1-2.504 0 1.252 1.252 0 0 1 2.504 0Zm7.252 0A1.252 1.252 0 1 1 18 12a1.252 1.252 0 0 1 2.504 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6 12a1.252 1.252 0 1 1-2.504 0A1.252 1.252 0 0 1 6 12Zm7.252 0a1.252 1.252 0 1 1-2.504 0 1.252 1.252 0 0 1 2.504 0Zm7.252 0A1.252 1.252 0 1 1 18 12a1.252 1.252 0 0 1 2.504 0Z'
      />
    </svg>
  )
}
