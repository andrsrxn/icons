import type { Icon } from './types'

export const IconTextWholeWord: Icon = ({
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
      data-slot='icon-ui-text-whole-word'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M22.42 14.37v.3c0 1.9 0 2.83-.58 3.42-.59.59-1.53.59-3.42.59H5.58c-1.89 0-2.83 0-3.42-.59s-.58-1.53-.58-3.41v-.31'
        stroke='currentColor'
      />
      <path
        d='m4.7 15.13 1.68-5.7h0c.83-2.8 1.24-4.21 2.01-4.2s1.15 1.42 1.9 4.25l1.5 5.65'
        stroke='currentColor'
      />
      <path d='M6.03 11.33h4.57' stroke='currentColor' />
      <path
        d='M14.44 10.65q0 0 0 0m0 0s1.02-1.2 2.51-1.2 2.68 1.26 2.68 2.88-1.19 2.8-2.68 2.8c-.73 0-1.7 0-2-.22a1 1 0 0 1-.3-.29c-.21-.3-.21-.74-.21-1.6zm0 0V4.82'
        stroke='currentColor'
      />
    </svg>
  )
}
