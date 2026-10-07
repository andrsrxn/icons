import type { Icon } from './types'

export const IconEarRings: Icon = ({
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
      data-slot='icon-ui-ear-rings'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M7.77 9.98c0-1.7 2-2.55 2-4.12 0-.98-.88-1.77-1.96-1.77-1.1 0-1.97.8-1.97 1.77'
        stroke='currentColor'
      />
      <path
        d='M16.16 7.61c0-1.7 2-2.55 2-4.12 0-.98-.88-1.77-1.97-1.77s-1.96.8-1.96 1.77'
        stroke='currentColor'
      />
      <rect
        opacity='.2'
        width='4.14'
        height='2.99'
        rx='1'
        transform='matrix(0 -1 -1 0 9.3 14.13)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.15'
        height='3'
        rx='1'
        transform='matrix(0 -1 -1 0 17.7 11.77)'
        fill='currentColor'
      />
      <path
        d='M9.3 12.15a5.17 5.17 0 1 1-6.66 4.96 5.1 5.1 0 0 1 3.66-4.96'
        stroke='currentColor'
      />
      <path d='M17.7 9.8a5.17 5.17 0 0 1-1.5 10.1 5 5 0 0 1-3.33-1.16' stroke='currentColor' />
      <path d='M14.61 9.78a5.1 5.1 0 0 0-3.34 3.4' stroke='currentColor' />
      <rect
        width='4.14'
        height='2.99'
        rx='1'
        transform='matrix(0 -1 -1 0 9.3 14.13)'
        stroke='currentColor'
      />
      <rect
        width='4.15'
        height='3'
        rx='1'
        transform='matrix(0 -1 -1 0 17.7 11.77)'
        stroke='currentColor'
      />
    </svg>
  )
}
