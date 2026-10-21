import type { Icon } from './types'

export const IconOwl: Icon = ({
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
      data-slot='icon-ui-owl'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.07 7.98C4 7.54 6.3 6.77 8.06 7.2c1.77.44 3.4 2.73 4 3.82.57-1.27 2.34-3.82 4.76-3.82s3.74.4 4.1.61a10.6 10.6 0 0 0-8.87-4.63c-3.83 0-7.17 1.93-8.98 4.8'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M7.68 12.44a.8.8 0 1 1-1.58 0 .8.8 0 0 1 1.58 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.9 12.44a.8.8 0 1 1-1.58 0 .8.8 0 0 1 1.58 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12 14.32v-2.3a5.11 5.11 0 0 0-10.22 0v2.03C1.78 18.87 7.28 21 12 21'
        stroke='currentColor'
      />
      <path
        d='M12 14.32v-2.3a5.11 5.11 0 0 1 10.22 0v2.03c0 4.82-5.5 6.96-10.22 6.96'
        stroke='currentColor'
      />
      <path d='M1.79 12.04C1.79 5.35 7.39 3 12 3s10.22 3.22 10.22 9.05' stroke='currentColor' />
    </svg>
  )
}
