import type { Icon } from './types'

export const IconUserScreen: Icon = ({
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
      data-slot='icon-ui-user-screen'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.36 15.58c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V9c0-2.83 0-4.24-.88-5.12S19.18 3 16.36 3H7.64c-2.83 0-4.24 0-5.12.88S1.64 6.19 1.64 9v.56c0 2.81 0 4.22.87 5.1.88.88 2.29.88 5.1.9h2.14L8.6 13.2l-.2-.46a3 3 0 0 1 .34-2.82c.14-.24.2-.36.28-.46a3 3 0 0 1 2.2-1.26h1.25a3 3 0 0 1 2.27 1.47c.08.14.15.3.3.61l.02.06c.14.32.22.48.27.63a3 3 0 0 1-.15 2.23c-.07.15-.16.3-.34.59l-1.12 1.8z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M15.52 12.1a3.6 3.6 0 1 0-7.19 0 3.6 3.6 0 0 0 7.19 0' stroke='currentColor' />
      <path d='M6.63 21a5.3 5.3 0 1 1 10.58 0' stroke='currentColor' />
      <path
        d='M5 15.54c-.77 0-1.15 0-1.46-.09a2.5 2.5 0 0 1-1.78-1.78c-.08-.31-.08-.7-.08-1.46v-4.2c0-2.36 0-3.54.73-4.27s1.91-.73 4.27-.73h10.65c2.35 0 3.53 0 4.26.73.74.73.74 1.91.74 4.27v4.2c0 .77 0 1.15-.09 1.46a2.5 2.5 0 0 1-1.78 1.78c-.31.09-.7.09-1.45.09'
        stroke='currentColor'
      />
    </svg>
  )
}
