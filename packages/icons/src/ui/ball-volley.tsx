import type { Icon } from './types'

export const IconBallVolley: Icon = ({
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
      data-slot='icon-ui-ball-volley'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m16.5 17.37-3.13 4.65a1 1 0 0 1-1.07.41l-3.77-.92a1 1 0 0 1-.5-1.65l2.36-2.51a1 1 0 0 0 .24-.45l1.04-4.31a1 1 0 0 1 .72-.73l3.52-.9a1 1 0 0 1 1.24 1.06l-.5 4.89a1 1 0 0 1-.16.46'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m14.33 5.22 5.6.38a1 1 0 0 1 .89.72l1.08 3.72a1 1 0 0 1-1.18 1.26l-3.35-.79a1 1 0 0 0-.5.02l-4.26 1.25a1 1 0 0 1-1-.26L9.07 8.93a1 1 0 0 1 .3-1.61l4.48-2.02a1 1 0 0 1 .48-.08'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M4.94 13.48 2.47 8.44a1 1 0 0 1 .17-1.13l2.69-2.8a1 1 0 0 1 1.68.4L8 8.2a1 1 0 0 0 .26.43l3.21 3.06a1 1 0 0 1 .28 1l-.98 3.5a1 1 0 0 1-1.55.53l-3.98-2.87a1 1 0 0 1-.31-.37'
        fill='currentColor'
      />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
      <path d='M22.3 12s-2.4-1.42-5.14-1.42S12.01 12 12.01 12' stroke='currentColor' />
      <path d='M6.86 20.92s2.44-1.37 3.81-3.74 1.34-5.17 1.34-5.17' stroke='currentColor' />
      <path d='M6.87 3.1S6.83 5.9 8.2 8.26A11.4 11.4 0 0 0 12.01 12' stroke='currentColor' />
      <path d='M2.59 7.9s.78 3.13 2.9 5.66a16 16 0 0 0 5.05 3.84' stroke='currentColor' />
      <path d='M13.1 22.21s2.3-2.24 3.43-5.33c1.13-3.1.8-6.3.8-6.3' stroke='currentColor' />
      <path d='M20.33 5.96s-3.08-.94-6.33-.42-5.9 2.37-5.9 2.37' stroke='currentColor' />
    </svg>
  )
}
