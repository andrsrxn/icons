import type { Icon } from './types'

export const IconUserCheck: Icon = ({
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
      data-slot='icon-ui-user-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.4 7.92a5.33 5.33 0 1 1-10.65 0 5.33 5.33 0 0 1 10.66 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M18.38 21.84H1.78a8.4 8.4 0 0 1 8.3-8.46c4.58 0 8.3 3.79 8.3 8.46'
        fill='currentColor'
      />
      <path
        d='m14.72 19.28.88 1.08c.72.88 1.08 1.32 1.56 1.32.47 0 .83-.45 1.55-1.33l3.58-4.43'
        stroke='currentColor'
      />
      <path
        d='M15.4 7.92a5.3 5.3 0 0 1-5.33 5.33 5.33 5.33 0 1 1 5.34-5.33'
        stroke='currentColor'
      />
      <path d='M1.78 21.68a8.3 8.3 0 0 1 12.32-7.26' stroke='currentColor' />
    </svg>
  )
}
