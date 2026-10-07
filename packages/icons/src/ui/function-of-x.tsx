import type { Icon } from './types'

export const IconFunctionOfX: Icon = ({
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
      data-slot='icon-ui-function-of-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M1.86 16.8c-.15 1.04.11 2.1 1.12 2.43 1.33.44 2.33-.98 2.78-2.42 1.5-4.73 1.87-5.65 2.95-10.08.27-1.1.85-1.92 1.88-2.03s2.1.8 1.84 2.03'
        stroke='currentColor'
      />
      <path d='M4.58 11.35h5.81' stroke='currentColor' />
      <path
        d='M14.1 19.31a6.4 6.4 0 0 1-1.34-4.22c0-1.75.35-2.86 1.35-4.23'
        stroke='currentColor'
      />
      <path
        d='M20.94 19.33a6.4 6.4 0 0 0 1.35-4.22c0-1.75-.35-2.86-1.35-4.23'
        stroke='currentColor'
      />
      <path
        d='M15.74 16.82c.91-.15 1.47-.86 1.86-1.73.37-.82.82-1.52 1.72-1.74'
        stroke='currentColor'
      />
      <path d='M19.33 16.82h-.63l-2.42-3.43h-.56' stroke='currentColor' />
    </svg>
  )
}
