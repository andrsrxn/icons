import type { Icon } from './types'

export const Icon4k: Icon = ({
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
      data-slot='icon-ui-4k'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M13.84 6.93v10.14' stroke='currentColor' />
      <path
        d='M9.3 17.22V8.77c0-1.29 0-1.94-.35-2.05s-.72.42-1.47 1.47l-2.76 3.9c-.49.7-.73 1.04-.59 1.3.14.28.56.28 1.41.28h5.52'
        stroke='currentColor'
      />
      <path d='m13.84 12.11 5.18-5.18' stroke='currentColor' />
      <path d='m13.84 12.11 5.18 4.96' stroke='currentColor' />
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
    </svg>
  )
}
