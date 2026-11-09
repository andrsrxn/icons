import type { Icon } from './types'

export const IconTextUppercase: Icon = ({
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
      data-slot='icon-ui-text-uppercase'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m2.4 18.7 2.27-7.72h0C5.8 7.18 6.35 5.28 7.4 5.3c1.04.02 1.55 1.93 2.57 5.76L12 18.71'
        stroke='currentColor'
      />
      <path
        d='m12 18.7 2.27-7.72h0c1.12-3.8 1.68-5.7 2.72-5.69 1.04.02 1.55 1.93 2.57 5.76l2.04 7.66'
        stroke='currentColor'
      />
      <path d='M4.2 13.55h6.19' stroke='currentColor' />
      <path d='M13.8 13.55h6.19' stroke='currentColor' />
    </svg>
  )
}
