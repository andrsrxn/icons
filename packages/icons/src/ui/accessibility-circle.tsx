import type { Icon } from './types'

export const IconAccessibilityCircle: Icon = ({
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
      data-slot='icon-ui-accessibility-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 22.31a10.31 10.31 0 1 1 0-20.62 10.31 10.31 0 0 1 0 20.62m0-13.27a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76'
        fill='currentColor'
      />
      <path
        d='m8.09 10.34 1.66.64c.93.36 1.4.54 1.72.88a2 2 0 0 1 .33.48c.2.42.2.92.2 1.92 0 .53 0 .8-.07 1.05l-.1.3c-.11.24-.28.45-.62.86L9.4 18.72'
        stroke='currentColor'
      />
      <path
        d='m15.91 10.34-1.66.64c-.93.36-1.4.54-1.72.88a2 2 0 0 0-.33.48c-.2.42-.2.92-.2 1.92 0 .53 0 .8.07 1.05l.1.3c.11.24.28.45.62.86l1.82 2.25'
        stroke='currentColor'
      />
      <circle cx='12' cy='7.16' r='1.88' transform='rotate(90 12 7.16)' stroke='currentColor' />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
    </svg>
  )
}
