import type { Icon } from './types'

export const IconScreencast: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-screencast'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.77 11.89c0-3.61 0-5.41 1.08-6.57l.19-.19C4.19 4.06 6 4.06 9.6 4.06h4.81c3.6 0 5.4 0 6.56 1.07l.2.2c1.07 1.15 1.07 2.95 1.07 6.56s0 5.4-1.08 6.56l-.19.19c-1.15 1.07-2.95 1.07-6.56 1.07H9.6c-3.6 0-5.4 0-6.56-1.07l-.2-.2c-1.07-1.15-1.07-2.95-1.07-6.56'
        fill='currentColor'
      />
      <path
        d='M3.01 18.75a.54.54 0 1 1-1.08 0 .54.54 0 0 1 1.08 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.07 19.71h.34c3.6 0 5.4 0 6.56-1.07l.2-.2c1.07-1.15 1.07-2.95 1.07-6.56s0-5.4-1.08-6.56l-.19-.19c-1.15-1.07-2.95-1.07-6.56-1.07H5.23a3.46 3.46 0 0 0-3.46 3.46'
        stroke='currentColor'
      />
      <path d='M1.77 14.72a5.65 5.65 0 0 1 5 5' stroke='currentColor' />
      <path
        d='M1.77 11.28c2.35.41 3.92 1 5.65 2.74 1.73 1.73 2.3 3.28 2.73 5.65'
        stroke='currentColor'
      />
    </svg>
  )
}
