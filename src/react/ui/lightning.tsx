import type { Icon } from './types'

export const IconLightning: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='lightning'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m6.222 12.298 6.79-8.567c.332-.417.999-.097.88.422L12.58 9.886a.5.5 0 0 0 .487.612h4.483a.5.5 0 0 1 .391.811l-7.116 8.92c-.334.418-1.004.09-.877-.431l1.48-6.071a.5.5 0 0 0-.485-.619H6.614a.5.5 0 0 1-.392-.81Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m6.222 12.298 6.79-8.567c.332-.417.999-.097.88.422L12.58 9.886a.5.5 0 0 0 .487.612h4.483a.5.5 0 0 1 .391.811l-7.116 8.92c-.334.418-1.004.09-.877-.431l1.48-6.071a.5.5 0 0 0-.485-.619H6.614a.5.5 0 0 1-.392-.81Z'
      />
    </svg>
  )
}
