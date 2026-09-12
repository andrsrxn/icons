import type { Icon } from './types'

export const IconPlay: Icon = ({
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
      data-slot='icon-ui-play'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.24 10.83c0-4.74 0-7.11 1.53-7.97s3.55.38 7.6 2.85l1.91 1.17c3.75 2.3 5.62 3.44 5.62 5.12s-1.87 2.83-5.62 5.12l-1.91 1.17C9.32 20.76 7.3 22 5.77 21.14s-1.53-3.23-1.53-7.97z'
        fill='currentColor'
      />
      <path
        d='M4.24 10.83c0-4.74 0-7.11 1.53-7.97s3.55.38 7.6 2.85l1.91 1.17c3.75 2.3 5.62 3.44 5.62 5.12s-1.87 2.83-5.62 5.12l-1.91 1.17C9.32 20.76 7.3 22 5.77 21.14s-1.53-3.23-1.53-7.97z'
        stroke='currentColor'
      />
    </svg>
  )
}
