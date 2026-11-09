import type { Icon } from './types'

export const IconRefresh: Icon = ({
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
      data-slot='icon-ui-refresh'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12.07' r='9.41' fill='currentColor' />
      <path d='M3.54 15.96c1.92 3.4 4.63 5.49 8.93 5.49s7.13-3.06 8.3-5.49' stroke='currentColor' />
      <path
        d='M20.7 8.17c-1.92-3.4-5.1-5.48-8.93-5.48-4.15 0-6.87 2.76-8.56 5.48'
        stroke='currentColor'
      />
      <path
        d='M15.87 9h1.85c1.73 0 2.6 0 3.13-.53.54-.54.54-1.4.54-3.14V3.47'
        stroke='currentColor'
      />
      <path
        d='M2.6 20.45v-1.83c0-1.7 0-2.56.52-3.09C3.65 15 4.5 15 6.22 15h1.83'
        stroke='currentColor'
      />
    </svg>
  )
}
