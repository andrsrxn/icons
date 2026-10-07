import type { Icon } from './types'

export const IconShieldX: Icon = ({
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
      data-slot='icon-ui-shield-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.47 4.47 13.02 2.4c-.5-.3-.75-.45-1.02-.45-.28 0-.53.15-1.03.45L6.9 4.84 4.04 6.27c-.73.37-1.1.55-1.24.89s-.02.72.22 1.5l2.46 7.9c.09.28.13.42.21.54s.2.22.42.4l4.64 3.88c.6.5.9.74 1.25.75.35 0 .66-.24 1.27-.72l4.92-3.88c.26-.2.39-.3.48-.43.09-.14.13-.3.22-.6l2.17-7.9c.2-.75.31-1.12.17-1.45-.15-.33-.5-.5-1.19-.86z'
        fill='currentColor'
      />
      <path d='m9.26 8.99 5.48 5.48' stroke='currentColor' />
      <path d='m9.25 14.47 5.49-5.48' stroke='currentColor' />
      <path
        d='M5.69 5.04a25 25 0 0 0 3.4-1.86c1.54-1 2.32-1.5 2.9-1.5.6 0 1.37.5 2.91 1.5 1 .65 2.17 1.3 3.4 1.86 1.58.7 2.37 1.06 2.7 1.64.32.58.23 1.23.06 2.52v0c-.61 4.58-2.68 9.3-7.29 12.4-.77.52-1.16.78-1.77.78s-1-.26-1.77-.79c-4.61-3.1-6.68-7.8-7.3-12.39-.16-1.3-.25-1.94.07-2.52.33-.58 1.11-.93 2.69-1.64'
        stroke='currentColor'
      />
    </svg>
  )
}
