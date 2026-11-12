import type { Icon } from './types'

export const IconUserSettings: Icon = ({
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
      data-slot='icon-ui-user-settings'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.55 21.84H1.78a8.4 8.4 0 0 1 8.3-8.46c2.89 0 5.43 1.5 6.92 3.8-1.15 2.46.67 3.35 1.55 4.66'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M15.47 7.93a5.4 5.4 0 1 1-10.79 0 5.4 5.4 0 0 1 10.8 0'
        fill='currentColor'
      />
      <circle cx='18.47' cy='18.49' r='2.62' stroke='currentColor' />
      <path d='m17.09 20.94-.64 1.04' stroke='currentColor' />
      <path d='m16.97 15.87-.5-.88' stroke='currentColor' />
      <path d='m19.97 21.14.5.88' stroke='currentColor' />
      <path d='m19.83 16.11.68-1.1' stroke='currentColor' />
      <path d='m21.12 18.5 1.4-.02' stroke='currentColor' />
      <path d='M14.44 18.5h1.24' stroke='currentColor' />
      <path d='M15.47 7.93a5.4 5.4 0 1 0-10.79 0 5.4 5.4 0 0 0 10.79 0' stroke='currentColor' />
      <path d='M1.78 21.62a8.3 8.3 0 0 1 11.28-7.74' stroke='currentColor' />
    </svg>
  )
}
