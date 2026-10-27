import type { Icon } from './types'

export const IconTextKerning: Icon = ({
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
      data-slot='icon-ui-text-kerning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m3.9 12.23 1.48-5.18c.79-2.74 1.18-4.11 1.94-4.11.75 0 1.14 1.37 1.91 4.12l1.46 5.17'
        stroke='currentColor'
      />
      <path d='M9.45 8.21h-4.3' stroke='currentColor' />
      <path d='M15.21 2.88h1.95a2.19 2.19 0 0 1 0 4.37h-1.14' stroke='currentColor' />
      <path d='M16.02 7.25h1.52a2.55 2.55 0 0 1 0 5.1h-2.2' stroke='currentColor' />
      <path
        d='M15.36 12.35c-.95 0-1.72-.77-1.72-1.73V4.61c0-.95.77-1.73 1.72-1.73'
        stroke='currentColor'
      />
      <path
        d='m5.87 21-1.22-1.22c-.67-.67-1-1-1-1.41 0-.42.33-.75 1-1.42l1.22-1.22'
        stroke='currentColor'
      />
      <path
        d='m18.13 21 1.22-1.22c.67-.67 1-1 1-1.41 0-.42-.33-.75-1-1.42l-1.22-1.22'
        stroke='currentColor'
      />
      <path d='M4.02 18.36h15.94' stroke='currentColor' />
    </svg>
  )
}
