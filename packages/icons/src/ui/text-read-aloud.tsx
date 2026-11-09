import type { Icon } from './types'

export const IconTextReadAloud: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

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
      data-slot='icon-ui-text-read-aloud'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M15.9 13.66s.8-1.55.23-3.69c-.52-1.93-2-2.96-2-2.96' stroke='currentColor' />
      <path d='M19.62 14.57s1.3-2.4.38-5.88c-.8-2.95-3.15-4.46-3.15-4.46' stroke='currentColor' />
      <path
        d='m3.2 19 2.2-7.49h0C6.48 7.83 7.03 6 8.04 6c1 .01 1.5 1.87 2.49 5.58L12.5 19'
        stroke='currentColor'
      />
      <path d='M4.94 14h6' stroke='currentColor' />
    </svg>
  )
}
