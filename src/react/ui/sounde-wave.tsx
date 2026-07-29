import type { Icon } from './types'

export const IconSoundeWave: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='sounde-wave'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.818 15.078V8.932m9.818 6.146V8.932m-3.272 8.192V6.886m9.818 9.215V7.91M7.091 19.169V4.841m9.818 14.328V4.841'
      />
    </svg>
  )
}
