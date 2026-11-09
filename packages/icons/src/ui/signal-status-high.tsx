import type { Icon } from './types'

export const IconSignalStatusHigh: Icon = ({
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
      data-slot='icon-ui-signal-status-high'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.25 4.91c0-.58 0-.87-.08-1.1a1.5 1.5 0 0 0-.94-.94c-.24-.08-.53-.08-1.1-.08-.59 0-.88 0-1.11.08-.44.15-.8.5-.94.94-.08.23-.08.52-.08 1.1V19.1c0 .58 0 .87.08 1.1.15.44.5.8.94.94.23.08.52.08 1.1.08s.87 0 1.1-.08c.45-.15.8-.5.95-.94.08-.23.08-.52.08-1.1z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.12 10.42c0-.58 0-.86-.08-1.1a1.5 1.5 0 0 0-.94-.94c-.23-.08-.52-.08-1.1-.08s-.87 0-1.1.08c-.45.15-.8.5-.94.94-.08.24-.08.52-.08 1.1v8.67c0 .58 0 .87.08 1.1.15.44.5.8.94.94.23.08.52.08 1.1.08s.87 0 1.1-.08c.45-.15.8-.5.94-.94.08-.23.08-.52.08-1.1z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M7 15.48c0-.58 0-.87-.08-1.1a1.5 1.5 0 0 0-.94-.94c-.23-.08-.52-.08-1.1-.08s-.87 0-1.1.08c-.45.15-.8.5-.95.94-.08.23-.08.52-.08 1.1v3.6c0 .59 0 .88.08 1.11.15.44.5.8.94.94.24.08.53.08 1.1.08.59 0 .88 0 1.11-.08.44-.15.8-.5.94-.94.08-.23.08-.52.08-1.1z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M19.12 21.21c-.58 0-.87 0-1.1-.08a1.5 1.5 0 0 1-.94-.94c-.08-.23-.08-.52-.08-1.1V4.9c0-.58 0-.87.08-1.1.15-.44.5-.8.94-.94.23-.08.52-.08 1.1-.08v0c.58 0 .87 0 1.1.08.45.15.8.5.95.94.08.23.08.52.08 1.1v14.2c0 .58 0 .87-.08 1.1-.15.44-.5.8-.94.94-.24.08-.53.08-1.1.08'
        stroke='currentColor'
      />
      <path
        d='M12 21.21c-.58 0-.87 0-1.1-.08a1.5 1.5 0 0 1-.94-.94c-.08-.23-.08-.52-.08-1.1v-8.67c0-.58 0-.86.08-1.1.15-.44.5-.79.94-.94.23-.08.52-.08 1.1-.08v0c.58 0 .87 0 1.1.08.45.15.8.5.94.94.08.24.08.52.08 1.1v8.67c0 .58 0 .87-.08 1.1-.15.44-.5.8-.94.94-.23.08-.52.08-1.1.08'
        stroke='currentColor'
      />
      <path
        d='M4.88 21.21c-.58 0-.87 0-1.1-.08a1.5 1.5 0 0 1-.95-.94c-.08-.23-.08-.52-.08-1.1v-3.6c0-.59 0-.88.08-1.11.15-.44.5-.8.94-.94.24-.08.53-.08 1.1-.08v0c.59 0 .88 0 1.11.08.44.15.8.5.94.94.08.23.08.52.08 1.1v3.6c0 .59 0 .88-.08 1.11-.15.44-.5.8-.94.94-.23.08-.52.08-1.1.08'
        stroke='currentColor'
      />
    </svg>
  )
}
