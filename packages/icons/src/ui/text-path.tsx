import type { Icon } from './types'

export const IconTextPath: Icon = ({
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
      data-slot='icon-ui-text-path'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12 2.7v12.38' stroke='currentColor' />
      <path d='M14.05 15.08h-4.1' stroke='currentColor' />
      <path
        d='M17.01 4.14c0-.8-.65-1.44-1.44-1.44H8.43C7.63 2.7 7 3.34 7 4.14'
        stroke='currentColor'
      />
      <path
        d='M20.23 21.6c-2.1-1.82-5-2.95-8.23-2.95a12.5 12.5 0 0 0-8.23 2.96'
        stroke='currentColor'
      />
    </svg>
  )
}
