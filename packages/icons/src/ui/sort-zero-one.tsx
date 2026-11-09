import type { Icon } from './types'

export const IconSortZeroOne: Icon = ({
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
      data-slot='icon-ui-sort-zero-one'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m11.74 6.45-.99-.99c-1.33-1.33-2-2-2.83-2s-1.5.67-2.83 2h0l-.99 1'
        stroke='currentColor'
      />
      <path d='M7.92 20.52V3.6' stroke='currentColor' />
      <path
        d='m15.99 4.35.79-.5c.68-.44 1.02-.65 1.28-.51s.26.54.26 1.35v5.66'
        stroke='currentColor'
      />
      <path
        d='M19.97 16.98c0 1.95-.51 3.53-2.27 3.53-1.77 0-2.28-1.58-2.28-3.53s.6-3.53 2.28-3.53 2.27 1.58 2.27 3.53'
        stroke='currentColor'
      />
    </svg>
  )
}
