import type { Icon } from './types'

export const IconMoney: Icon = ({
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
      data-slot='icon-ui-money'
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
        d='M22.24 12c0 1.1-.64 2.1-1.64 2.57l-.25.12-.16.08a3 3 0 0 0-1.28 1.22l-.29.5c-.61 1.02-.91 1.53-1.36 1.87a3 3 0 0 1-.76.44c-.52.2-1.12.2-2.3.2H9.4c-.72 0-1.08 0-1.4-.07a3 3 0 0 1-1.6-.95 7 7 0 0 1-.73-1.2l-.28-.51a2.8 2.8 0 0 0-1.65-1.34 2.8 2.8 0 0 1-1.98-2.68v-.28c0-1.27.83-2.38 2.04-2.75a3 3 0 0 0 1.76-1.5l.22-.45c.27-.56.4-.83.58-1.06a3 3 0 0 1 1.83-1.16C8.47 5 8.8 5 9.4 5h5.15c.86 0 1.29 0 1.68.1a3 3 0 0 1 1.26.72c.3.28.52.64.97 1.37l.09.15a3 3 0 0 0 1.1 1.2c.1.07.22.13.46.26l.27.14.45.24a3 3 0 0 1 1.4 2.3zm-7.83 0c0 1.4-1.08 2.55-2.41 2.55A2.5 2.5 0 0 1 9.59 12c0-1.4 1.08-2.55 2.41-2.55A2.5 2.5 0 0 1 14.41 12'
        fill='currentColor'
      />
      <rect
        width='14'
        height='20.49'
        rx='3'
        transform='matrix(0 -1 -1 0 22.24 19)'
        stroke='currentColor'
      />
      <path d='M6.48 5.13c0 2.76-2.11 5-4.72 5' stroke='currentColor' />
      <path d='M17.52 5.13c0 2.76 2.11 5 4.72 5' stroke='currentColor' />
      <path d='M6.48 19c0-2.76-2.11-5-4.72-5' stroke='currentColor' />
      <path d='M17.52 19c0-2.76 2.11-5 4.72-5' stroke='currentColor' />
      <circle cx='12' cy='12' r='2.72' stroke='currentColor' />
    </svg>
  )
}
