import type { Icon } from './types'

export const IconStrokeEndPointRound: Icon = ({
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
      data-slot='icon-ui-stroke-end-point-round'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.95 16.96c.66 0 .99 0 1.24-.17s.38-.48.62-1.09L22 12.74c.14-.36.22-.55.22-.74 0-.2-.08-.38-.22-.74l-1.2-2.97c-.24-.6-.37-.9-.62-1.08-.25-.17-.58-.17-1.24-.17H1.52v9.92z'
        fill='currentColor'
      />
      <path d='M1.7 16.96h15.64a4.96 4.96 0 1 0 0-9.92H1.7' stroke='currentColor' />
      <path d='M16.17 12h2.5' stroke='currentColor' />
      <path d='M10.07 12h2.5' stroke='currentColor' />
      <path d='M3.7 12h2.5' stroke='currentColor' />
    </svg>
  )
}
