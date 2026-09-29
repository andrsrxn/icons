import type { Icon } from './types'

export const IconSos: Icon = ({
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
      data-slot='icon-ui-sos'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M6.84 10.68c-.5-.4-1.35-.97-2.58-.97s-2.57.62-2.57 1.94c0 2.82 5.15.57 5.15 3.43 0 1.35-1.32 2.06-2.58 2.06S2.16 16.8 1.58 16'
        stroke='currentColor'
      />
      <path
        d='M22.42 10.68c-.49-.4-1.34-.97-2.57-.97s-2.58.62-2.58 1.94c0 2.82 5.15.57 5.15 3.43 0 1.35-1.32 2.06-2.57 2.06-1.26 0-2.1-.35-2.69-1.14'
        stroke='currentColor'
      />
      <path
        d='M14.76 13.54c0 .98-.3 1.87-.79 2.52-.5.67-1.2 1.09-1.97 1.09-1.52 0-2.76-1.62-2.76-3.61 0-2 1.24-3.61 2.76-3.61s2.76 1.61 2.76 3.6'
        stroke='currentColor'
      />
      <path d='m15.2 7.3.8-.66' stroke='currentColor' />
      <path d='M8.8 7.3 8 6.63' stroke='currentColor' />
      <path d='M11.99 6.36V5.27' stroke='currentColor' />
    </svg>
  )
}
