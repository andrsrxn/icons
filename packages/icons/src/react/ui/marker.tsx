import type { Icon } from './types'

export const IconMarker: Icon = ({
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
      data-slot='icon-ui-marker'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m12.64 1.4 9.8 9.8-3.85 4.2-.37.4c-.1.08-.21.15-.44.29l-3.05 1.93c-.36.23-.54.34-.74.42s-.41.1-.84.15l-.57.07c-.9.11-1.34.17-1.75.03-.41-.13-.74-.45-1.4-1.07l-2.63-2.5c-.64-.6-.96-.9-1.13-1.3s-.16-.85-.14-1.75v-.78c.02-.62.02-.93.12-1.22.09-.3.27-.55.62-1.06L8.2 6.2l.17-.25.2-.22z'
        fill='currentColor'
      />
      <path
        d='m22.5 10.82-5.84 5.84a6 6 0 0 1-.53.5c-.12.09-.25.16-.52.32-1.58.96-2.37 1.43-3.21 1.4q-.3 0-.56-.06c-.82-.19-1.48-.85-2.8-2.16l-1.78-1.79c-1.22-1.21-1.82-1.82-2.04-2.58a3 3 0 0 1-.13-.85c0-.8.4-1.56 1.22-3.09a6 6 0 0 1 .47-.76c.1-.14.23-.26.48-.5l5.64-5.65'
        stroke='currentColor'
      />
      <path
        d='m5.67 13.63-2.18 4.02c-1.2 2.22-1.8 3.33-1.3 3.85.49.53 1.63 0 3.91-1.09l4.29-2.02'
        stroke='currentColor'
      />
      <path d='m7.05 7.79 9.1 9.1' stroke='currentColor' />
    </svg>
  )
}
