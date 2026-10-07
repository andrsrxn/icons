import type { Icon } from './types'

export const IconBathtub: Icon = ({
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
      data-slot='icon-ui-bathtub'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.79 19.08c2.8 0 4.21 0 5.26-.77 1.06-.76 1.49-2.1 2.35-4.77l.08-.24c.39-1.2.58-1.8.28-2.2-.3-.42-.93-.42-2.18-.42H4.33c-1.22 0-1.82 0-2.12.4s-.13.99.2 2.17c.82 2.81 1.22 4.22 2.29 5.02s2.52.8 5.41.8z'
        fill='currentColor'
      />
      <path
        d='M14.3 19.08c2.85 0 4.27 0 5.32-.76l.32-.26c.97-.86 1.27-2.26 1.88-5.04.22-1.04.33-1.55.08-1.91l-.08-.1c-.3-.33-.83-.33-1.88-.33H4.1c-1.04 0-1.56 0-1.86.31l-.1.12c-.24.36-.13.86.08 1.88.59 2.78.88 4.17 1.83 5.04l.36.3c1.05.75 2.47.75 5.31.75z'
        stroke='currentColor'
      />
      <path d='M2.02 11.4V5.26c0-2.76 2.9-3.68 4.77-1.33' stroke='currentColor' />
      <path d='m4.08 20.44.87-1.36' stroke='currentColor' />
      <path d='m19.92 20.44-.87-1.36' stroke='currentColor' />
      <path d='M8.12 2.59 5.94 5.62' stroke='currentColor' />
    </svg>
  )
}
