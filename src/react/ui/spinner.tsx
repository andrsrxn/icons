import type { Icon } from '../types'

export const IconSpinner: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='spinner'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 20.495v-3.04m-6.007.552 2.15-2.15M6.545 12h-3.04m4.638-3.857-2.15-2.15M12 6.545v-3.04m3.857 4.638 2.15-2.15m0 12.014-2.15-2.15M20.495 12h-3.04'
      />
    </svg>
  )
}
