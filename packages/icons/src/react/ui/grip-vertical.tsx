import type { Icon } from './types'

export const IconGripVertical: Icon = ({
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
      data-slot='icon-ui-grip-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M9.38 4.21a.84.84 0 1 1-1.69 0 .84.84 0 0 1 1.7 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.38 12a.84.84 0 1 1-1.69 0 .84.84 0 0 1 1.7 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.38 19.79a.84.84 0 1 1-1.69 0 .84.84 0 0 1 1.7 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.3 4.21a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.69 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.3 12a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.69 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.3 19.79a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.69 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
