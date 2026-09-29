import type { Icon } from './types'

export const IconStrokeEndPointRound: Icon = ({
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
      data-slot='icon-ui-stroke-end-point-round'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.97 16.96c.65 0 .98 0 1.24-.17.25-.17.37-.48.61-1.1L22 12.75c.15-.37.22-.55.22-.74 0-.2-.07-.37-.22-.74L20.82 8.3c-.24-.61-.36-.92-.61-1.09-.26-.17-.59-.17-1.24-.17H1.7v9.92z'
        fill='currentColor'
      />
      <path d='M1.7 16.96h15.64a4.96 4.96 0 0 0 0-9.92H1.7' stroke='currentColor' />
      <path d='M16.17 12h2.5' stroke='currentColor' />
      <path d='M10.07 12h2.5' stroke='currentColor' />
      <path d='M3.7 12h2.5' stroke='currentColor' />
    </svg>
  )
}
