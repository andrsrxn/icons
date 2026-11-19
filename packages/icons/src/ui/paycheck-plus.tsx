import type { Icon } from './types'

export const IconPaycheckPlus: Icon = ({
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
      data-slot='icon-ui-paycheck-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.3 4.52c3.3 0 4.94 0 5.97 1.03 1.02 1.02 1.02 2.67 1.02 5.97v5.56h-3.1v2.4H8.7c-3.3 0-4.95 0-5.98-1.03-1.02-1.02-1.02-2.67-1.02-5.97v-.96c0-3.3 0-4.95 1.02-5.97C3.75 4.52 5.4 4.52 8.7 4.52z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M22.24 11.73v-.2c0-3.3 0-4.96-1.02-5.98-1.03-1.03-2.68-1.03-5.98-1.03H8.76c-3.3 0-4.95 0-5.98 1.03-1.02 1.02-1.02 2.67-1.02 5.97v.96c0 3.3 0 4.95 1.02 5.97 1.03 1.03 2.68 1.03 5.98 1.03h3.7'
        stroke='currentColor'
      />
      <path
        d='M9.5 10.05c-.18-.58-1.05-1.02-2.08-1.02-1.02 0-2.15.38-2.15 1.55 0 2.51 4.24.58 4.24 2.91 0 1.07-1.04 1.48-2.09 1.48s-1.8-.45-2.15-1.04'
        stroke='currentColor'
      />
      <path d='M7.38 15.88v-.8' stroke='currentColor' />
      <path d='M7.38 8.9v-.78' stroke='currentColor' />
      <path d='M13.21 9.98h5.8' stroke='currentColor' />
      <path d='M13.21 14.02h2.08' stroke='currentColor' />
      <path d='M15.87 17.15h6.28' stroke='currentColor' />
      <path d='M19 20.3v-6.28' stroke='currentColor' />
    </svg>
  )
}
