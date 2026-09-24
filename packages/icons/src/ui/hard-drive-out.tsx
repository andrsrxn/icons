import type { Icon } from './types'

export const IconHardDriveOut: Icon = ({
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
      data-slot='icon-ui-hard-drive-out'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.34 21c.94 0 1.42 0 1.8-.1a3 3 0 0 0 2.1-2.11c.11-.39.11-.86.11-1.8s0-1.43-.1-1.82a3 3 0 0 0-2.1-2.1c-.4-.1-.87-.1-1.81-.1H5.66c-.94 0-1.42 0-1.8.1a3 3 0 0 0-2.1 2.1c-.11.4-.11.87-.11 1.81s0 1.42.1 1.81a3 3 0 0 0 2.1 2.1c.4.11.87.11 1.81.11z'
        fill='currentColor'
      />
      <path
        d='M18.34 21c.94 0 1.42 0 1.8-.1a3 3 0 0 0 2.1-2.11c.11-.39.11-.86.11-1.8s0-1.43-.1-1.82a3 3 0 0 0-2.1-2.1c-.4-.1-.87-.1-1.81-.1H5.66c-.94 0-1.42 0-1.8.1a3 3 0 0 0-2.1 2.1c-.11.4-.11.87-.11 1.81s0 1.42.1 1.81a3 3 0 0 0 2.1 2.1c.4.11.87.11 1.81.11z'
        stroke='currentColor'
      />
      <path
        d='M5.79 16.42a.57.57 0 1 1 0 1.15.57.57 0 0 1 0-1.15'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.52 16.42a.57.57 0 1 1 0 1.15.57.57 0 0 1 0-1.15'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M12 2.58v6.27' stroke='currentColor' />
      <path
        d='m8.63 6.81.54.54c1.33 1.34 2 2 2.83 2s1.5-.66 2.83-2l.54-.54'
        stroke='currentColor'
      />
    </svg>
  )
}
