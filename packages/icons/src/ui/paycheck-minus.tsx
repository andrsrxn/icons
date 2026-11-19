import type { Icon } from './types'

export const IconPaycheckMinus: Icon = ({
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
      data-slot='icon-ui-paycheck-minus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.3 4.52c3.3 0 4.94 0 5.97 1.03 1.02 1.02 1.02 2.67 1.02 5.97v1.96c0 2.83 0 4.24-.88 5.12-.87.88-2.29.88-5.12.88H8.71c-3.3 0-4.95 0-5.98-1.03-1.02-1.02-1.02-2.67-1.02-5.97v-.96c0-3.3 0-4.95 1.02-5.97 1.03-1.03 2.68-1.03 5.98-1.03z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M22.24 13.5v-1.98c0-3.3 0-4.95-1.02-5.97-1.03-1.03-2.68-1.03-5.98-1.03H8.76c-3.3 0-4.95 0-5.98 1.03-1.02 1.02-1.02 2.67-1.02 5.97v.96c0 3.3 0 4.95 1.02 5.97 1.03 1.03 2.68 1.03 5.98 1.03h4.05'
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
      <path d='M16.62 17.28h5.91' stroke='currentColor' />
    </svg>
  )
}
