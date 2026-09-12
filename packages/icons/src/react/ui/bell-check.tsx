import type { Icon } from './types'

export const IconBellCheck: Icon = ({
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
      data-slot='icon-ui-bell-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.5 14.77c.14.17.22.25.28.34a2 2 0 0 1 .33.9l.01.45c0 .58 0 .86-.06 1.1a2 2 0 0 1-1.46 1.46c-.24.06-.52.06-1.1.06H4.48c-.56 0-.84 0-1.07-.06a2 2 0 0 1-1.47-1.47c-.06-.23-.06-.51-.06-1.07l.01-.45a2 2 0 0 1 .35-.93l.28-.34 1.34-1.52V9.9c0-4.5 3.64-8.14 8.14-8.14a8.2 8.2 0 0 1 8.2 8.2v3.27z'
        fill='currentColor'
      />
      <path
        d='M21.5 14.77c.14.17.22.25.28.34a2 2 0 0 1 .33.9l.01.45c0 .58 0 .86-.06 1.1a2 2 0 0 1-1.46 1.46c-.24.06-.52.06-1.1.06H4.48c-.56 0-.84 0-1.07-.06a2 2 0 0 1-1.47-1.47c-.06-.23-.06-.51-.06-1.07l.01-.45a2 2 0 0 1 .35-.93l.28-.34 1.34-1.52V9.9c0-4.5 3.64-8.14 8.14-8.14a8.2 8.2 0 0 1 8.2 8.2v3.27z'
        stroke='currentColor'
      />
      <path d='M7.66 19.08c0 1.74 1.94 3.15 4.34 3.15s4.34-1.4 4.34-3.15' stroke='currentColor' />
      <path
        d='m8.84 11.85.45.55c.72.88 1.08 1.32 1.56 1.32.47 0 .83-.44 1.55-1.33l2.68-3.31'
        stroke='currentColor'
      />
    </svg>
  )
}
