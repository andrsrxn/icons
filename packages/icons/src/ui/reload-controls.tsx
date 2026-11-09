import type { Icon } from './types'

export const IconReloadControls: Icon = ({
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
      data-slot='icon-ui-reload-controls'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M15.26 9.75h-3.53' stroke='currentColor' />
      <path d='M7.15 15.35H12' stroke='currentColor' />
      <path d='M8.47 9.75H7.15' stroke='currentColor' />
      <path d='M15.26 15.35h1.36' stroke='currentColor' />
      <circle cx='10.1' cy='9.75' r='1.63' stroke='currentColor' />
      <circle cx='13.63' cy='15.35' r='1.63' stroke='currentColor' />
      <path
        d='M21.25 5.3v1.22c0 1.14 0 1.7-.35 2.05-.35.36-.92.36-2.05.36h-1.22'
        stroke='currentColor'
      />
      <path
        d='M19.02 17.8a9.17 9.17 0 1 1-7.1-14.98c5.06 0 7.4 4.04 8.45 5.47'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M21.16 12c0 5.01-4.1 9.08-9.16 9.08A9.1 9.1 0 0 1 2.84 12c0-5.01 4.1-9.08 9.16-9.08A9.1 9.1 0 0 1 21.16 12m-5.9 3.35a1.63 1.63 0 1 1-3.26 0 1.63 1.63 0 0 1 3.26 0m-5.16-3.97a1.63 1.63 0 1 1 0-3.25 1.63 1.63 0 0 1 0 3.25'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
