import type { Icon } from './types'

export const IconMeasure: Icon = ({
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
      data-slot='icon-ui-measure'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.77 15.28c0 1.75 0 2.63.35 3.29a3 3 0 0 0 1.24 1.23c.66.35 1.53.35 3.28.35h10.72c1.75 0 2.62 0 3.28-.35a3 3 0 0 0 1.24-1.23c.35-.66.35-1.54.35-3.29s0-2.62-.35-3.29a3 3 0 0 0-1.24-1.23c-.66-.35-1.53-.35-3.28-.35H6.64c-1.75 0-2.62 0-3.28.35A3 3 0 0 0 2.12 12c-.35.67-.35 1.54-.35 3.3'
        fill='currentColor'
      />
      <path d='M2.16 5.63h19.68' stroke='currentColor' />
      <path d='M2.16 7.53V3.85' stroke='currentColor' />
      <path d='M21.84 7.53V3.85' stroke='currentColor' />
      <path
        d='M6.64 10.4h10.72c1.75 0 2.62 0 3.28.36A3 3 0 0 1 21.88 12c.35.67.35 1.54.35 3.3v0c0 1.74 0 2.62-.35 3.28a3 3 0 0 1-1.24 1.23c-.66.35-1.53.35-3.28.35H6.64c-1.75 0-2.62 0-3.28-.35a3 3 0 0 1-1.24-1.23c-.35-.66-.35-1.54-.35-3.29v0c0-1.75 0-2.62.35-3.29a3 3 0 0 1 1.24-1.23c.66-.35 1.53-.35 3.28-.35'
        stroke='currentColor'
      />
      <path d='M12 10.48v3.87' stroke='currentColor' />
      <path d='M7.24 10.4v3.95' stroke='currentColor' />
      <path d='M16.76 10.4v3.95' stroke='currentColor' />
    </svg>
  )
}
