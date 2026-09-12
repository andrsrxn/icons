import type { Icon } from './types'

export const IconEyeOff: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-eye-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 5.15c-5.47 0-8.65 4.2-9.77 6a1.5 1.5 0 0 0 0 1.65c1.1 1.82 4.26 6.05 9.78 6.05s8.67-4.23 9.78-6.05c.3-.51.3-1.14 0-1.64-1.13-1.82-4.31-6.01-9.78-6.01m.02 9.7a2.87 2.87 0 1 0 0-5.75 2.87 2.87 0 0 0 0 5.75'
        fill='currentColor'
      />
      <path d='m2.73 2.73 18.54 18.54' stroke='currentColor' />
      <path
        d='M12 5.15c-5.02 0-8.23 3.13-9.77 5.15-.51.67-.77 1-.77 1.68s.25 1 .75 1.67c1.53 2.04 4.73 5.2 9.79 5.2s8.26-3.16 9.79-5.2c.5-.67.75-1 .75-1.67 0-.68-.26-1-.77-1.68-1.54-2.02-4.75-5.15-9.77-5.15'
        stroke='currentColor'
      />
      <circle cx='12.02' cy='11.97' r='3.59' stroke='currentColor' />
    </svg>
  )
}
