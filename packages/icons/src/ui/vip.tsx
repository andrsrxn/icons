import type { Icon } from './types'

export const IconVip: Icon = ({
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
      data-slot='icon-ui-vip'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.29 12c0-3.33 0-5-.93-6.11a4 4 0 0 0-.5-.5c-1.12-.94-2.78-.94-6.12-.94H9.26c-3.33 0-5 0-6.11.94a4 4 0 0 0-.5.5C1.7 7 1.7 8.67 1.7 12s0 5 .93 6.11a4 4 0 0 0 .5.5c1.12.94 2.79.94 6.12.94h5.48c3.33 0 5 0 6.11-.94a4 4 0 0 0 .5-.5c.94-1.11.94-2.78.94-6.11'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M9.26 19.55h5.48c3.33 0 5 0 6.11-.94q.29-.23.5-.5c.94-1.11.94-2.78.94-6.11v0c0-3.33 0-5-.93-6.11a4 4 0 0 0-.5-.5c-1.12-.94-2.79-.94-6.12-.94H9.26c-3.33 0-5 0-6.11.94a4 4 0 0 0-.5.5C1.7 7 1.7 8.67 1.7 12v0c0 3.33 0 5 .93 6.11a4 4 0 0 0 .5.5c1.12.94 2.79.94 6.12.94'
        stroke='currentColor'
      />
      <path
        d='M15.36 15.3V9.81c0-.47 0-.7.15-.85s.38-.15.85-.15h1.34c.97 0 1.76.84 1.76 1.86 0 1.03-.79 1.86-1.76 1.86h-2.3'
        stroke='currentColor'
      />
      <path d='M12.3 15.3V8.87' stroke='currentColor' />
      <path d='m4.57 8.87 1.91 5.4c.24.67.36 1 .57 1s.33-.33.57-1l1.9-5.4' stroke='currentColor' />
    </svg>
  )
}
