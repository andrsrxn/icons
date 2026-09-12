import type { Icon } from './types'

export const IconBounceLeft: Icon = ({
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
      data-slot='icon-ui-bounce-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='3.18'
        cy='3.18'
        r='3.18'
        transform='matrix(-1 0 0 1 8.08 3.73)'
        fill='currentColor'
      />
      <path
        d='M22.28 14.6a6 6 0 0 0-3.42 2.28c-1.29 1.53-1.75 3.4-1.75 3.4s-.43-4.28-1.67-6.36a10 10 0 0 0-4.68-4.3'
        stroke='currentColor'
      />
      <circle
        cx='3.18'
        cy='3.18'
        r='3.18'
        transform='matrix(-1 0 0 1 8.08 3.73)'
        stroke='currentColor'
      />
    </svg>
  )
}
