import type { Icon } from './types'

export const IconTextCaseSnake: Icon = ({
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
      data-slot='icon-ui-text-case-snake'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m1.72 17.42 1.94-6.8C4.45 7.87 4.84 6.5 5.6 6.5s1.15 1.38 1.92 4.13l1.92 6.79'
        stroke='currentColor'
      />
      <path d='M8.02 12.48h-4.9' stroke='currentColor' />
      <path d='M14.87 17.42h-2.9' stroke='currentColor' />
      <path
        d='M19.3 17.3c-1.32 0-2.38-.96-2.38-2.14 0-1.56 1.06-2.14 2.37-2.14h2.37v2.14c0 1.18-1.06 2.14-2.37 2.14'
        stroke='currentColor'
      />
      <path
        d='M17.52 10.1c.6-.78 1.4-1.22 2.41-1.04 1.58.3 1.97 1.32 1.97 3.02v4.3c0 .78.32 1.04.32 1.04'
        stroke='currentColor'
      />
    </svg>
  )
}
