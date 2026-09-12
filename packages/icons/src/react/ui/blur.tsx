import type { Icon } from './types'

export const IconBlur: Icon = ({
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
      data-slot='icon-ui-blur'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12 22.2V1.62S4 7.09 4 14.67c0 4.15 3.58 7.52 8 7.52'
        fill='currentColor'
      />
      <path
        d='M12 22.2c4.42 0 8-3.38 8-7.53 0-7.49-8-13.04-8-13.04S4 7.09 4 14.67c0 4.15 3.58 7.52 8 7.52'
        stroke='currentColor'
      />
      <path d='M12 2.01v19.88' stroke='currentColor' />
      <path d='m12.12 7.32 3.94 3.94L20 15.2' stroke='currentColor' />
      <path d='m12.12 13.84 2.74 2.74 2.74 2.75' stroke='currentColor' />
    </svg>
  )
}
