import type { Icon } from './types'

export const IconScan: Icon = ({
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
      data-slot='icon-ui-scan'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M15.91 21.27h1.39c1.89 0 2.83 0 3.42-.58s.58-1.53.58-3.42v-1.39'
        stroke='currentColor'
      />
      <path
        d='M15.95 2.76h1.35c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v1.36'
        stroke='currentColor'
      />
      <path
        d='M8.1 21.27H6.7c-1.89 0-2.83 0-3.42-.58s-.58-1.53-.58-3.42v-1.39'
        stroke='currentColor'
      />
      <path
        d='M8.1 2.76H6.7c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v1.4'
        stroke='currentColor'
      />
      <path d='M6.8 12h10.4' stroke='currentColor' />
    </svg>
  )
}
