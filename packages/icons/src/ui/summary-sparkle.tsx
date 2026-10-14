import type { Icon } from './types'

export const IconSummarySparkle: Icon = ({
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
      data-slot='icon-ui-summary-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M6.61 14.38h8.85' stroke='currentColor' />
      <path d='M6.55 9.44h6.89' stroke='currentColor' />
      <path d='M6.38 4.54h4.44' stroke='currentColor' />
      <path
        d='M21.2 19.1H10.73c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V2.62'
        stroke='currentColor'
      />
      <path
        d='m19.2 22.27.31-.3c1.34-1.34 2-2 2-2.84s-.66-1.5-2-2.83l-.3-.31'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m19.47 4.5-1.08-2.05-1.1 2.04-2.09 1.16 2.1 1.07 1.09 2.39 1.08-2.39 2.27-1.18z'
        fill='currentColor'
      />
      <path d='M14.44 5.54c1.95 0 4.03-2.1 4.03-4.03' stroke='currentColor' />
      <path d='M22.5 5.54c-1.93 0-4.03-2.1-4.03-4.03' stroke='currentColor' />
      <path d='M14.44 5.54c1.93 0 4.03 2.13 4.03 4.04' stroke='currentColor' />
      <path d='M22.5 5.54c-1.9 0-4.03 2.1-4.03 4.04' stroke='currentColor' />
    </svg>
  )
}
