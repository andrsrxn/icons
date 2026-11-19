import type { Icon } from './types'

export const IconAgent: Icon = ({
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
      data-slot='icon-ui-agent'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.8 13.5c0-2.23 0-3.34.43-4.19A4 4 0 0 1 6 7.54c.85-.43 1.96-.43 4.18-.43h3.64c2.22 0 3.33 0 4.18.43a4 4 0 0 1 1.77 1.77c.43.85.43 1.96.43 4.18s0 3.33-.43 4.18A4 4 0 0 1 18 19.44c-.85.43-1.96.43-4.18.43h-3.64c-2.22 0-3.33 0-4.18-.43a4 4 0 0 1-1.77-1.77c-.43-.85-.43-1.96-.43-4.18'
        fill='currentColor'
      />
      <path
        d='M9.3 11.48v2.64m5.65-2.64v2.64m5.25-.39h2.12m-20.65 0H3.8m8.5-6.62c0-1.35 0-2.03-.32-2.52a2 2 0 0 0-.61-.6c-.5-.32-1.17-.32-2.52-.32h-.21'
        stroke='currentColor'
      />
      <path
        d='M10.18 19.87h3.64c2.22 0 3.33 0 4.18-.43a4 4 0 0 0 1.77-1.77c.43-.85.43-1.96.43-4.18v0c0-2.22 0-3.33-.43-4.18A4 4 0 0 0 18 7.54c-.85-.43-1.96-.43-4.18-.43h-3.64c-2.22 0-3.33 0-4.18.43a4 4 0 0 0-1.77 1.77c-.43.85-.43 1.96-.43 4.18v0c0 2.22 0 3.33.43 4.18A4 4 0 0 0 6 19.44c.85.43 1.96.43 4.18.43'
        stroke='currentColor'
      />
    </svg>
  )
}
