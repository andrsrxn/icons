import type { Icon } from './types'

export const IconSquareBrackets: Icon = ({
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
      data-slot='icon-ui-square-brackets'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M8.11 21.29c-1.2 0-1.8 0-2.3-.18A3 3 0 0 1 4 19.28c-.18-.48-.18-1.08-.18-2.3V7.02c0-1.2 0-1.8.18-2.3A3 3 0 0 1 5.82 2.9c.48-.18 1.08-.18 2.3-.18'
        stroke='currentColor'
      />
      <path
        d='M15.89 21.29c1.2 0 1.8 0 2.3-.18A3 3 0 0 0 20 19.28c.18-.48.18-1.08.18-2.3V7.02c0-1.2 0-1.8-.18-2.3a3 3 0 0 0-1.83-1.82c-.48-.18-1.08-.18-2.3-.18'
        stroke='currentColor'
      />
    </svg>
  )
}
