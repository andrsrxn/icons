import type { Icon } from './types'

export const IconStrokeEndPointSquare: Icon = ({
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
      data-slot='icon-ui-stroke-end-point-square'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M17.26 17.03c1.43 0 2.14 0 2.71-.2a3.5 3.5 0 0 0 2.12-2.12c.2-.57.2-1.28.2-2.71s0-2.14-.2-2.71a3.5 3.5 0 0 0-2.12-2.12c-.57-.2-1.28-.2-2.7-.2H1.7v10.06z'
        fill='currentColor'
      />
      <path
        d='M1.7 17.03h15.56c1.43 0 2.14 0 2.71-.2a3.5 3.5 0 0 0 2.12-2.12c.2-.57.2-1.28.2-2.71s0-2.14-.2-2.71a3.5 3.5 0 0 0-2.12-2.12c-.57-.2-1.28-.2-2.7-.2H1.7'
        stroke='currentColor'
      />
      <path d='M16.17 12h2.5' stroke='currentColor' />
      <path d='M10.07 12h2.5' stroke='currentColor' />
      <path d='M3.7 12h2.5' stroke='currentColor' />
    </svg>
  )
}
