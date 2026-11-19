import type { Icon } from './types'

export const IconFieldMail: Icon = ({
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
      data-slot='icon-ui-field-mail'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.77 18.54c2.85 0 4.28 0 5.24-.79q.29-.22.51-.51c.79-.96.79-2.39.79-5.24s0-4.28-.79-5.24a4 4 0 0 0-.51-.51c-.96-.79-2.39-.79-5.24-.79H8.23c-2.85 0-4.28 0-5.24.79a4 4 0 0 0-.51.51c-.79.96-.79 2.39-.79 5.24s0 4.28.79 5.24q.22.29.51.51c.96.79 2.39.79 5.24.79z'
        fill='currentColor'
      />
      <circle cx='17.84' cy='16.1' r='1.62' stroke='currentColor' />
      <path
        d='M17.84 20.45a4.46 4.46 0 1 1 4.47-4.47c0 1.09-.42 2.51-1.04 2.86-.61.35-1.74.39-1.74-.94v-3.03'
        stroke='currentColor'
      />
      <path
        d='M10.26 18.54H8.23c-2.37 0-3.55 0-4.45-.49a4 4 0 0 1-1.6-1.6c-.49-.9-.49-2.08-.49-4.45s0-3.55.49-4.45a4 4 0 0 1 1.6-1.6c.9-.49 2.08-.49 4.45-.49H18.4a3.9 3.9 0 0 1 3.9 3.91'
        stroke='currentColor'
      />
    </svg>
  )
}
