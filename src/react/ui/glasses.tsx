import type { Icon } from './types'

export const IconGlasses: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='glasses'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M10.175 14.127a3.35 3.35 0 1 1-6.7 0 3.35 3.35 0 0 1 6.7 0Zm10.35 0a3.35 3.35 0 1 1-6.7 0 3.35 3.35 0 0 1 6.7 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.175 13.833s1.01-.701 1.825-.701c.814 0 1.825.7 1.825.7m-9.907-1.38 2.758-5.268c.503-.962 1.899-.906 2.324.093m11.082 5.175-2.758-5.268c-.503-.962-1.899-.906-2.324.093m-4.825 6.85a3.35 3.35 0 1 1-6.7 0 3.35 3.35 0 0 1 6.7 0Zm10.35 0a3.35 3.35 0 1 1-6.7 0 3.35 3.35 0 0 1 6.7 0Z'
      />
    </svg>
  )
}
