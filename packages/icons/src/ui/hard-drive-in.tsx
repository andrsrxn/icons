import type { Icon } from './types'

export const IconHardDriveIn: Icon = ({
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
      data-slot='icon-ui-hard-drive-in'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.32 21c.96 0 1.44 0 1.84-.1a3 3 0 0 0 2.09-2.1c.1-.4.1-.87.1-1.83s0-1.44-.1-1.84a3 3 0 0 0-2.1-2.09c-.39-.1-.87-.1-1.83-.1H5.68c-.96 0-1.44 0-1.84.1a3 3 0 0 0-2.09 2.1c-.1.39-.1.87-.1 1.83s0 1.44.1 1.83a3 3 0 0 0 2.1 2.1c.39.1.87.1 1.83.1z'
        fill='currentColor'
      />
      <path
        d='M18.32 21c.96 0 1.44 0 1.84-.1a3 3 0 0 0 2.09-2.1c.1-.4.1-.87.1-1.83s0-1.44-.1-1.84a3 3 0 0 0-2.1-2.09c-.39-.1-.87-.1-1.83-.1H5.68c-.96 0-1.44 0-1.84.1a3 3 0 0 0-2.09 2.1c-.1.39-.1.87-.1 1.83s0 1.44.1 1.83a3 3 0 0 0 2.1 2.1c.39.1.87.1 1.83.1z'
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
      <path d='M12 9.4V3.15' stroke='currentColor' />
      <path d='m8.65 5.18.52-.52c1.33-1.34 2-2 2.83-2s1.5.66 2.83 2l.52.52' stroke='currentColor' />
    </svg>
  )
}
