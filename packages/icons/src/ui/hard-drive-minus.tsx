import type { Icon } from './types'

export const IconHardDriveMinus: Icon = ({
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
      data-slot='icon-ui-hard-drive-minus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.62 20.81c.95 0 1.42 0 1.8-.1a3 3 0 0 0 2.11-2.1c.1-.4.1-.87.1-1.81s0-1.42-.1-1.81a3 3 0 0 0-2.1-2.1c-.39-.11-.86-.11-1.81-.11H5.95c-.95 0-1.42 0-1.81.1a3 3 0 0 0-2.1 2.1c-.11.4-.11.87-.11 1.82 0 .94 0 1.42.1 1.8a3 3 0 0 0 2.1 2.1c.4.11.87.11 1.82.11z'
        fill='currentColor'
      />
      <path
        d='M18.62 20.81H5.95c-.95 0-1.42 0-1.81-.1a3 3 0 0 1-2.1-2.1c-.11-.4-.11-.87-.11-1.81s0-1.42.1-1.81a3 3 0 0 1 2.1-2.1c.4-.11.87-.11 1.82-.11h12.67c.95 0 1.42 0 1.8.1a3 3 0 0 1 2.11 2.1c.1.4.1.87.1 1.82 0 .94 0 1.42-.1 1.8a3 3 0 0 1-2.1 2.1c-.39.11-.86.11-1.81.11'
        stroke='currentColor'
      />
      <path
        d='M6.07 16.24a.57.57 0 1 1 0 1.14.57.57 0 0 1 0-1.14'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.8 16.24a.57.57 0 1 1 0 1.14.57.57 0 0 1 0-1.14'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M9.11 6.8h6.34' stroke='currentColor' />
    </svg>
  )
}
