import type { Icon } from './types'

export const IconSummary: Icon = ({
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
      data-slot='icon-ui-summary'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M6.61 14.38h8.85' stroke='currentColor' />
      <path d='M6.55 9.44h12.9' stroke='currentColor' />
      <path d='M6.38 4.54h6.79' stroke='currentColor' />
      <path
        d='M21.2 19.1H10.73c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V2.62'
        stroke='currentColor'
      />
      <path
        d='m19.2 22.27.31-.3c1.34-1.34 2-2 2-2.84s-.66-1.5-2-2.83l-.3-.31'
        stroke='currentColor'
      />
    </svg>
  )
}
