import type { Icon } from './types'

export const IconTent: Icon = ({
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
      data-slot='icon-ui-tent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.63 14.77v6.66h5.59l.65-5.42c.1-.84.15-1.26.43-1.51s.7-.25 1.55-.25h.18c.84 0 1.27 0 1.55.25s.34.67.44 1.5l.66 5.43h5.7v-6.67c0-.74 0-1.1-.13-1.45-.13-.33-.37-.61-.85-1.17l-4.36-5.03c-1.4-1.62-2.1-2.43-3.02-2.43S10.41 5.48 9 7.1l-4.4 5.04c-.49.56-.73.84-.86 1.18-.12.33-.12.7-.12 1.45'
        fill='currentColor'
      />
      <path
        d='M3.63 21.43v-5.92c0-1.1 0-1.66.19-2.17.19-.5.55-.93 1.28-1.77l8.5-9.76m6.77 19.62v-5.9c0-1.12 0-1.68-.19-2.19-.2-.51-.56-.93-1.3-1.77l-8.53-9.76'
        stroke='currentColor'
      />
      <path
        d='m14.68 21.43-.65-4.95c-.1-.83-.16-1.25-.45-1.5-.28-.24-.7-.24-1.53-.24h-.21c-.84 0-1.26 0-1.54.25s-.34.66-.45 1.5l-.63 4.94'
        stroke='currentColor'
      />
      <path d='M22 21.43H2' stroke='currentColor' />
    </svg>
  )
}
