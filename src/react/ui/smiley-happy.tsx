import type { Icon } from '../types'

export const IconSmileyHappy: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='smiley-happy'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 20.358a8.358 8.358 0 1 0 0-16.716 8.358 8.358 0 0 0 0 16.716Zm-4.052-6.813s.857 3 4.056 3c3.2 0 4.056-3 4.056-3H7.948Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M9.915 9.49a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Zm5.358 0a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7.948 13.545s.857 3 4.056 3c3.2 0 4.056-3 4.056-3m-8.06 0h8.009M20.359 12a8.358 8.358 0 1 1-16.717 0 8.358 8.358 0 0 1 16.716 0ZM9.914 9.49a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Zm5.358 0a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Z'
      />
    </svg>
  )
}
