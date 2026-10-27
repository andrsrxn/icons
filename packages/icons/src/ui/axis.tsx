import type { Icon } from './types'

export const IconAxis: Icon = ({
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
      data-slot='icon-ui-axis'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m8.63 5.54 1.25-1.25c1-1 1.5-1.5 2.12-1.5s1.12.5 2.12 1.5l1.25 1.25'
        stroke='currentColor'
      />
      <path
        d='M8.34 20.58H6.58c-1.41 0-2.12 0-2.56-.44s-.44-1.15-.44-2.56V15.8'
        stroke='currentColor'
      />
      <path
        d='M15.66 20.58h1.76c1.41 0 2.12 0 2.56-.44s.44-1.15.44-2.56V15.8'
        stroke='currentColor'
      />
      <path
        d='M12 3.21v7.28c0 .82 0 1.23-.15 1.6s-.44.66-1.02 1.23h0L4.77 19.4'
        stroke='currentColor'
      />
      <path d='m12 12.15 7.23 7.24' stroke='currentColor' />
    </svg>
  )
}
