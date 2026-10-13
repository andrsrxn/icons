import type { Icon } from './types'

export const IconStock: Icon = ({
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
      data-slot='icon-ui-stock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m1.76 16.35.93-4c.3-1.27.45-1.91.82-1.94s.6.58 1.09 1.8l.43 1.11c.34.86.51 1.3.83 1.32.32.01.54-.4.98-1.2l.16-.3c.45-.82.67-1.23.99-1.21s.49.46.82 1.33l.42 1.1c.52 1.35.78 2.03 1.16 2 .38-.04.5-.76.76-2.19l.65-3.66c.32-1.8.48-2.7.88-2.72s.63.87 1.07 2.65l.57 2.28c.26 1.03.39 1.55.72 1.6.34.04.6-.43 1.12-1.36l.65-1.15c.35-.62.52-.93.8-.95s.48.28.9.87l.4.58c.44.64.66.96.95.94s.45-.38.77-1.09l1.73-3.74'
        stroke='currentColor'
      />
      <path d='M17.6 4.08V2.59' stroke='currentColor' />
      <path d='M17.6 21.38v-1.46' stroke='currentColor' />
      <path d='M17.6 17.2v-1.45' stroke='currentColor' />
      <path
        d='M18.1 7.35a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
