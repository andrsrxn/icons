import type { Icon } from './types'

export const IconTrolley: Icon = ({
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
      data-slot='icon-ui-trolley'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.46 8.97c0-2.17 0-3.26.54-4.03a3 3 0 0 1 .75-.75c.77-.54 1.86-.54 4.03-.54 2.18 0 3.26 0 4.04.54q.43.3.75.75c.53.77.53 1.86.53 4.03 0 2.18 0 3.26-.53 4.04a3 3 0 0 1-.75.75c-.78.53-1.86.53-4.04.53s-3.26 0-4.03-.53A3 3 0 0 1 9 13c-.54-.78-.54-1.86-.54-4.04'
        fill='currentColor'
      />
      <path
        d='m4.12 5.95.84 6.14c.33 2.47.5 3.7 1.35 4.45.85.74 2.1.74 4.6.74h10.25'
        stroke='currentColor'
      />
      <path d='M4.6 9.25 3.94 4.9a2.45 2.45 0 0 0-2.42-2.1' stroke='currentColor' />
      <circle cx='8.25' cy='19.11' r='1.83' stroke='currentColor' />
      <circle cx='17.27' cy='19.11' r='1.83' stroke='currentColor' />
      <path
        d='M13.78 14.3c2.18 0 3.26 0 4.04-.54a3 3 0 0 0 .75-.75c.53-.77.53-1.86.53-4.04v0c0-2.17 0-3.26-.53-4.03a3 3 0 0 0-.75-.75c-.78-.54-1.86-.54-4.04-.54v0c-2.17 0-3.26 0-4.03.54a3 3 0 0 0-.75.75c-.54.77-.54 1.86-.54 4.03v0c0 2.18 0 3.27.54 4.04q.3.43.75.75c.77.53 1.86.53 4.03.53'
        stroke='currentColor'
      />
      <path d='M13.78 3.65v4.18' stroke='currentColor' />
    </svg>
  )
}
