import type { Icon } from '../types'

export const IconHeartFilled: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='heart-filled'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M17.67 15.876c1.81-1.65 3.343-3.766 3.343-6.948 0-1.118-.452-2.366-1.266-3.338-.826-.987-2.059-1.729-3.616-1.729-1.248 0-2.307.509-3.102 1.103-.401.3-.746.63-1.03.947a7.004 7.004 0 0 0-1.028-.947C10.176 4.37 9.117 3.86 7.87 3.86c-1.557 0-2.79.742-3.616 1.729-.814.973-1.266 2.22-1.266 3.338 0 3.182 1.534 5.297 3.343 6.948.794.725 1.659 1.376 2.467 1.984l.298.225c.907.685 1.72 1.319 2.359 1.998a.751.751 0 0 0 1.092 0c.64-.68 1.452-1.313 2.359-1.998.098-.074.197-.15.298-.225.808-.608 1.673-1.26 2.467-1.984Z'
      />
    </svg>
  )
}
