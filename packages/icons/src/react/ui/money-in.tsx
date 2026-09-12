import type { Icon } from './types'

export const IconMoneyIn: Icon = ({
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
      data-slot='icon-ui-money-in'
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
        d='M20.1 8.8c.5.25.75.38.96.54a3 3 0 0 1 1.14 1.87c.04.26.04.54.04 1.1v1.57c0 1.98 0 2.97-.45 3.7a3 3 0 0 1-.97.97c-.72.45-1.71.45-3.7.45H9.4c-.72 0-1.08 0-1.4-.07a3 3 0 0 1-1.6-.95 7 7 0 0 1-.73-1.2l-.28-.51a2.8 2.8 0 0 0-1.65-1.34 2.8 2.8 0 0 1-1.98-2.68v-.28c0-1.27.83-2.38 2.04-2.75a3 3 0 0 0 1.76-1.5l.22-.45c.27-.56.4-.83.58-1.06a3 3 0 0 1 1.83-1.16C8.47 5 8.8 5 9.4 5h5.15c.86 0 1.29 0 1.68.1a3 3 0 0 1 1.26.72c.3.28.52.64.97 1.37l.09.15a3 3 0 0 0 1.1 1.2c.1.07.22.13.46.26M14.42 12c0 1.4-1.08 2.55-2.41 2.55A2.5 2.5 0 0 1 9.59 12c0-1.4 1.08-2.55 2.41-2.55A2.5 2.5 0 0 1 14.41 12'
        fill='currentColor'
      />
      <path
        d='M14.48 19H7.76c-2.83 0-4.25 0-5.12-.88s-.88-2.3-.88-5.12v-2c0-2.83 0-4.24.88-5.12C3.5 5 4.93 5 7.76 5h8.48c2.83 0 4.25 0 5.12.88s.88 2.3.88 5.12v1.31'
        stroke='currentColor'
      />
      <path d='M6.48 5.13c0 2.76-2.11 5-4.72 5' stroke='currentColor' />
      <path d='M17.52 5.13c0 2.76 2.11 5 4.72 5' stroke='currentColor' />
      <path d='M6.48 19c0-2.76-2.11-5-4.72-5' stroke='currentColor' />
      <circle cx='12' cy='12' r='2.72' stroke='currentColor' />
      <path d='M19.76 15.07v5.02' stroke='currentColor' />
      <path
        d='m22.24 16.8-.35-.36c-1-1-1.5-1.5-2.13-1.5s-1.12.5-2.12 1.5l-.36.35'
        stroke='currentColor'
      />
    </svg>
  )
}
