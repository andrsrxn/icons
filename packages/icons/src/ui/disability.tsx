import type { Icon } from './types'

export const IconDisability: Icon = ({
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
      data-slot='icon-ui-disability'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.7 22.34a5.76 5.76 0 0 0 5.24-8.16l-1.7.15v-2.29a5.76 5.76 0 1 0-3.54 10.3'
        fill='currentColor'
      />
      <circle opacity='.2' cx='14.64' cy='4.34' r='2.67' fill='currentColor' />
      <path d='M5.58 12.6a5.76 5.76 0 1 0 9.7 5.58' stroke='currentColor' />
      <circle cx='14.64' cy='4.34' r='2.67' stroke='currentColor' />
      <path
        d='m8.99 11.86.77-1.58c.4-.82.6-1.23.94-1.51s.78-.4 1.66-.62l1.33-.34'
        stroke='currentColor'
      />
      <path
        d='m20.05 21-2.03-5.02a3 3 0 0 0-.54-1.05 1.5 1.5 0 0 0-.62-.4c-.27-.09-.58-.07-1.19-.04-1.01.05-1.52.08-1.88-.1a1.5 1.5 0 0 1-.7-.8c-.16-.37-.08-.88.09-1.88l.7-4.31'
        stroke='currentColor'
      />
    </svg>
  )
}
