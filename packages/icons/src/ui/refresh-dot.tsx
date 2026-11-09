import type { Icon } from './types'

export const IconRefreshDot: Icon = ({
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
      data-slot='icon-ui-refresh-dot'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle cx='12' cy='12' r='.82' fill='currentColor' stroke='currentColor' />
      <circle opacity='.2' cx='12.02' cy='12.07' r='9.41' fill='currentColor' />
      <path d='M3.56 15.96c1.92 3.4 4.63 5.49 8.93 5.49s7.13-3.06 8.3-5.49' stroke='currentColor' />
      <path
        d='M20.72 8.17c-1.92-3.4-5.1-5.48-8.93-5.48-4.15 0-6.87 2.76-8.55 5.48'
        stroke='currentColor'
      />
      <path
        d='M16.08 9h1.8c1.66 0 2.5 0 3.02-.52.51-.51.51-1.35.51-3.02v-1.8'
        stroke='currentColor'
      />
      <path
        d='M2.62 20v-1.68c0-1.57 0-2.35.48-2.83C3.59 15 4.37 15 5.93 15h1.68'
        stroke='currentColor'
      />
    </svg>
  )
}
