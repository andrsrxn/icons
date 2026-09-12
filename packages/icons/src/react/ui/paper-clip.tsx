import type { Icon } from './types'

export const IconPaperClip: Icon = ({
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
      data-slot='icon-ui-paper-clip'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m16.08 6.65-8.4 8.4a1.77 1.77 0 1 0 2.5 2.5l9.8-9.78a3.54 3.54 0 0 0-5.02-5.01l-10.4 10.4a5.32 5.32 0 1 0 7.51 7.52l5.62-5.62'
        stroke='currentColor'
      />
    </svg>
  )
}
