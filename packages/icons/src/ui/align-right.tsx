import type { Icon } from './types'

export const IconAlignRight: Icon = ({
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
      data-slot='icon-ui-align-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='18.88'
        y='3.85'
        width='6.41'
        height='17.12'
        rx='2'
        transform='rotate(90 18.88 3.85)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='18.88'
        y='13.85'
        width='6.41'
        height='12.84'
        rx='2'
        transform='rotate(90 18.88 13.85)'
        fill='currentColor'
      />
      <rect
        x='18.88'
        y='13.85'
        width='6.41'
        height='12.84'
        rx='2'
        transform='rotate(90 18.88 13.85)'
        stroke='currentColor'
      />
      <rect
        x='18.88'
        y='3.85'
        width='6.41'
        height='17.12'
        rx='2'
        transform='rotate(90 18.88 3.85)'
        stroke='currentColor'
      />
      <path d='M22.24 2.9v18.3' stroke='currentColor' />
    </svg>
  )
}
