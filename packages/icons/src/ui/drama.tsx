import type { Icon } from './types'

export const IconDrama: Icon = ({
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
      data-slot='icon-ui-drama'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.2 17.02c4.55.67 7.68-6 8.21-9.57.35-2.37-.97-2.23-2.93-2.03-1 .11-2.16.23-3.36.06s-2.28-.64-3.2-1.03c-1.82-.77-3.04-1.28-3.4 1.09-.12.86-.17 1.95-.1 3.1 0 0 4.04-2.3 4.78-.72 1.18 1.98 0 9.1 0 9.1'
        fill='currentColor'
      />
      <path
        d='M1.59 11.1c.53 3.58 3.48 10.36 8.02 9.69 4.54-.68 5.4-8.02 4.86-11.6-.53-3.57-3.03-.58-6.59-.06-3.56.53-6.82-1.6-6.29 1.97'
        stroke='currentColor'
      />
      <path
        d='M9.51 8.48c-.08-1.1-.07-2.11.03-2.94.4-3.58 3-.68 6.58-.27 3.57.41 6.76-1.83 6.35 1.76-.41 3.6-3.13 10.47-7.7 9.94a4 4 0 0 1-.79-.17'
        stroke='currentColor'
      />
      <path d='m11.3 11.99-1.35.2' stroke='currentColor' />
      <path d='m18.7 8.9-1.39-.13' stroke='currentColor' />
      <path d='m6.49 12.7-1.2.18' stroke='currentColor' />
      <path d='M10.54 16.03c-.5.44-.88.61-1.53.7-.65.1-1.07.05-1.68-.22' stroke='currentColor' />
      <path d='M16.82 13.19a2.6 2.6 0 0 0-1.51-.75c-.35-.06-.35-.04-.63 0' stroke='currentColor' />
    </svg>
  )
}
