import type { Icon } from './types'

export const IconPaycheckCheck: Icon = ({
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
      data-slot='icon-ui-paycheck-check'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.3 4.52c3.3 0 4.94 0 5.97 1.03 1.02 1.02 1.02 2.67 1.02 5.97v1.83c0 .99 0 1.48-.13 1.94q-.06.26-.18.5c-.2.44-.51.82-1.14 1.57l-2 2.39a2.17 2.17 0 0 1-3.04.3 2.5 2.5 0 0 0-1.6-.57H8.7c-3.3 0-4.94 0-5.97-1.03-1.02-1.02-1.02-2.67-1.02-5.97v-.96c0-3.3 0-4.95 1.02-5.97 1.03-1.03 2.68-1.03 5.98-1.03z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M22.24 11.78v-.26c0-3.3 0-4.95-1.02-5.97-1.03-1.03-2.68-1.03-5.98-1.03H8.76c-3.3 0-4.95 0-5.98 1.03-1.02 1.02-1.02 2.67-1.02 5.97v.96c0 3.3 0 4.95 1.02 5.97 1.03 1.03 2.68 1.03 5.98 1.03h2.7'
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
      <path
        d='m14.9 18.89.83 1c.72.88 1.08 1.33 1.55 1.32.48 0 .84-.44 1.55-1.32l3.46-4.28'
        stroke='currentColor'
      />
    </svg>
  )
}
