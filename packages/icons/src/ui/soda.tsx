import type { Icon } from './types'

export const IconSoda: Icon = ({
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
      data-slot='icon-ui-soda'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m5.77 8.7 1.06 9.18c.21 1.83.32 2.74.8 3.4a3 3 0 0 0 .89.78c.7.41 1.62.41 3.46.41 1.85 0 2.77 0 3.47-.41a3 3 0 0 0 .88-.79c.5-.65.6-1.57.8-3.4l1.05-9.18z'
        fill='currentColor'
      />
      <path
        d='m5.9 8.69.97 9.15c.2 1.84.3 2.76.78 3.42a3 3 0 0 0 .89.8c.7.41 1.63.41 3.48.41 1.86 0 2.79 0 3.5-.42a3 3 0 0 0 .88-.8c.5-.66.58-1.59.77-3.43l.93-9.13'
        stroke='currentColor'
      />
      <path
        d='M18.1 8.69c-.4-1.48-.6-2.21-1.06-2.74a3 3 0 0 0-.94-.7c-.62-.31-1.39-.31-2.92-.31h-2.35c-1.54 0-2.31 0-2.94.3a3 3 0 0 0-.91.7C6.5 6.46 6.3 7.21 5.9 8.7'
        stroke='currentColor'
      />
      <path d='M20.15 8.69H3.85' stroke='currentColor' />
      <path
        d='M16.73 1.7h-.65c-1.26 0-1.89 0-2.38.32-.5.32-.75.89-1.27 2.04l-.39.87'
        stroke='currentColor'
      />
    </svg>
  )
}
