import type { Icon } from './types'

export const IconLineSegment: Icon = ({
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
      data-slot='icon-ui-line-segment'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M3.32 4.38h17.74' stroke='currentColor' />
      <path
        d='m2.63 19.62 2-6.8h0c1-3.36 1.49-5.03 2.4-5.02.92.01 1.37 1.7 2.27 5.07l1.8 6.75'
        stroke='currentColor'
      />
      <path d='M4.22 15.08h5.46' stroke='currentColor' />
      <path
        d='M15.94 7.8h1.86c1.5 0 2.73 1.22 2.73 2.73 0 1.5-.92 2.72-3.37 2.72h1.02a3.18 3.18 0 0 1 0 6.37H16.1m.04 0c-.88 0-1.32 0-1.64-.22a1 1 0 0 1-.3-.3c-.21-.31-.21-.75-.21-1.64v-7.5c0-.9 0-1.33.22-1.65q.12-.16.3-.3c.3-.21.75-.21 1.63-.21'
        stroke='currentColor'
      />
    </svg>
  )
}
