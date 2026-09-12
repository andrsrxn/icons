import type { Icon } from './types'

export const IconRepeatOne: Icon = ({
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
      data-slot='icon-ui-repeat-one'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m10.09 10.96.96-.87c.72-.64 1.08-.96 1.37-.83s.3.61.3 1.58v4.2'
        stroke='currentColor'
      />
      <path
        d='M20.6 5.82H7.4c-1.6 0-2.4 0-3.02.3a3 3 0 0 0-1.4 1.4c-.3.62-.3 1.42-.3 3.02'
        stroke='currentColor'
      />
      <path
        d='M3.4 18.18h13.22c1.58 0 2.38 0 2.99-.3a3 3 0 0 0 1.41-1.41c.3-.62.3-1.4.3-3'
        stroke='currentColor'
      />
      <path
        d='m18.6 2.13.86.86c1.33 1.34 2 2 2 2.83s-.66 1.5-2 2.83l-.87.87'
        stroke='currentColor'
      />
      <path
        d='M5.42 21.89 4.54 21c-1.33-1.34-2-2-2-2.83s.66-1.5 2-2.83l.88-.89'
        stroke='currentColor'
      />
    </svg>
  )
}
