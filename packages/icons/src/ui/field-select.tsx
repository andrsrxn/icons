import type { Icon } from './types'

export const IconFieldSelect: Icon = ({
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
      data-slot='icon-ui-field-select'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='10.75'
        height='20.61'
        rx='2'
        transform='matrix(0 -1 -1 0 22.3 17.38)'
        fill='currentColor'
      />
      <rect
        width='10.75'
        height='20.61'
        rx='3'
        transform='matrix(0 -1 -1 0 22.3 17.38)'
        stroke='currentColor'
      />
      <path
        d='m18.74 11.41-.45.45c-1 1-1.5 1.5-2.12 1.5s-1.12-.5-2.12-1.5l-.45-.45'
        stroke='currentColor'
      />
    </svg>
  )
}
