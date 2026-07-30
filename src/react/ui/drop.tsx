import type { Icon } from './types'

export const IconDrop: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='drop'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 20.247c3.613 0 6.542-2.755 6.542-6.154C18.542 7.976 12 3.433 12 3.433s-6.542 4.469-6.542 10.66c0 3.399 2.929 6.154 6.542 6.154Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 20.247c3.613 0 6.542-2.755 6.542-6.154C18.542 7.976 12 3.433 12 3.433s-6.542 4.469-6.542 10.66c0 3.399 2.929 6.154 6.542 6.154Z'
      />
    </svg>
  )
}
