import type { Icon } from './types'

export const IconBorderBottom: Icon = ({
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
      data-slot='icon-ui-border-bottom'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.72 21.23c-2.82 0-4.24 0-5.12-.88-.88-.87-.88-2.29-.88-5.12V8.75c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h6.49c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.48c0 2.83 0 4.25-.88 5.12s-2.3.88-5.12.88z'
        fill='currentColor'
      />
      <path d='M8.6 11.99h6.73' stroke='currentColor' />
      <path d='M11.96 15.36V8.63' stroke='currentColor' />
      <path
        d='M2.73 18.67a2.57 2.57 0 0 0 2.56 2.56h13.35a2.57 2.57 0 0 0 2.57-2.56'
        stroke='currentColor'
      />
      <path d='M21.26 5.38v-.06a2.6 2.6 0 0 0-2.61-2.61' stroke='currentColor' />
      <path d='M2.67 5.24v-.06c0-1.37 1.1-2.47 2.47-2.47' stroke='currentColor' />
      <path d='M13.12 2.77h-2.25' stroke='currentColor' />
      <path d='M2.77 10.88v2.25' stroke='currentColor' />
      <path d='M21.25 10.88v2.25' stroke='currentColor' />
    </svg>
  )
}
