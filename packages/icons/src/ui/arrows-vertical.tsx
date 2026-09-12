import type { Icon } from './types'

export const IconArrowsVertical: Icon = ({
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
      data-slot='icon-ui-arrows-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12.09 2.74V21.1' stroke='currentColor' />
      <path
        d='m16.9 17.43-1.98 1.99c-1.33 1.33-2 2-2.83 2s-1.5-.67-2.83-2l-2-2'
        stroke='currentColor'
      />
      <path
        d='m16.9 6.57-1.98-1.99c-1.33-1.33-2-2-2.83-2s-1.5.67-2.83 2l-2 2'
        stroke='currentColor'
      />
    </svg>
  )
}
