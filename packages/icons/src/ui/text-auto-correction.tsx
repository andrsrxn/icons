import type { Icon } from './types'

export const IconTextAutoCorrection: Icon = ({
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
      data-slot='icon-ui-text-auto-correction'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M16.06 4.68h1.33a2.34 2.34 0 0 1 0 4.68h-.6' stroke='currentColor' />
      <path
        d='M16.27 4.68c-.9 0-1.35 0-1.7.18a1.5 1.5 0 0 0-.58.59c-.19.34-.19.79-.19 1.7v5.2c0 .9 0 1.36.2 1.7q.2.38.58.58c.34.2.79.2 1.7.2'
        stroke='currentColor'
      />
      <path d='M16.93 9.36h1.2a2.73 2.73 0 0 1 0 5.47h-1.86' stroke='currentColor' />
      <path
        d='M3.18 14.83 5 8.57C5.78 5.86 6.17 4.5 6.93 4.5c.75 0 1.14 1.35 1.91 4.06l1.79 6.26'
        stroke='currentColor'
      />
      <path d='M9.25 11.02H4.57' stroke='currentColor' />
      <path
        d='M3.73 18.94a.52.52 0 1 1-1.03 0 .52.52 0 0 1 1.03 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.59 18.94a.52.52 0 1 1-1.03 0 .52.52 0 0 1 1.03 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M15.44 18.94a.52.52 0 1 1-1.03 0 .52.52 0 0 1 1.03 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M21.3 18.94a.52.52 0 1 1-1.03 0 .52.52 0 0 1 1.03 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
