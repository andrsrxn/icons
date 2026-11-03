import type { Icon } from './types'

export const IconWaves: Icon = ({
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
      data-slot='icon-ui-waves'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M3.45 6.58A7.8 7.8 0 0 1 8.5 4.84c2.52 0 5.54 2.22 7.99 2.22s3.59-1.2 4.07-1.85'
        stroke='currentColor'
      />
      <path
        d='M3.45 12.62A7.8 7.8 0 0 1 8.5 10.9c2.52 0 5.54 2.22 7.99 2.22s3.59-1.2 4.07-1.85'
        stroke='currentColor'
      />
      <path
        d='M3.45 18.67a7.8 7.8 0 0 1 5.04-1.73c2.52 0 5.54 2.22 7.99 2.22s3.59-1.2 4.07-1.86'
        stroke='currentColor'
      />
    </svg>
  )
}
