import type { Icon } from './types'

export const IconRoot: Icon = ({
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
      data-slot='icon-ui-root'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M1.56 11.98h1.75c.63 0 .94 0 1.19.16.24.16.37.44.63 1.01l1.36 3c.91 2 1.37 3 2.05 2.96.69-.04 1.02-1.1 1.68-3.19l3.12-9.88c.21-.67.32-1 .58-1.2s.61-.2 1.31-.2l7.21-.04'
        stroke='currentColor'
      />
      <path
        d='M15.95 17.89c1.6-.27 2.56-1.56 3.24-3.12.65-1.49 1.44-2.74 3-3.13'
        stroke='currentColor'
      />
      <path
        d='M15.93 11.71h.16c.58 0 .86 0 1.1.14.23.14.37.4.65.9l1.12 2 1.28 2.16c.28.48.42.72.65.85s.5.13 1.07.13h.25'
        stroke='currentColor'
      />
    </svg>
  )
}
