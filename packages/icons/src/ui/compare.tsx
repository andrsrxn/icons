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
      <path
        d='M14.76 4.7h1.84m5.67 8.9v-3.18m0-3.9c0-1-.81-1.82-1.81-1.82h-.55m2.36 12.73c0 1-.81 1.82-1.81 1.82h-.55m-5.15.05h1.84'
        stroke='currentColor'
      />
      <path d='M11.51 2.3v19.4' stroke='currentColor' />
    </svg>
  )
}
