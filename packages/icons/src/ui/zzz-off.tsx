import type { Icon } from './types'

export const IconZzzOff: Icon = ({
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
      data-slot='icon-ui-zzz-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M9.19 11.17H3.73c-.64 0-.96 0-1.04-.2-.07-.18.16-.4.63-.84l2.79-2.6.71-.66'
        stroke='currentColor'
      />
      <path
        d='M7.16 3.9h1.36c.63 0 .94 0 1.02.19.08.18-.15.4-.6.84l-.24.23'
        stroke='currentColor'
      />
      <path
        d='M13.65 6.77h6.99c.64 0 .95 0 1.03.19s-.16.4-.62.84l-3.56 3.37-1.21 1.16'
        stroke='currentColor'
      />
      <path d='M21.18 15.57h-2.2' stroke='currentColor' />
      <path
        d='M15.58 15.57h-.93c-.46 0-.69 0-.8-.07a.5.5 0 0 1-.23-.57c.04-.13.2-.3.54-.6'
        stroke='currentColor'
      />
      <path
        d='M9.94 20.2H6.5c-.64 0-.95 0-1.03-.18-.08-.2.15-.41.61-.85l3.28-3.14c.46-.43.7-.65.62-.84S9.58 15 8.95 15h-3.5'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
