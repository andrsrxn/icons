import type { Icon } from './types'

export const IconLibrary: Icon = ({
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
      data-slot='icon-ui-library'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M2.46 3.79h5.23v5.79H2.46z' />
      <path opacity='.2' fill='currentColor' d='M7.69 3.79h5.23v5.79H7.69z' />
      <rect
        opacity='.2'
        x='12.92'
        y='4.51'
        width='5.23'
        height='5.77'
        rx='2'
        transform='rotate(-15 12.92 4.5)'
        fill='currentColor'
      />
      <rect x='2.46' y='3.54' width='5.23' height='16.92' rx='1.5' stroke='currentColor' />
      <rect x='7.69' y='3.54' width='5.23' height='16.92' rx='1.5' stroke='currentColor' />
      <rect
        x='12.92'
        y='4.51'
        width='5.23'
        height='16.92'
        rx='1.5'
        transform='rotate(-15 12.92 4.5)'
        stroke='currentColor'
      />
      <path d='M2.63 9.16h10.11' stroke='currentColor' />
      <path d='m14.63 9.16 4.36-1.32' stroke='currentColor' />
    </svg>
  )
}
