import type { Icon } from './types'

export const IconDesk: Icon = ({
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
      data-slot='icon-ui-desk'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.96 9.4c.75 0 1.13 0 1.39-.2a1 1 0 0 0 .22-.21c.2-.27.2-.64.2-1.39s0-1.12-.2-1.39a1 1 0 0 0-.22-.22c-.26-.19-.64-.19-1.39-.19H5.04c-.75 0-1.13 0-1.39.2a1 1 0 0 0-.22.21c-.2.27-.2.64-.2 1.39s0 1.12.2 1.39a1 1 0 0 0 .22.22c.26.19.64.19 1.39.19z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M19.17 13.2c.55 0 .83 0 1.04-.11a1 1 0 0 0 .44-.44c.11-.21.11-.5.11-1.05s0-.83-.1-1.04a1 1 0 0 0-.45-.44C20 10 19.72 10 19.17 10h-3.6c-.55 0-.83 0-1.04.1a1 1 0 0 0-.44.45c-.11.21-.11.49-.11 1.04 0 .56 0 .84.1 1.05q.16.29.45.44c.21.1.49.1 1.04.1z'
        fill='currentColor'
      />
      <path
        d='M20.76 18.63V7.8c0-.94 0-1.41-.3-1.7-.28-.3-.76-.3-1.7-.3H5.1c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v10.83'
        stroke='currentColor'
      />
      <path
        d='M13.98 9.65v3.17c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.78'
        stroke='currentColor'
      />
      <path d='M3.24 9.65h17.52' stroke='currentColor' />
      <path d='M1.65 5.8h20.7' stroke='currentColor' />
      <path d='M13.98 13.2h6.78' stroke='currentColor' />
    </svg>
  )
}
