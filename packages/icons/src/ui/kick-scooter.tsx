import type { Icon } from './types'

export const IconKickScooter: Icon = ({
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
      data-slot='icon-ui-kick-scooter'
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
        d='M16.25 18.86v-2.83H7.69v2.83z'
        fill='currentColor'
      />
      <circle cx='4.68' cy='17.37' r='3.01' stroke='currentColor' />
      <circle cx='19.32' cy='17.37' r='3.01' stroke='currentColor' />
      <path
        d='m18.77 14.36-1.53-9.07c-.13-.8-.2-1.2-.48-1.43-.28-.24-.68-.24-1.49-.24h-1.52'
        stroke='currentColor'
      />
      <path d='M16.25 18.86H7.69' stroke='currentColor' />
      <path d='M16.45 15.98H7.59' stroke='currentColor' />
    </svg>
  )
}
