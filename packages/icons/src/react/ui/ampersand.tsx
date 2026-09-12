import type { Icon } from './types'

export const IconAmpersand: Icon = ({
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
      data-slot='icon-ui-ampersand'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m18.32 20.01-7.98-8.51L7.9 9.04a3.48 3.48 0 0 1 4.9-4.92 3.46 3.46 0 0 1-.01 4.91l-.3.3'
        stroke='currentColor'
      />
      <path d='m18.17 12.97-4.82 6.43a3.9 3.9 0 1 1-5.86-5.08l5.34-5.35' stroke='currentColor' />
    </svg>
  )
}
