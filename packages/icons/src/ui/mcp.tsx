import type { Icon } from './types'

export const IconMcp: Icon = ({
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
      data-slot='icon-ui-mcp'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='m2.58 11.31 8.64-8.63a3.23 3.23 0 1 1 4.56 4.56l-6.29 6.29' stroke='currentColor' />
      <path
        d='m9.51 13.5 6.27-6.26a3.23 3.23 0 1 1 4.56 4.56l-3.18 3.18-3.47 3.47c-.53.53-.8.8-.94 1.08a2 2 0 0 0 0 1.81c.14.29.4.55.94 1.08'
        stroke='currentColor'
      />
      <path d='m18.17 9.41-6.46 6.47a3.23 3.23 0 1 1-4.57-4.57l6.47-6.46' stroke='currentColor' />
      <path
        opacity='.2'
        d='M12.23 20.76 2.7 11.2l8.42-8.47A3.16 3.16 0 0 1 15.7 7.1a3.18 3.18 0 0 1 4.3 4.7l-4.28 4.28z'
        fill='currentColor'
      />
    </svg>
  )
}
