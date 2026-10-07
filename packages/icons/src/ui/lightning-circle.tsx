import type { Icon } from './types'

export const IconLightningCircle: Icon = ({
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
      data-slot='icon-ui-lightning-circle'
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
        d='M1.78 12a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0m9.35 7.4 5.63-8.28-3.86-.78V5.55l-5.4 7.6 3.13.9z'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.22' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='m8.3 11.12 2.28-3.33c1.15-1.67 1.72-2.51 2.14-2.52a.8.8 0 0 1 .58.25c.3.3.1 1.29-.26 3.29-.11.6-.17.9-.06 1.14a1 1 0 0 0 .27.32c.2.14.51.14 1.13.14h.12c1.09 0 1.63 0 1.87.3a1 1 0 0 1 .14.27c.12.36-.19.81-.8 1.71l-2.27 3.36c-1.2 1.75-1.78 2.62-2.21 2.62a.8.8 0 0 1-.56-.23c-.3-.3-.1-1.34.28-3.42.11-.62.17-.93.06-1.17a1 1 0 0 0-.25-.3c-.21-.15-.53-.15-1.16-.15h-.1c-1.08 0-1.62 0-1.86-.3a1 1 0 0 1-.15-.28c-.1-.36.2-.8.81-1.7'
        stroke='currentColor'
      />
    </svg>
  )
}
