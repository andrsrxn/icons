import type { Icon } from './types'

export const IconPasscode: Icon = ({
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
      data-slot='icon-ui-passcode'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.77 18.54c2.37 0 3.55 0 4.45-.49a4 4 0 0 0 1.6-1.6c.49-.9.49-2.08.49-4.45s0-3.55-.49-4.45a4 4 0 0 0-1.6-1.6c-.9-.49-2.08-.49-4.45-.49H8.23c-2.37 0-3.55 0-4.45.49a4 4 0 0 0-1.6 1.6c-.49.9-.49 2.08-.49 4.45s0 3.55.49 4.45a4 4 0 0 0 1.6 1.6c.9.49 2.08.49 4.45.49z'
        fill='currentColor'
      />
      <path
        d='M1.7 12c0-2.37 0-3.55.48-4.45a4 4 0 0 1 1.6-1.6c.9-.49 2.08-.49 4.45-.49h7.54c2.37 0 3.55 0 4.45.49a4 4 0 0 1 1.6 1.6c.49.9.49 2.08.49 4.45v0c0 2.37 0 3.55-.49 4.45a4 4 0 0 1-1.6 1.6c-.9.49-2.08.49-4.45.49H8.23c-2.37 0-3.55 0-4.45-.49a4 4 0 0 1-1.6-1.6c-.49-.9-.49-2.08-.49-4.45'
        stroke='currentColor'
      />
      <path
        d='M7.29 12a.66.66 0 1 1-1.32 0 .66.66 0 0 1 1.32 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.62 12a.66.66 0 1 1-1.32 0 .66.66 0 0 1 1.32 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.95 12a.66.66 0 1 1-1.32 0 .66.66 0 0 1 1.32 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
