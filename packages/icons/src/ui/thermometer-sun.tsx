import type { Icon } from './types'

export const IconThermometerSun: Icon = ({
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
      data-slot='icon-ui-thermometer-sun'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M14.75 14.7a4.06 4.06 0 1 0 4.37 0' stroke='currentColor' />
      <path
        d='M19.06 14.6V3.73a2 2 0 0 0-1.91-1.91h-.41a2 2 0 0 0-1.91 1.9v10.9'
        stroke='currentColor'
      />
      <path
        d='M17.44 18.04a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='m6.77 18.94 1.16-1.6' stroke='currentColor' />
      <path d='m5.27 12.97-1.95.3' stroke='currentColor' />
      <path d='M6.47 8 4.9 6.83' stroke='currentColor' />
      <path d='m10.57 5.37-.3-1.94' stroke='currentColor' />
      <path d='M14.82 10.2a3.42 3.42 0 1 0-.26 4.15' stroke='currentColor' />
      <path
        opacity='.2'
        d='M12 8.58c1.95 0 2.95 1.58 2.95 3.53s-1 3.52-2.95 3.52a3.53 3.53 0 0 1 0-7.05'
        fill='currentColor'
      />
    </svg>
  )
}
