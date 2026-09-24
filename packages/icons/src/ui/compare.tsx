import type { Icon } from './types'

export const IconCompare: Icon = ({
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
      data-slot='icon-ui-compare'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.98'
        y='4.73'
        width='20.29'
        height='14.55'
        rx='3'
        fill='currentColor'
      />
      <path
        d='M11.51 4.73H7.98c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v2.54c0 2.83 0 4.25.88 5.13s2.3.87 5.12.87h3.53'
        stroke='currentColor'
      />
      <path d='M11.51 2.3v19.4' stroke='currentColor' />
      <path d='M19.39 4.76h.06A2.74 2.74 0 0 1 22.2 7.5' stroke='currentColor' />
      <path d='M19.57 19.26h.06c1.48 0 2.68-1.2 2.68-2.68' stroke='currentColor' />
      <path d='M22.28 10.7v2.67' stroke='currentColor' />
      <path d='M14.43 19.25h1.94' stroke='currentColor' />
      <path d='M14.43 4.75h1.94' stroke='currentColor' />
    </svg>
  )
}
