import type { Icon } from './types'

export const IconMoneyEdit: Icon = ({
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
      data-slot='icon-ui-money-edit'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M20.1 8.8c.5.25.75.38.96.54a3 3 0 0 1 1.14 1.87c.04.26.04.54.04 1.1v2.14l-1.4-.8-4.64 4.33-.64 1.02H9.4c-.72 0-1.08 0-1.4-.07a3 3 0 0 1-1.6-.95 7 7 0 0 1-.73-1.2l-.28-.51a2.8 2.8 0 0 0-1.65-1.34 2.8 2.8 0 0 1-1.98-2.68v-.28c0-1.27.83-2.38 2.04-2.75a3 3 0 0 0 1.76-1.5l.22-.45c.27-.56.4-.83.58-1.06a3 3 0 0 1 1.83-1.16C8.47 5 8.8 5 9.4 5h5.15c.86 0 1.29 0 1.68.1a3 3 0 0 1 1.26.72c.3.28.52.64.97 1.37l.09.15a3 3 0 0 0 1.1 1.2c.1.07.22.13.46.26M14.42 12c0 1.4-1.08 2.55-2.41 2.55A2.5 2.5 0 0 1 9.59 12c0-1.4 1.08-2.55 2.41-2.55A2.5 2.5 0 0 1 14.41 12'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M6.48 5.13c0 2.76-2.11 5-4.72 5' stroke='currentColor' />
      <path d='M17.52 5.13c0 2.76 2.11 5 4.72 5' stroke='currentColor' />
      <path d='M6.48 19c0-2.76-2.11-5-4.72-5' stroke='currentColor' />
      <circle cx='12' cy='12' r='2.72' stroke='currentColor' />
      <path
        d='M12.16 19h-3.4c-3.3 0-4.95 0-5.98-1.03h0C1.76 16.95 1.76 15.3 1.76 12s0-4.95 1.02-5.97h0C3.81 5 5.46 5 8.76 5h7.78c2.06 0 3.09 0 3.86.42.6.32 1.1.82 1.42 1.42.42.78.42 1.8.42 3.86'
        stroke='currentColor'
      />
      <path d='m21.06 16.6-1.68-1.7' stroke='currentColor' />
      <path
        d='M15.14 19.62c-.07.47-.1.7 0 .86q.06.09.14.14c.16.1.4.07.87 0 .53-.06.8-.1 1.03-.2l.22-.1c.23-.14.41-.32.79-.69l3.56-3.48c.3-.3.46-.46.54-.62a1 1 0 0 0 0-.83c-.07-.17-.22-.32-.53-.63a3 3 0 0 0-.62-.53 1 1 0 0 0-.82 0 3 3 0 0 0-.62.53l-3.54 3.52c-.37.37-.56.56-.69.77l-.12.25c-.1.23-.14.5-.2 1'
        stroke='currentColor'
      />
    </svg>
  )
}
