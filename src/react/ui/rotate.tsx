import type { Icon } from './types'

export const IconRotate: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='rotate'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path fill='currentColor' d='M4 5.772h16v12.474H4V5.772Z' opacity='.2' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m18.651 15.98.084.08c1.064 1.017 1.596 1.526 1.596 2.167 0 .64-.531 1.15-1.594 2.167l-.086.083m1.68-2.23H8c-1.886 0-2.828 0-3.414-.586C4 17.075 4 16.132 4 14.246v-3.143m-.33-5.331H16c1.886 0 2.828 0 3.414.585C20 6.943 20 7.886 20 9.772v3.142M5.349 3.524l-.084.08C4.201 4.62 3.67 5.128 3.669 5.77c0 .64.531 1.15 1.594 2.168l.086.082'
      />
    </svg>
  )
}
