import type { Icon } from './types'

export const IconDrop: Icon = ({
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
      data-slot='icon-ui-drop'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12 21.4c4.08 0 7.4-3.12 7.4-6.96C19.4 7.52 12 2.39 12 2.39S4.6 7.44 4.6 14.44c0 3.84 3.32 6.95 7.4 6.95'
        fill='currentColor'
      />
      <path
        d='M12 21.4c4.08 0 7.4-3.12 7.4-6.96C19.4 6.48 12 2.39 12 2.39S4.6 6.3 4.6 14.44c0 3.84 3.32 6.95 7.4 6.95'
        stroke='currentColor'
      />
      <path d='M16.02 14.21a4 4 0 0 1-1.05 2.28 4.5 4.5 0 0 1-2.3 1.47' stroke='currentColor' />
    </svg>
  )
}
