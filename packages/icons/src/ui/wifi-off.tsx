import type { Icon } from './types'

export const IconWifiOff: Icon = ({
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
      data-slot='icon-ui-wifi-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M12.9 18.51a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M7.63 15.79c1.06-1.29 2.43-1.87 4.37-1.87.7 0 1.53.13 2.09.28'
        stroke='currentColor'
      />
      <path d='M4.77 12.6A8 8 0 0 1 9.6 9.71' stroke='currentColor' />
      <path d='M13.22 9.55a8.2 8.2 0 0 1 6.01 3.05' stroke='currentColor' />
      <path d='M2.22 9.5A11 11 0 0 1 6.2 6.4' stroke='currentColor' />
      <path d='M21.78 9.5C19.4 6.62 16.34 5.3 12 5.3q-1.2 0-2.3.14' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
