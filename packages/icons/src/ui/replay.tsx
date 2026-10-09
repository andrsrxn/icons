import type { Icon } from './types'

export const IconReplay: Icon = ({
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
      data-slot='icon-ui-replay'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M8.53 12c0-2.23 0-3.34.54-3.92a2 2 0 0 1 1.05-.58c.77-.17 1.72.42 3.62 1.58 1.76 1.07 2.64 1.61 2.86 2.34a2 2 0 0 1 0 1.16c-.22.73-1.1 1.27-2.86 2.34-1.9 1.16-2.85 1.75-3.62 1.58a2 2 0 0 1-1.05-.58c-.54-.58-.54-1.7-.54-3.92'
        fill='currentColor'
      />
      <path
        d='M8.53 12c0-2.23 0-3.34.54-3.92a2 2 0 0 1 1.05-.58c.77-.17 1.72.42 3.62 1.58 1.76 1.07 2.64 1.61 2.86 2.34a2 2 0 0 1 0 1.16c-.22.73-1.1 1.27-2.86 2.34-1.9 1.16-2.85 1.75-3.62 1.58a2 2 0 0 1-1.05-.58c-.54-.58-.54-1.7-.54-3.92'
        stroke='currentColor'
      />
      <path d='M20.3 5.89a11 11 0 0 0-9.49-3.63 9.51 9.51 0 1 0 9.1 15.07' stroke='currentColor' />
      <path
        d='M17.14 6.97h1.1c1.42 0 2.13 0 2.57-.44s.44-1.14.44-2.56V2.86'
        stroke='currentColor'
      />
    </svg>
  )
}
