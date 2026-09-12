import type { Icon } from './types'

export const IconRegistered: Icon = ({
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
      data-slot='icon-ui-registered'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.78 12a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0'
        fill='currentColor'
      />
      <path d='M1.78 12A10.2 10.2 0 0 0 12 22.22 10.22 10.22 0 1 0 1.78 12' stroke='currentColor' />
      <path d='m12.26 12.83 2.72 4.7' stroke='currentColor' />
      <path d='M9.39 6.58v10.95' stroke='currentColor' />
      <path
        d='M9.43 6.58h3.63c1.52 0 2.75 1.35 2.75 3.01 0 1.67-1.23 3.02-2.75 3.02H9.43'
        stroke='currentColor'
      />
    </svg>
  )
}
