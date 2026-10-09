import type { Icon } from './types'

export const IconLockCircle: Icon = ({
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
      data-slot='icon-ui-lock-circle'
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
        d='M2.1 12a10.26 10.26 0 1 0 20.53 0A10.26 10.26 0 0 0 2.1 12m8.8-1.52h4.05c1.64.1 2.27 1.89 2.37 3.52-.1 1.8-.13 3.53-3.05 3.53H10.9c-3.7-.2-3.36-1.89-3.47-3.53.1-1.63-.62-3.29 3.47-3.52'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.26' transform='rotate(90 12 12)' stroke='currentColor' />
      <rect x='7.27' y='10.33' width='9.47' height='7.06' rx='2' stroke='currentColor' />
      <path d='m14.4 10.33-.23-2.19a2.16 2.16 0 0 0-4.3-.01l-.25 2.2' stroke='currentColor' />
    </svg>
  )
}
