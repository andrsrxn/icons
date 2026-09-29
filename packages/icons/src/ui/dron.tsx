import type { Icon } from './types'

export const IconDron: Icon = ({
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
      data-slot='icon-ui-dron'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.77 5.22a3.27 3.27 0 1 0 6.55 0 3.27 3.27 0 0 0-6.55 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M22.23 5.22a3.27 3.27 0 1 1-6.55 0 3.27 3.27 0 0 1 6.55 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M1.77 18.78a3.27 3.27 0 1 1 6.55 0 3.27 3.27 0 0 1-6.55 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M22.23 18.78a3.27 3.27 0 1 0-6.55 0 3.27 3.27 0 0 0 6.55 0'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='10.73'
        height='5.4'
        rx='2.7'
        transform='matrix(0 -1 -1 0 14.7 17.37)'
        fill='currentColor'
      />
      <rect
        width='10.73'
        height='5.4'
        rx='2.7'
        transform='matrix(0 -1 -1 0 14.7 17.37)'
        stroke='currentColor'
      />
      <path d='M7.43 7.6 9.3 9.47' stroke='currentColor' />
      <path d='M5.57 4.68 4.51 5.75' stroke='currentColor' />
      <path d='m18.43 4.68 1.06 1.07' stroke='currentColor' />
      <path d='m5.57 19.32-1.06-1.07' stroke='currentColor' />
      <path d='m18.43 19.32 1.06-1.07' stroke='currentColor' />
      <path d='M16.53 7.64 14.7 9.47' stroke='currentColor' />
      <path d='m7.45 16.38 1.85-1.85' stroke='currentColor' />
      <path d='m16.54 16.36-1.84-1.83' stroke='currentColor' />
      <path
        d='M1.77 5.22a3.26 3.26 0 0 0 3.27 3.27 3.27 3.27 0 1 0-3.27-3.27'
        stroke='currentColor'
      />
      <path
        d='M22.23 5.22a3.26 3.26 0 0 1-3.27 3.27 3.27 3.27 0 1 1 3.27-3.27'
        stroke='currentColor'
      />
      <path
        d='M1.77 18.78a3.26 3.26 0 0 1 3.27-3.27 3.27 3.27 0 1 1-3.27 3.27'
        stroke='currentColor'
      />
      <path
        d='M22.23 18.78a3.26 3.26 0 0 0-3.27-3.27 3.27 3.27 0 1 0 3.27 3.27'
        stroke='currentColor'
      />
    </svg>
  )
}
