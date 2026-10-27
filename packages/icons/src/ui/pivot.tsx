import type { Icon } from './types'

export const IconPivot: Icon = ({
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
      data-slot='icon-ui-pivot'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.02 5.53c0-1.43 0-2.15.35-2.66a2 2 0 0 1 .52-.52C3.39 2 4.12 2 5.55 2c.72 0 1.08 0 1.34.18a1 1 0 0 1 .25.25c.18.26.18.62.18 1.34v16.46c0 .72 0 1.08-.18 1.34a1 1 0 0 1-.25.25c-.26.18-.62.18-1.34.18-1.43 0-2.15 0-2.66-.35a2 2 0 0 1-.52-.52c-.35-.5-.35-1.23-.35-2.66z'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='7.32'
        y='7.24'
        width='5'
        height='14.37'
        rx='1'
        transform='rotate(-90 7.32 7.24)'
        fill='currentColor'
      />
      <path
        d='M9.52 22H8.01c-2.83 0-4.24 0-5.12-.88S2 18.82 2 16V8c0-2.83 0-4.24.88-5.12S5.19 2 8 2h8c2.83 0 4.24 0 5.12.88S22 5.18 22 8v1.47'
        stroke='currentColor'
      />
      <path d='M7.32 22V2' stroke='currentColor' />
      <path d='M2.02 7.24H22' stroke='currentColor' />
      <path
        d='M18.36 14.16c.98-.97 1.47-1.46 2.07-1.47h.06c.6 0 1.1.5 2.07 1.47'
        stroke='currentColor'
      />
      <path
        d='M14.3 22.46c-.97-.96-1.46-1.44-1.47-2.04v-.08c.01-.6.5-1.08 1.46-2.05'
        stroke='currentColor'
      />
      <path
        d='M20.46 12.93v3.45c0 1.88 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59h-3.25'
        stroke='currentColor'
      />
    </svg>
  )
}
