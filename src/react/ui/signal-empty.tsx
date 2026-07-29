import type { Icon } from './types'

export const IconSignalEmpty: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='signal-empty'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m7.703 12.888-1.398 1.03c-1.702 1.254-2.552 1.88-2.674 2.428a1.5 1.5 0 0 0 .479 1.459c.423.368 1.48.368 3.593.368m0-5.285v5.285m8.198-11.326-4.099 3.02-4.099 3.02m0 5.286h4.1m0 0V9.867m0 8.306H15.9m0 0H17c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56V8.918c0-1.831 0-2.747-.443-3.187a1.5 1.5 0 0 0-.827-.418c-.617-.096-1.355.448-2.829 1.534m0 11.326V6.847'
      />
    </svg>
  )
}
