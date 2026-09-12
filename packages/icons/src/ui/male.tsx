import type { Icon } from './types'

export const IconMale: Icon = ({
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
      data-slot='icon-ui-male'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='9.27' cy='14.73' r='6.67' fill='currentColor' />
      <circle cx='9.27' cy='14.73' r='6.67' stroke='currentColor' />
      <path d='m14.02 9.98 6.36-6.35' stroke='currentColor' />
      <path
        d='M21.33 9.78v-3.1c0-1.9 0-2.84-.58-3.42s-1.53-.59-3.41-.59h-3.12'
        stroke='currentColor'
      />
    </svg>
  )
}
