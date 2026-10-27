import type { Icon } from './types'

export const IconUhd: Icon = ({
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
      data-slot='icon-ui-uhd'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M14.25 8.69v6.65' stroke='currentColor' />
      <path d='M9.75 8.69v6.65' stroke='currentColor' />
      <path d='M9.75 12.02h4.5' stroke='currentColor' />
      <path
        d='M17.2 13.68v-3.33c0-.83 0-1.25.33-1.55.34-.3.69-.26 1.39-.18 1.46.17 3.34.87 3.34 3.4s-1.88 3.23-3.34 3.4c-.7.07-1.05.11-1.39-.19s-.33-.71-.33-1.55'
        stroke='currentColor'
      />
      <path d='M22.26 20.17H1.74' stroke='currentColor' />
      <path d='M22.26 3.86H1.74' stroke='currentColor' />
      <path d='M6.69 8.69v4.6a2.31 2.31 0 0 1-4.63 0v-4.6' stroke='currentColor' />
    </svg>
  )
}
