import type { Icon } from './types'

export const IconGlobeOff: Icon = ({
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
      data-slot='icon-ui-globe-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.23' fill='currentColor' />
      <path d='M19.21 19.25A10.23 10.23 0 0 1 4.74 4.78' stroke='currentColor' />
      <path
        d='M8.01 8.02A22 22 0 0 0 7.66 12c0 5.65 1.94 10.23 4.34 10.23 1.8 0 3.34-2.54 4-6.23'
        stroke='currentColor'
      />
      <path
        d='m16.33 12.74.01-.74c0-5.65-1.94-10.23-4.34-10.23-1.22 0-2.32 1.19-3.11 3.1'
        stroke='currentColor'
      />
      <path d='M16 12h6.23' stroke='currentColor' />
      <path d='M1.77 12H12' stroke='currentColor' />
      <path d='M2.71 2.71 21.3 21.3' stroke='currentColor' />
      <path d='M6.96 3.1A10.23 10.23 0 0 1 20.9 17.05' stroke='currentColor' />
    </svg>
  )
}
