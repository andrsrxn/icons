import type { Icon } from './types'

export const IconDoorOut: Icon = ({
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
      data-slot='icon-ui-door-out'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.11 9.57c0-2.7 0-4.05.63-5.04a4 4 0 0 1 1.22-1.22c.99-.63 2.34-.63 5.04-.63s4.05 0 5.04.63a4 4 0 0 1 1.22 1.22c.63.99.63 2.34.63 5.04v11.82H5.1z'
        fill='currentColor'
      />
      <path
        d='M5.11 21.12V9.57c0-2.7 0-4.05.63-5.04a4 4 0 0 1 1.22-1.22c.99-.63 2.34-.63 5.04-.63h3.04a3.85 3.85 0 0 1 3.85 3.85'
        stroke='currentColor'
      />
      <path d='M18.89 16.96v4.16' stroke='currentColor' />
      <path d='M21.18 21.39H2.82' stroke='currentColor' />
      <path
        d='m17.32 14.74.62-.62c1-1 1.5-1.5 1.5-2.12s-.5-1.12-1.5-2.12l-.62-.62'
        stroke='currentColor'
      />
      <path d='M13.3 12h5.73' stroke='currentColor' />
    </svg>
  )
}
