import type { Icon } from './types'

export const IconMails: Icon = ({
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
      data-slot='icon-ui-mails'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M22.07 13.1V7.6c0-1.96 0-2.94-.6-3.2s-1.32.4-2.76 1.73l-2.3 2.14-.03.02a1 1 0 0 0 .17 1.58l.03.01v.01a1 1 0 0 1 .5.79v.01l.16 2.55c.06.89.08 1.33.37 1.6.3.27.73.27 1.62.27h.84c.94 0 1.42 0 1.7-.29.3-.3.3-.76.3-1.7'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M11.8 8.14c.08-.53-.57-1.13-1.86-2.32-1.16-1.07-1.74-1.6-2.24-1.5a1 1 0 0 0-.4.17c-.4.3-.4 1.09-.4 2.67 0 .76 0 1.14.19 1.4a1 1 0 0 0 .2.2c.27.2.65.2 1.4.21 1.76.01 2.64.02 2.94-.42a1 1 0 0 0 .16-.41'
        fill='currentColor'
      />
      <rect x='1.67' y='8.9' width='15.69' height='12.25' rx='3' stroke='currentColor' />
      <path
        d='M17.39 15.1c1.81 0 2.72 0 3.4-.38a3 3 0 0 0 1.16-1.16c.38-.68.38-1.58.38-3.4v-1.3c0-2.84 0-4.25-.88-5.13s-2.3-.88-5.12-.88h-3.84c-2.69 0-4.03 0-4.9.8l-.15.16c-.8.86-.8 2.2-.8 4.9'
        stroke='currentColor'
      />
      <path
        d='m2.89 9.74 2.23 2.47c2.08 2.3 3.12 3.45 4.45 3.45s2.37-1.14 4.45-3.44l2.24-2.48'
        stroke='currentColor'
      />
      <path
        d='m7.85 3.7 2.43 2.39c1.95 1.92 2.93 2.88 4.14 2.9 1.21 0 2.2-.94 4.2-2.82h0l2.6-2.47'
        stroke='currentColor'
      />
    </svg>
  )
}
