import type { Icon } from './types'

export const IconCctvOff: Icon = ({
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
      data-slot='icon-ui-cctv-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.23 7.37c.43-1.59.64-2.39 1.11-2.92A3 3 0 0 1 5 3.5c.7-.14 1.49.08 3.08.5l5 1.34c1.6.43 2.39.64 2.92 1.1a3 3 0 0 1 .95 1.66c.14.69-.07 1.49-.5 3.08-.43 1.6-.64 2.39-1.1 2.92a3 3 0 0 1-1.66.95c-.69.14-1.48-.07-3.08-.5l-5-1.34c-1.59-.43-2.38-.64-2.91-1.1a3 3 0 0 1-.96-1.66c-.14-.69.08-1.49.5-3.08'
        fill='currentColor'
      />
      <path
        d='M3.84 4a3 3 0 0 0-.5.45c-.47.53-.68 1.33-1.1 2.92h0c-.43 1.6-.65 2.4-.5 3.08a3 3 0 0 0 .95 1.65c.53.47 1.32.68 2.91 1.11l5 1.34c1.6.43 2.4.64 3.08.5a3 3 0 0 0 .88-.33'
        stroke='currentColor'
      />
      <path
        d='M16.07 12.4c.42-1.59 1.01-3.61.87-4.3a3 3 0 0 0-.95-1.65c-.53-.47-1.33-.68-2.92-1.1L8.07 4l-.62-.16'
        stroke='currentColor'
      />
      <path
        d='m17 9.45 1.56-.13c2-.17 3.01-.26 3.51.37.5.62.2 1.58-.4 3.51l-.44 1.39h0c-.2.68-.31 1.01-.48 1.23q-.36.46-.91.56'
        stroke='currentColor'
      />
      <path
        d='M12.82 8.7a.57.57 0 1 1 0 1.14.57.57 0 0 1 0-1.14'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m1.86 18.63.92-.16c1.61-.27 2.42-.4 3.03-.9.6-.49.91-1.25 1.53-2.76l.32-.79'
        stroke='currentColor'
      />
      <path d='M1.68 15.78v5.45' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
