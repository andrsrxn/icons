import type { Icon } from '../types'

export const IconSubsetProperOf: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='subset-proper-of'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19.205 5.612H10.87a6.31 6.31 0 0 0-2.903.708c-4.34 2.25-4.58 8.37-.428 10.952l.227.141a6.458 6.458 0 0 0 3.41.974h8.028'
      />
    </svg>
  )
}
