import type { Icon } from './types'

export const IconExperiment: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-experiment'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m4.73 15.98 1.3-1.7a2 2 0 0 1 1.72-.79l1.48.1a2 2 0 0 1 .43.07l4.11 1.21a2 2 0 0 0 1.27-.04l1.02-.39a2 2 0 0 1 2.45.92l.93 1.7a2 2 0 0 1-.06 2.03l-.8 1.25a2 2 0 0 1-1.69.94H7.28a2 2 0 0 1-1.82-1.16l-.96-2.09a2 2 0 0 1 .23-2.05'
        fill='currentColor'
      />
      <path
        d='M8.98 3.15v4.93c0 .93 0 1.4-.14 1.83-.13.44-.4.82-.93 1.58l-3.03 4.38-.15.23a3 3 0 0 0-.46 1.46v.28c0 .42 0 .63.02.8a3 3 0 0 0 2.62 2.63c.18.02.4.02.82.02h8.55c.42 0 .63 0 .8-.02a3 3 0 0 0 2.63-2.62c.02-.18.02-.4.02-.81v-.28a3 3 0 0 0-.62-1.7l-3.04-4.36a6 6 0 0 1-.93-1.59C15 9.47 15 9.01 15 8.07V3.15'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.82 14.54a4.8 4.8 0 0 1 3.36-1.36c1.68 0 3.69 1.74 5.33 1.74s2.4-.94 2.71-1.45M6.75 2.78h10.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
