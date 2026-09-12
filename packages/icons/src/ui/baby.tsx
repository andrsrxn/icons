import type { Icon } from './types'

export const IconBaby: Icon = ({
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
      data-slot='icon-ui-baby'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.97 21.04c4.1 0 7.57-2.74 8.66-6.49 0 0 1.64-.27 1.64-2.54 0-2.17-1.66-2.58-1.66-2.58a9.02 9.02 0 0 0-17.27 0s-1.6.47-1.6 2.57c0 2.2 1.58 2.55 1.58 2.55a9 9 0 0 0 8.65 6.5'
        fill='currentColor'
      />
      <path d='M10.7 3.1S8.94 4.28 9.55 5.75c1 2.39 5 .82 5 .82' stroke='currentColor' />
      <path
        d='M11.97 21.04c4.1 0 7.57-2.74 8.66-6.49 0 0 1.65-.29 1.65-2.55 0-2.17-1.67-2.57-1.67-2.57a9.02 9.02 0 0 0-17.27 0s-1.6.44-1.6 2.55c0 2.2 1.58 2.57 1.58 2.57a9 9 0 0 0 8.65 6.5'
        stroke='currentColor'
      />
      <path
        d='M9.77 11.5a.53.53 0 1 1-1.06 0 .53.53 0 0 1 1.06 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M15.29 11.5a.53.53 0 1 1-1.06 0 .53.53 0 0 1 1.06 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M8.93 15.73s.94 1.2 3.07 1.2 3.07-1.2 3.07-1.2' stroke='currentColor' />
    </svg>
  )
}
