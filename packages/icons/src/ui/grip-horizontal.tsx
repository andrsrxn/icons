import type { Icon } from './types'

export const IconGripHorizontal: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-grip-horizontal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M4.21 14.62a.84.84 0 1 1 0 1.69.84.84 0 0 1 0-1.7'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12 14.62a.84.84 0 1 1 0 1.69.84.84 0 0 1 0-1.7'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M19.79 14.62a.84.84 0 1 1 0 1.69.84.84 0 0 1 0-1.7'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M4.21 7.7a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.69'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12 7.7a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.69'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M19.79 7.7a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.69'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
