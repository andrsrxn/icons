import type { Icon } from './types'

export const IconGasStation: Icon = ({
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
      data-slot='icon-ui-gas-station'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m20.55 8.83 1.24 1.74c.16.22.11.55-.12.69-1.23.71-2.7.5-3.46-.57s-.54-2.62.44-3.67c.2-.2.5-.16.66.06z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M13.79 8.18c0-2.04 0-3.06-.48-3.8a3 3 0 0 0-.9-.9C11.67 3 10.65 3 8.6 3s-3.06 0-3.8.48a3 3 0 0 0-.9.9c-.48.74-.48 1.76-.48 3.8v10.08H13.8zM8.6 10c-.63 0-.95 0-1.2-.08a1.7 1.7 0 0 1-1.07-1.04c-.08-.25-.08-.56-.08-1.18 0-.63 0-.94.08-1.19.17-.49.56-.87 1.06-1.03.26-.09.58-.09 1.21-.09.64 0 .95 0 1.21.09.5.16.9.54 1.06 1.03a4 4 0 0 1 .08 1.19c0 .62 0 .93-.08 1.18-.17.49-.56.87-1.06 1.04-.26.08-.57.08-1.2.08'
        fill='currentColor'
      />
      <path
        d='M13.88 17.83V8c0-2.13 0-3.2-.51-3.95a3 3 0 0 0-.8-.8c-.77-.52-1.83-.52-3.96-.52s-3.19 0-3.95.51a3 3 0 0 0-.8.8c-.52.77-.52 1.83-.52 3.96v9.83'
        stroke='currentColor'
      />
      <rect x='6.26' y='5.69' width='4.71' height='4.38' rx='1.5' stroke='currentColor' />
      <rect x='1.92' y='18' width='13.38' height='3.27' rx='1' stroke='currentColor' />
      <path
        d='m13.87 13.8 1.08 1.35c.65.81.97 1.21 1.4 1.41a2 2 0 0 0 .83.19c.46 0 .93-.23 1.86-.68.8-.38 1.19-.57 1.45-.88a2 2 0 0 0 .38-.64c.14-.38.11-.82.06-1.7l-.07-1.25'
        stroke='currentColor'
      />
      <path
        d='m20.55 8.83.95 1.33c.28.4.42.6.35.85s-.26.32-.63.46c-1.12.44-2.34.16-3-.78-.68-.94-.59-2.26.12-3.28.23-.34.35-.5.6-.51.24 0 .38.2.66.59z'
        stroke='currentColor'
      />
      <path d='m19.59 7.48-2.12-2.99' stroke='currentColor' />
    </svg>
  )
}
