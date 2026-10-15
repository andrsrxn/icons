import type { Icon } from './types'

export const IconUserQuestion: Icon = ({
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
      data-slot='icon-ui-user-question'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.47 7.99a5.4 5.4 0 1 1-10.79 0 5.4 5.4 0 0 1 10.8 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M18.38 21.84H1.78a8.4 8.4 0 0 1 8.3-8.46c4.58 0 8.3 3.79 8.3 8.46'
        fill='currentColor'
      />
      <path d='M15.47 7.99a5.4 5.4 0 0 1-5.4 5.4 5.4 5.4 0 1 1 5.4-5.4' stroke='currentColor' />
      <path d='M1.78 21.68a8.3 8.3 0 0 1 8.3-8.3 10 10 0 0 1 4.08 1.11' stroke='currentColor' />
      <path
        d='M19.7 19.41c0-1.45 1.9-1.56 1.9-3.1 0-.98-.85-1.77-1.9-1.77-1.03 0-1.88.8-1.88 1.77'
        stroke='currentColor'
      />
      <path
        d='M20.11 22.16a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
