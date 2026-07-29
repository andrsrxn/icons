import type { Icon } from '../types'

export const IconApproximate: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='approximate'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.64 10.324s1.792-1.858 4.644-1.858c2.852 0 5.548 1.858 8.36 1.858 2.814 0 3.717-1.858 3.717-1.858M3.639 15.534s1.793-1.858 4.645-1.858c2.852 0 5.548 1.858 8.36 1.858 2.814 0 3.717-1.858 3.717-1.858'
      />
    </svg>
  )
}
