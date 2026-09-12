import type { Icon } from './types'

export const IconPip: Icon = ({
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
      data-slot='icon-ui-pip'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.75 6c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h16.5c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v4.94c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-5.3c-.95 0-1.42 0-1.71.3-.3.29-.3.76-.3 1.7V18c0 .94 0 1.41-.29 1.7-.3.3-.76.3-1.7.3h-7.2c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7z'
        fill='currentColor'
      />
      <rect x='1.75' y='4' width='20.5' height='16' rx='3' stroke='currentColor' />
      <path
        d='M22.25 14.85c0-.36 0-.54-.02-.69a2 2 0 0 0-1.68-1.67c-.15-.02-.33-.02-.69-.02h-3.5c-1.66 0-2.49 0-3.04.46l-.26.26c-.46.55-.46 1.38-.46 3.04s0 2.5.46 3.05l.26.26c.55.46 1.38.46 3.04.46h.67'
        stroke='currentColor'
      />
    </svg>
  )
}
