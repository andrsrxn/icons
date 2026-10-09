import type { Icon } from './types'

export const IconRefreshPlus: Icon = ({
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
      data-slot='icon-ui-refresh-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12.19 7.66v8.68' stroke='currentColor' />
      <path d='M7.84 12h8.68' stroke='currentColor' />
      <path
        d='M21.38 8.17c-2.02-3.67-4.98-5.93-9.2-5.93s-8.21 2.18-9.5 5.58'
        stroke='currentColor'
      />
      <path
        d='M3.05 15.62c1.68 3.19 4.88 6.12 9.1 6.12 4.2 0 8-2 9.54-5.75'
        stroke='currentColor'
      />
      <path
        d='m22.83 5.86-.08.51c-.22 1.4-.33 2.1-.83 2.46-.5.37-1.2.26-2.6.04l-.51-.08'
        stroke='currentColor'
      />
      <path
        d='m1.72 18.12.06-.61c.12-1.41.18-2.12.66-2.52s1.18-.33 2.6-.2l.6.05'
        stroke='currentColor'
      />
    </svg>
  )
}
