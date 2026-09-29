import type { Icon } from './types'

export const IconStrokeEndPointSquare: Icon = ({
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
      data-slot='icon-ui-stroke-end-point-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.3 17.03c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7V8.97c0-.94 0-1.42-.3-1.7-.29-.3-.76-.3-1.7-.3H1.7v10.06z'
        fill='currentColor'
      />
      <path
        d='M1.7 17.03h15.56c1.9 0 2.85 0 3.56-.41a3 3 0 0 0 1.06-1.07c.42-.7.42-1.65.42-3.55s0-2.85-.42-3.55a3 3 0 0 0-1.06-1.07c-.7-.41-1.66-.41-3.56-.41H1.7'
        stroke='currentColor'
      />
      <path d='M16.17 12h2.5' stroke='currentColor' />
      <path d='M10.07 12h2.5' stroke='currentColor' />
      <path d='M3.7 12h2.5' stroke='currentColor' />
    </svg>
  )
}
