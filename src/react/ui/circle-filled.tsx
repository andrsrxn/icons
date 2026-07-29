import type { Icon } from '../types'

export const IconCircleFilled: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='circle-filled'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path fill='currentColor' d='M12 21.23a9.23 9.23 0 1 0 0-18.46 9.23 9.23 0 0 0 0 18.46Z' />
    </svg>
  )
}
