import type { Icon } from './types'

export const IconPark: Icon = ({
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
      data-slot='icon-ui-park'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='12.21'
        height='9.55'
        rx='4.77'
        transform='matrix(0 1 1 0 2.58 2.94)'
        fill='currentColor'
      />
      <rect
        width='11.46'
        height='9.55'
        rx='4'
        transform='matrix(0 1 1 0 2.58 3.3)'
        stroke='currentColor'
      />
      <path d='M7.35 18.24V6.52' stroke='currentColor' />
      <path d='M14 14.9h7.4' stroke='currentColor' />
      <path d='m14 18.13 2-3.23' stroke='currentColor' />
      <path d='m21.4 18.13-1.94-3.23' stroke='currentColor' />
      <path d='m7.35 12.06-2.1-2.1' stroke='currentColor' />
      <path d='m7.35 9.96 2.1-2.1' stroke='currentColor' />
      <path
        opacity='.2'
        d='M1.19 18.15v1.39c0 .92 0 1.38.3 1.66.32.28.82.28 1.82.28h17.22c1.07 0 1.6 0 1.94-.3.34-.32.34-.81.34-1.8v-1.23z'
        fill='currentColor'
      />
      <path d='M22.63 18.24H1.48' stroke='currentColor' />
    </svg>
  )
}
