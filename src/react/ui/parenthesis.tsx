import type { Icon } from '../types'

export const IconParenthesis: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='parenthesis'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.604 3.754s3.879 2.132 3.879 8.317c0 6.184-3.879 8.175-3.879 8.175M8.418 3.754S4.54 5.886 4.54 12.07c0 6.184 3.88 8.175 3.88 8.175'
      />
    </svg>
  )
}
