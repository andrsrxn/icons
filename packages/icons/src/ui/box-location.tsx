import type { Icon } from './types'

export const IconBoxLocation: Icon = ({
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
      data-slot='icon-ui-box-location'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.4 8.31v7.49a.5.5 0 0 1-.83.38l-2.07-1.8a.5.5 0 0 0-.6-.03l-2.2 1.46a.5.5 0 0 0-.21.5l.57 3.03a.5.5 0 0 1-.25.52l-3.86 2.17.44-9.6a.5.5 0 0 1 .27-.42l8-4.14a.5.5 0 0 1 .74.44'
        fill='currentColor'
      />
      <path
        d='M21.42 12v-1.83c0-1.7 0-2.54-.4-3.24s-1.14-1.12-2.6-1.96L15 2.99c-1.46-.84-2.2-1.26-3-1.26s-1.54.42-3 1.26L5.58 4.97c-1.46.84-2.2 1.27-2.6 1.96-.4.7-.4 1.54-.4 3.24v4.4c0 .97 0 1.45.13 1.88a3 3 0 0 0 .67 1.16c.3.33.72.57 1.56 1.05l5.48 3.16c.7.41 1.58-.1 1.58-.91'
        stroke='currentColor'
      />
      <path d='M3.12 7.53 12 12.42' stroke='currentColor' />
      <path d='M12 12.42v8.55' stroke='currentColor' />
      <path d='M7.3 9.57v4.61' stroke='currentColor' />
      <path d='M20.88 7.53 12 12.42' stroke='currentColor' />
      <path d='m7.3 9.57 9.14-5.42' stroke='currentColor' />
      <path
        d='M19.3 20.83c-.49.66-.74.99-1.24.99s-.74-.33-1.24-1c-.74-.98-1.53-2.34-1.53-3.65a2.77 2.77 0 1 1 5.55 0c0 1.32-.8 2.68-1.53 3.66'
        stroke='currentColor'
      />
      <path
        d='M18.06 16.83a.4.4 0 1 1 0 .82.4.4 0 0 1 0-.82'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
