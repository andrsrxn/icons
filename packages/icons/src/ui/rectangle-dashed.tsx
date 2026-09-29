import type { Icon } from './types'

export const IconRectangleDashed: Icon = ({
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
      data-slot='icon-ui-rectangle-dashed'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='14.43'
        height='20.4'
        rx='3'
        transform='matrix(0 -1 -1 0 22.2 19.22)'
        fill='currentColor'
      />
      <path d='M4.47 4.78H4.4A2.7 2.7 0 0 0 1.76 7.5' stroke='currentColor' />
      <path d='M19.4 4.78h.07A2.7 2.7 0 0 1 22.1 7.5' stroke='currentColor' />
      <path d='M4.43 19.22h-.06a2.65 2.65 0 0 1-2.6-2.68' stroke='currentColor' />
      <path d='M19.58 19.22h.06c1.43 0 2.6-1.2 2.6-2.67' stroke='currentColor' />
      <path d='M1.8 10.7v2.65' stroke='currentColor' />
      <path d='M22.2 10.7v2.65' stroke='currentColor' />
      <path d='M7.7 19.22h2.6' stroke='currentColor' />
      <path d='M13.7 19.22h2.6' stroke='currentColor' />
      <path d='M7.7 4.79h2.6' stroke='currentColor' />
      <path d='M13.7 4.79h2.6' stroke='currentColor' />
    </svg>
  )
}
