import type { Icon } from './types'

export const IconRepost: Icon = ({
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
      data-slot='icon-ui-repost'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M3.95 5.44h10.6c1.45 0 2.17 0 2.76.19a4 4 0 0 1 2.6 2.6c.2.6.2 1.32.2 2.77'
        stroke='currentColor'
      />
      <path
        d='M20.1 18.56H9.52c-1.45 0-2.18 0-2.76-.19a4 4 0 0 1-2.61-2.6c-.19-.6-.19-1.32-.19-2.77'
        stroke='currentColor'
      />
      <path
        d='m6.01 1.65-.96.96c-1.34 1.33-2 2-2 2.83s.66 1.5 2 2.83l.96.96'
        stroke='currentColor'
      />
      <path
        d='m17.99 22.35.96-.96c1.34-1.33 2-2 2-2.83s-.66-1.5-2-2.83l-.96-.96'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M3.95 5.41v5.18c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h8.1V13.4c0-3.77 0-5.66-1.17-6.83S15.82 5.4 12.05 5.4z'
        fill='currentColor'
      />
    </svg>
  )
}
