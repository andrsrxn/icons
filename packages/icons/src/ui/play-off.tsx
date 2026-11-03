import type { Icon } from './types'

export const IconPlayOff: Icon = ({
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
      data-slot='icon-ui-play-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M4.24 10.83c0-4.74 0-7.11 1.53-7.97s3.55.38 7.6 2.85l1.91 1.17c3.75 2.3 5.62 3.44 5.62 5.12s-1.87 2.83-5.62 5.12l-1.91 1.17C9.32 20.76 7.3 22 5.77 21.14s-1.53-3.23-1.53-7.97z'
        fill='currentColor'
      />
      <path
        d='M4.24 10.83c0-4.74 0-7.11 1.53-7.97s3.55.38 7.6 2.85l1.91 1.17c3.75 2.3 5.62 3.44 5.62 5.12s-1.87 2.83-5.62 5.12l-1.91 1.17C9.32 20.76 7.3 22 5.77 21.14s-1.53-3.23-1.53-7.97z'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
