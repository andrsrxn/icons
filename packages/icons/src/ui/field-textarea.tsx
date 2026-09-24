import type { Icon } from './types'

export const IconFieldTextarea: Icon = ({
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
      data-slot='icon-ui-field-textarea'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='16.37'
        height='20.61'
        rx='2'
        transform='matrix(0 -1 -1 0 22.3 20.18)'
        fill='currentColor'
      />
      <rect
        width='16.37'
        height='20.61'
        rx='3'
        transform='matrix(0 -1 -1 0 22.3 20.18)'
        stroke='currentColor'
      />
      <path d='m17.44 17.66 2.14-2.15' stroke='currentColor' />
    </svg>
  )
}
