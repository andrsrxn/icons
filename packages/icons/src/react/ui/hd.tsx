import type { Icon } from './types'

export const IconHd: Icon = ({
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
      data-slot='icon-ui-hd'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M10.39 7.17v9.66' stroke='currentColor' />
      <path d='M3.87 7.17v9.66' stroke='currentColor' />
      <path d='M3.87 12h6.52' stroke='currentColor' />
      <path
        d='M13.84 8.79v6.42c0 .82 0 1.23.3 1.53.32.3.68.27 1.4.24 1.99-.11 5.04-.94 5.04-4.98s-3.05-4.87-5.05-4.98c-.71-.04-1.07-.05-1.38.24-.31.3-.31.7-.31 1.53'
        stroke='currentColor'
      />
      <path d='M21.54 20.55H2.46' stroke='currentColor' />
      <path d='M21.54 3.48H2.46' stroke='currentColor' />
    </svg>
  )
}
