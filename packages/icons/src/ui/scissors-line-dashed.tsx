import type { Icon } from './types'

export const IconScissorsLineDashed: Icon = ({
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
      data-slot='icon-ui-scissors-line-dashed'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.76 8.15a2.03 2.03 0 1 0 4.05 0 2.03 2.03 0 0 0-4.05 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M1.76 15.85a2.03 2.03 0 1 0 4.05 0 2.03 2.03 0 0 0-4.05 0'
        fill='currentColor'
      />
      <path d='M1.76 8.15a2 2 0 0 0 2.02 2.02 2.03 2.03 0 1 0-2.02-2.02' stroke='currentColor' />
      <path d='M1.76 15.85a2 2 0 0 0 2.02 2.03 2.03 2.03 0 1 0-2.02-2.03' stroke='currentColor' />
      <path d='m12.88 8.15-7.42 6.3' stroke='currentColor' />
      <path d='M16.65 12h-2.5' stroke='currentColor' />
      <path d='M22.36 12h-2.5' stroke='currentColor' />
      <path d='m5.46 9.43 7.42 6.3' stroke='currentColor' />
    </svg>
  )
}
