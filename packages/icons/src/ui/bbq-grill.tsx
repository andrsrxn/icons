import type { Icon } from './types'

export const IconBbqGrill: Icon = ({
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
      data-slot='icon-ui-bbq-grill'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.35 9.92h15.3c0 3.98-3.42 7.21-7.65 7.21-4.22 0-7.65-3.23-7.65-7.21'
        fill='currentColor'
      />
      <path d='M4.35 9.92c0 3.98 3.43 7.21 7.65 7.21s7.65-3.23 7.65-7.21' stroke='currentColor' />
      <path d='M3 9.92h18' stroke='currentColor' />
      <path d='M12 17.13v5.14' stroke='currentColor' />
      <path
        d='M9.21 16.9a.8.8 0 0 0-.25-1.07.7.7 0 0 0-1 .24l.62.42zm-4.55 4.96a.8.8 0 0 0 .26 1.06.7.7 0 0 0 1-.24l-.63-.41zm3.92-5.37-.62-.42-3.3 5.79.63.4.63.42 3.3-5.78z'
        fill='currentColor'
      />
      <path
        d='M19.34 21.86a.8.8 0 0 1-.26 1.06.7.7 0 0 1-1-.24l.63-.41zm-4.55-4.96a.8.8 0 0 1 .25-1.07.7.7 0 0 1 1 .24l-.62.42zm3.92 5.37-.63.41-3.3-5.78.64-.41.62-.42 3.3 5.79z'
        fill='currentColor'
      />
      <path
        d='m11.58 1.74.6.7c.52.59.47 1.48-.12 2a1.43 1.43 0 0 0 0 2.13l.51.47'
        stroke='currentColor'
      />
      <path
        d='m16.45 1.74.6.7c.52.59.46 1.48-.12 2a1.43 1.43 0 0 0 0 2.13l.5.47'
        stroke='currentColor'
      />
      <path
        d='m6.72 1.74.6.7c.52.59.46 1.48-.12 2a1.43 1.43 0 0 0 0 2.13l.5.47'
        stroke='currentColor'
      />
    </svg>
  )
}
