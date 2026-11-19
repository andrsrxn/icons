import type { Icon } from './types'

export const IconTextCaseSensitive: Icon = ({
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
      data-slot='icon-ui-text-case-sensitive'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m2.37 19 2.28-7.75h0c1.12-3.82 1.68-5.72 2.72-5.71s1.56 1.93 2.58 5.78L12 19'
        stroke='currentColor'
      />
      <path d='M4.17 13.83h6.21' stroke='currentColor' />
      <path
        d='M14.68 13.02q0 0 0 0m0 0s1.36-1.59 3.34-1.59c2 0 3.58 1.66 3.58 3.83S20 19 18.02 19c-.97 0-2.26-.01-2.67-.3q-.22-.15-.39-.38c-.28-.41-.28-1-.28-2.15zm0 0V5.24'
        stroke='currentColor'
      />
    </svg>
  )
}
