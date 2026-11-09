import type { Icon } from './types'

export const Icon4k: Icon = ({
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
      data-slot='icon-ui-4k'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path d='M14.02 7.06v9.88' stroke='currentColor' />
      <path
        d='m18.9 7.09-2.98 3.65c-.5.6-.74.9-.74 1.26s.24.66.74 1.27l2.98 3.66'
        stroke='currentColor'
      />
      <path
        d='M9.35 14.37v-5.2c0-1.4 0-2.1-.36-2.2s-.74.48-1.48 1.66h0l-2.67 4.2c-.43.69-.65 1.03-.5 1.29.14.25.54.25 1.34.25zm0 0v2.64m0-2.64h1.4'
        stroke='currentColor'
      />
    </svg>
  )
}
