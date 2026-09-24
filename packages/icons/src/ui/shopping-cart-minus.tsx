import type { Icon } from './types'

export const IconShoppingCartMinus: Icon = ({
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
      data-slot='icon-ui-shopping-cart-minus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.03 13.6c1.27-3.32 1.9-4.98 1.22-6.2a3 3 0 0 0-.28-.42c-.89-1.1-2.66-1.12-6.21-1.18l-5.08-.08c-3.08-.04-4.62-.07-5.52.85l-.25.3c-.78 1.03-.52 2.55-.01 5.59.37 2.2.55 3.31 1.29 4q.1.11.24.2c.8.62 1.92.62 4.16.62h5.08c1.82 0 2.73 0 3.45-.44l.26-.18c.67-.52 1-1.37 1.65-3.07'
        fill='currentColor'
      />
      <path
        d='m4.96 12.09-.84-6.14h11.26c3.52 0 5.28 0 6.17 1.05a3 3 0 0 1 .37.54c.65 1.21.01 2.85-1.26 6.13-.64 1.64-.96 2.46-1.6 2.97l-.33.22c-.71.42-1.59.42-3.35.42H10.9c-2.5 0-3.74 0-4.59-.74s-1.02-1.98-1.35-4.45'
        stroke='currentColor'
      />
      <path d='M4.6 9.25 3.94 4.9a2.45 2.45 0 0 0-2.42-2.1' stroke='currentColor' />
      <circle
        cx='8.25'
        cy='19.11'
        r='1.83'
        transform='rotate(90 8.25 19.1)'
        stroke='currentColor'
      />
      <circle
        cx='17.27'
        cy='19.11'
        r='1.83'
        transform='rotate(90 17.27 19.1)'
        stroke='currentColor'
      />
      <path d='M10.08 11.61h5.6' stroke='currentColor' />
    </svg>
  )
}
