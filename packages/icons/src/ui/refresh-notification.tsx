import type { Icon } from './types'

export const IconRefreshNotification: Icon = ({
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
      data-slot='icon-ui-refresh-notification'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.6 12.07a9.4 9.4 0 0 0 13.16 8.62 3.46 3.46 0 1 1 4.87-4.87q.76-1.74.78-3.75a9.4 9.4 0 1 0-18.82 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M11.4 21.4c-3.69-.31-6.1-2.32-7.86-5.44' stroke='currentColor' />
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
      <path d='M21.4 17.99a3.46 3.46 0 1 0-6.94 0 3.46 3.46 0 0 0 6.93 0' stroke='currentColor' />
    </svg>
  )
}
