import type { Icon } from './types'

export const IconInfinite: Icon = ({
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
      data-slot='icon-ui-infinite'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M12 12S8.84 7.42 5.79 7.42c-2.48 0-4.2 2-4.35 4.31-.15 2.46 1.78 4.89 4.43 4.89 4.5 0 7.66-9.16 12.3-9.16 2.6 0 4.4 2.12 4.4 4.54a4.5 4.5 0 0 1-4.47 4.58C14.9 16.58 12 12 12 12'
        stroke='currentColor'
      />
    </svg>
  )
}
