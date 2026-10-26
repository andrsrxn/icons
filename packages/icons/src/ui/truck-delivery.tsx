import type { Icon } from './types'

export const IconTruckDelivery: Icon = ({
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
      data-slot='icon-ui-truck-delivery'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.9 9.88c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.73c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v5.58a1.33 1.33 0 0 0 2.3.92l.29-.3A2.33 2.33 0 0 1 7.6 16l.1.1a2.5 2.5 0 0 0 1.71.68h2.65a3 3 0 0 0 1.82-.7l.17-.15.16-.15a3 3 0 0 1 1.82-.7h.87z'
        fill='currentColor'
      />
      <path
        d='M16.9 15.02V9.5c0-2.45 0-3.68-.67-4.5a3 3 0 0 0-.44-.44c-.83-.67-2.05-.67-4.5-.67'
        stroke='currentColor'
      />
      <path d='M1.73 11.62v3.36c0 1 .81 1.8 1.8 1.8' stroke='currentColor' />
      <path
        d='M16.94 7.06h1.13c.73 0 1.1 0 1.43.12a2 2 0 0 1 .41.2c.3.2.52.5.96 1.09a8 8 0 0 1 1.08 1.63q.12.3.2.6c.12.48.12.97.12 1.96v.36c0 1.66 0 2.5-.47 3.05l-.25.25c-.56.47-1.4.47-3.06.47'
        stroke='currentColor'
      />
      <circle
        cx='6.07'
        cy='17.52'
        r='2.6'
        transform='rotate(90 6.07 17.52)'
        stroke='currentColor'
      />
      <circle
        cx='15.93'
        cy='17.52'
        r='2.6'
        transform='rotate(90 15.93 17.52)'
        stroke='currentColor'
      />
      <path d='M8.67 16.79h4.66' stroke='currentColor' />
      <path d='M7.66 5.55H1.73' stroke='currentColor' />
      <path d='M10.33 8.7H4.4' stroke='currentColor' />
    </svg>
  )
}
