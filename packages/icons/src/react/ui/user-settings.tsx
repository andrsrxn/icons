import type { Icon } from './types'

export const IconUserSettings: Icon = ({
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
      data-slot='icon-ui-user-settings'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.55 21.84H1.77a8.4 8.4 0 0 1 8.3-8.46c2.9 0 5.44 1.5 6.93 3.8-1.15 2.46.67 3.35 1.55 4.66'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M15.4 7.92a5.33 5.33 0 1 1-10.65 0 5.33 5.33 0 0 1 10.66 0'
        fill='currentColor'
      />
      <circle
        cx='18.76'
        cy='18.59'
        r='2.44'
        transform='rotate(-60 18.76 18.6)'
        stroke='currentColor'
      />
      <path d='m15.5 20.47 1-.55' stroke='currentColor' />
      <path d='M18.77 14.84v.94' stroke='currentColor' />
      <path d='M18.72 22.37v-.94' stroke='currentColor' />
      <path d='m22.02 16.73-1.07.58' stroke='currentColor' />
      <path d='m20.89 19.83 1.13.64' stroke='currentColor' />
      <path d='m15.5 16.73 1 .58' stroke='currentColor' />
      <path
        d='M15.4 7.92a5.3 5.3 0 0 1-5.33 5.33 5.33 5.33 0 1 1 5.34-5.33'
        stroke='currentColor'
      />
      <path d='M1.78 21.68a8.3 8.3 0 0 1 12.32-7.26' stroke='currentColor' />
    </svg>
  )
}
