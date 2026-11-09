import type { Icon } from './types'

export const Icon8k: Icon = ({
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
      data-slot='icon-ui-8k'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path
        d='M7.65 12.1c1.24.79 2.5 1.54 2.5 2.8 0 1.27-1.27 2.19-2.56 2.11-1.2-.06-2.25-.89-2.25-2.07 0-1.87 2.25-2.82 2.25-2.82zm0 0c-1.22-.79-2.44-1.61-2.44-3.02 0-1.23 1.12-2.1 2.38-2.1s2.53.87 2.53 2.1c0 1.84-2.09 2.85-2.47 3.01'
        stroke='currentColor'
      />
      <path d='M13.87 7.06v9.88' stroke='currentColor' />
      <path
        d='m18.75 7.09-2.98 3.65c-.5.6-.74.9-.74 1.26s.24.66.74 1.27l2.98 3.66'
        stroke='currentColor'
      />
    </svg>
  )
}
