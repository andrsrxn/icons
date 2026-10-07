import type { Icon } from './types'

export const IconDrum: Icon = ({
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
      data-slot='icon-ui-drum'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.73 14.4c0-2.85 0-3.69 3.21-2 1.65.38 4.84.94 7.06.94 1.91 0 6.23-.88 7.76-1.11 2.51-1.4 2.51-.16 2.51 2.17 0 2.56-4.6 4.64-10.27 4.64S1.73 16.96 1.73 14.4'
        fill='currentColor'
      />
      <ellipse
        cx='12'
        cy='9.77'
        rx='10.27'
        ry='3.73'
        transform='rotate(-180 12 9.77)'
        stroke='currentColor'
      />
      <path d='M1.73 14.8c0 2.34 4.6 4.24 10.27 4.24s10.27-1.9 10.27-4.23' stroke='currentColor' />
      <path d='M22.27 9.98v4.83' stroke='currentColor' />
      <path d='M16.04 13.5v5' stroke='currentColor' />
      <path d='m20.87 4.06-6.74 5.4' stroke='currentColor' />
      <path d='m3.13 4.06 6.74 5.4' stroke='currentColor' />
      <path d='M7.96 13.73v4.56' stroke='currentColor' />
      <path d='M1.73 9.98v4.94' stroke='currentColor' />
    </svg>
  )
}
