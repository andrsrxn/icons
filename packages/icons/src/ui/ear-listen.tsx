import type { Icon } from './types'

export const IconEarListen: Icon = ({
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
      data-slot='icon-ui-ear-listen'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.84 5.5 1.67 8.37v6.9l2.16 2.16a2 2 0 0 1 .52.9l.45 1.72a2 2 0 0 0 1.18 1.35l1.19.48a2 2 0 0 0 1.6-.05l1.37-.64a2 2 0 0 0 1.1-1.42l.74-3.63a2 2 0 0 1 .24-.62l2.35-4a2 2 0 0 0 .23-1.43l-.7-3.37a2 2 0 0 0-1.06-1.37l-2.96-1.5a2 2 0 0 0-1.45-.15L4.9 4.76a2 2 0 0 0-1.06.73'
        fill='currentColor'
      />
      <path
        d='M1.89 8.41c1.34-3.3 4.19-4.83 6.71-4.83 3.22 0 5.6 1.55 6.16 4.82.77 4.6-2.55 5.26-2.95 7.91-.39 2.54-.12 3.15-.7 4.24-.9 1.69-2.99 1.9-4.59 1.31-1.67-.6-1.53-2.06-2.04-3.6a4.1 4.1 0 0 0-2.6-2.62'
        stroke='currentColor'
      />
      <path
        d='M4.07 12.62c.88.47 1.86.1 2.23-.93s-.41-1.8-1.37-2.08c.09-1.62 2.1-3.03 3.71-3.03 1.75 0 2.69 1.1 2.8 2.54.2 2.68-1.3 3.4-2.52 5.34 0 0-.66.96-.39 2.33'
        stroke='currentColor'
      />
      <path d='M17.78 10.36s.85-1.3.54-3.27c-.28-1.76-1.5-2.82-1.5-2.82' stroke='currentColor' />
      <path d='M21 11.51s1.4-2.01.89-5.2c-.43-2.7-2.39-4.26-2.39-4.26' stroke='currentColor' />
    </svg>
  )
}
