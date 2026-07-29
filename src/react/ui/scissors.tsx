import type { Icon } from '../types'

export const IconScissors: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='scissors'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M9.395 6.726a2.698 2.698 0 1 1-5.395 0 2.698 2.698 0 0 1 5.395 0Zm0 10.548a2.698 2.698 0 1 1-5.395 0 2.698 2.698 0 0 1 5.395 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.875 15.591 20 6.502M8.875 8.408 20 17.499M9.395 6.727a2.698 2.698 0 1 1-5.395 0 2.698 2.698 0 0 1 5.395 0Zm0 10.548a2.698 2.698 0 1 1-5.395 0 2.698 2.698 0 0 1 5.395 0Z'
      />
    </svg>
  )
}
