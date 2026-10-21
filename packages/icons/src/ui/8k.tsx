import type { Icon } from './types'

export const Icon8k: Icon = ({
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
      data-slot='icon-ui-8k'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M13.68 7.05v10.14' stroke='currentColor' />
      <path d='m13.68 12.23 5.18-5.18' stroke='currentColor' />
      <path d='m13.68 12.23 5.18 4.96' stroke='currentColor' />
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path
        d='M7.6 12s-2.46 1.56-2.46 3.05c0 1.22 1.08 2.07 2.32 2.14 1.32.07 2.63-.87 2.63-2.18 0-1.1-1.25-2.05-2.49-3.01m0 0c-1.22-.95-2.44-1.9-2.44-3.03C5.16 7.69 6.3 6.8 7.6 6.8s2.47.92 2.47 2.2c0 1.56-2.47 3-2.47 3'
        stroke='currentColor'
      />
    </svg>
  )
}
