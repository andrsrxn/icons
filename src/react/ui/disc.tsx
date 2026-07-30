import type { Icon } from './types'

export const IconDisc: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='disc'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm3-8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6.517 11.995a5.465 5.465 0 0 1 1.606-3.872 5.465 5.465 0 0 1 3.872-1.606m.01 10.966a5.465 5.465 0 0 0 3.872-1.606 5.465 5.465 0 0 0 1.606-3.872M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-5.876 0a2.624 2.624 0 1 1-5.248 0 2.624 2.624 0 0 1 5.248 0Z'
      />
    </svg>
  )
}
