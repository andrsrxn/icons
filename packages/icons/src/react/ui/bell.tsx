import type { Icon } from './types'

export const IconBell: Icon = ({
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
      data-slot='icon-ui-bell'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m21.5 14.81.28.35a2 2 0 0 1 .33.9l.01.45c0 .57 0 .86-.06 1.1a2 2 0 0 1-1.46 1.46c-.24.06-.52.06-1.1.06H4.48c-.56 0-.84 0-1.07-.06a2 2 0 0 1-1.47-1.47c-.06-.24-.06-.52-.06-1.08l.01-.44a2 2 0 0 1 .35-.93c.06-.09.14-.17.28-.34l1.34-1.52V9.95c0-4.5 3.64-8.14 8.14-8.14a8.2 8.2 0 0 1 8.2 8.2v3.28z'
        fill='currentColor'
      />
      <path
        d='m21.5 14.81.28.35a2 2 0 0 1 .33.9l.01.45c0 .57 0 .86-.06 1.1a2 2 0 0 1-1.46 1.46c-.24.06-.52.06-1.1.06H4.48c-.56 0-.84 0-1.07-.06a2 2 0 0 1-1.47-1.47c-.06-.24-.06-.52-.06-1.08l.01-.44a2 2 0 0 1 .35-.93c.06-.09.14-.17.28-.34l1.34-1.52V9.95c0-4.5 3.64-8.14 8.14-8.14a8.2 8.2 0 0 1 8.2 8.2v3.28z'
        stroke='currentColor'
      />
      <path d='M7.66 19.13c0 1.74 1.94 3.15 4.34 3.15s4.34-1.41 4.34-3.15' stroke='currentColor' />
    </svg>
  )
}
