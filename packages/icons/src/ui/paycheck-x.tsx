import type { Icon } from './types'

export const IconPaycheckX: Icon = ({
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
      data-slot='icon-ui-paycheck-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.3 4.52c3.3 0 4.94 0 5.97 1.03 1.02 1.02 1.02 2.67 1.02 5.97v3.76l-4.23 4.2H8.7c-3.3 0-4.95 0-5.98-1.03-1.02-1.02-1.02-2.67-1.02-5.97v-.96c0-3.3 0-4.95 1.02-5.97C3.75 4.52 5.4 4.52 8.7 4.52z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M13.69 19.48H8.76c-3.3 0-4.95 0-5.98-1.03-1.02-1.02-1.02-2.67-1.02-5.97v-.96c0-3.3 0-4.95 1.02-5.97 1.03-1.03 2.68-1.03 5.98-1.03h6.6c3.19 0 4.78 0 5.8.96l.12.13c.96 1.02.96 2.61.96 5.8'
        stroke='currentColor'
      />
      <path
        d='M9.5 10.05c-.18-.58-1.05-1.02-2.08-1.02-1.02 0-2.15.38-2.15 1.55 0 2.51 4.24.58 4.24 2.91 0 1.07-1.04 1.48-2.09 1.48s-1.8-.45-2.15-1.04'
        stroke='currentColor'
      />
      <path d='M7.38 15.88v-.8' stroke='currentColor' />
      <path d='M7.38 8.9v-.78' stroke='currentColor' />
      <path d='M13.21 9.98h5.8' stroke='currentColor' />
      <path d='M13.21 14.02h1.27' stroke='currentColor' />
      <path d='m17.22 20.15 5.07-5.07' stroke='currentColor' />
      <path d='m22.3 20.16-5.08-5.07' stroke='currentColor' />
    </svg>
  )
}
