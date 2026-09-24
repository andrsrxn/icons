import type { Icon } from './types'

export const IconTextOutdent: Icon = ({
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
      data-slot='icon-ui-text-outdent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.74 17.85h18.52' stroke='currentColor' />
      <path d='M2.74 11.98h18.52' stroke='currentColor' />
      <path d='M10 6.1h11.26' stroke='currentColor' />
      <path
        d='m7.07 3.34-1.58.68c-1.81.79-2.71 1.18-2.72 1.84 0 .65.9 1.05 2.72 1.83l1.58.69'
        stroke='currentColor'
      />
    </svg>
  )
}
