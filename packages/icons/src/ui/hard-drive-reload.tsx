import type { Icon } from './types'

export const IconHardDriveReload: Icon = ({
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
      data-slot='icon-ui-hard-drive-reload'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.34 20.25c.94 0 1.42 0 1.8-.11a3 3 0 0 0 2.1-2.1c.11-.4.11-.86.11-1.81s0-1.42-.1-1.81a3 3 0 0 0-2.1-2.1c-.4-.11-.87-.11-1.81-.11H5.66c-.94 0-1.42 0-1.8.1a3 3 0 0 0-2.1 2.11c-.11.39-.11.86-.11 1.8 0 .96 0 1.43.1 1.82a3 3 0 0 0 2.1 2.1c.4.1.87.1 1.81.1z'
        fill='currentColor'
      />
      <path
        d='M5.64 12.21c-.93 0-1.39 0-1.77.1a3 3 0 0 0-2.12 2.13c-.1.38-.1.84-.1 1.78s0 1.43.1 1.82a3 3 0 0 0 2.1 2.1c.4.1.87.1 1.81.1h12.68c.94 0 1.42 0 1.8-.1a3 3 0 0 0 2.1-2.1c.11-.4.11-.87.11-1.82 0-.94 0-1.4-.1-1.78a3 3 0 0 0-2.12-2.13c-.38-.1-.84-.1-1.77-.1'
        stroke='currentColor'
      />
      <path
        d='M5.79 15.67a.57.57 0 1 1 0 1.14.57.57 0 0 1 0-1.14'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.52 15.67a.57.57 0 1 1 0 1.14.57.57 0 0 1 0-1.14'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M15.84 6.27c-1.36-1.78-2.7-2.12-3.78-2.12a3.96 3.96 0 1 0 2.78 6.78'
        stroke='currentColor'
      />
      <path
        d='M16.36 3.75v.04c0 1.42 0 2.12-.44 2.56-.43.44-1.14.44-2.56.44h-.04'
        stroke='currentColor'
      />
    </svg>
  )
}
