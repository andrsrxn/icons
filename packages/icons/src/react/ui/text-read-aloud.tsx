import type { Icon } from './types'

export const IconTextReadAloud: Icon = ({
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
      data-slot='icon-ui-text-read-aloud'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M15.9 13.66s.8-1.55.23-3.69c-.52-1.93-2-2.96-2-2.96' stroke='currentColor' />
      <path d='M19.62 14.57s1.3-2.4.38-5.88c-.8-2.95-3.15-4.46-3.15-4.46' stroke='currentColor' />
      <path
        d='m3.51 19 2.52-8.8C6.8 7.45 7.2 6.08 7.96 6.08c.75 0 1.14 1.38 1.92 4.12l2.47 8.8'
        stroke='currentColor'
      />
      <path d='M10.74 13.77H5.13' stroke='currentColor' />
    </svg>
  )
}
