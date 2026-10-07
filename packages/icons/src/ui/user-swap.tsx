import type { Icon } from './types'

export const IconUserSwap: Icon = ({
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
      data-slot='icon-ui-user-swap'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M18.28 9.24v-1c0-1.88 0-2.83-.6-3.41-.58-.59-1.52-.59-3.4-.59h-.23'
        stroke='currentColor'
      />
      <path d='M5.72 14.7v1c0 1.88 0 2.82.59 3.4.59.6 1.53.6 3.41.6h.23' stroke='currentColor' />
      <path
        d='M20.84 7.91C19.76 9 19.23 9.53 18.58 9.62a2 2 0 0 1-.6 0c-.65-.1-1.19-.63-2.27-1.7'
        stroke='currentColor'
      />
      <path
        d='M3.16 15.98c1.08-1.08 1.61-1.62 2.26-1.71a2 2 0 0 1 .6 0c.65.1 1.19.63 2.27 1.7'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M19.58 15.46a2.42 2.42 0 1 1-4.85 0 2.42 2.42 0 0 1 4.85 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M9.27 4.89a2.42 2.42 0 1 1-4.85 0 2.42 2.42 0 0 1 4.85 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20.92 21.72H13.4a3.8 3.8 0 0 1 3.76-3.84 3.8 3.8 0 0 1 3.76 3.84'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M10.6 11.15H3.08a3.8 3.8 0 0 1 3.76-3.83 3.8 3.8 0 0 1 3.76 3.83'
        fill='currentColor'
      />
      <path
        d='M19.58 15.46a2.4 2.4 0 0 1-2.42 2.42 2.42 2.42 0 1 1 2.42-2.42'
        stroke='currentColor'
      />
      <path
        d='M9.26 4.89a2.4 2.4 0 0 1-2.42 2.43 2.42 2.42 0 1 1 2.42-2.43'
        stroke='currentColor'
      />
      <path d='M20.92 21.64a3.76 3.76 0 1 0-7.52 0' stroke='currentColor' />
      <path d='M10.6 11.08a3.76 3.76 0 0 0-7.52 0' stroke='currentColor' />
    </svg>
  )
}
