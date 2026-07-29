import type { Icon } from './types'

export const IconSmileyAngry: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='smiley-angry'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.358 12a8.358 8.358 0 1 1-16.716 0 8.358 8.358 0 0 1 16.716 0Z'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M9.915 11.406a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Zm5.358 0a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.009 15.644s1.036-1.006 2.995-1.006c1.96 0 2.996 1.006 2.996 1.006M13.848 8.57l1.932-.518m-5.55.518-1.932-.518M20.358 12a8.358 8.358 0 1 1-16.716 0 8.358 8.358 0 0 1 16.716 0Zm-10.443-.594a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Zm5.358 0a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Z'
      />
    </svg>
  )
}
