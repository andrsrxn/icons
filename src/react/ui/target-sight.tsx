import type { Icon } from './types'

export const IconTargetSight: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='target-sight'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M14.605 12a2.605 2.605 0 1 1-5.21 0 2.605 2.605 0 0 1 5.21 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11.995 6.595V2.856m0 18.288v-3.74m-5.4-5.399H2.856m18.288 0h-3.74m1.87-.005a7.274 7.274 0 1 1-14.548 0 7.274 7.274 0 0 1 14.548 0Zm-4.669 0a2.605 2.605 0 1 1-5.21 0 2.605 2.605 0 0 1 5.21 0Z'
      />
    </svg>
  )
}
