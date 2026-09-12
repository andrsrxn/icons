import type { Icon } from './types'

export const IconMouseRightClick: Icon = ({
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
      data-slot='icon-ui-mouse-right-click'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M20.54 5.99h1.65' stroke='currentColor' />
      <path d='m18.99 2.96.98-1.37' stroke='currentColor' />
      <path opacity='.2' d='M18.42 17.1H1.82v5.31h16.6z' fill='currentColor' />
      <path
        opacity='.2'
        d='M10.12 18.13V15.7c0-.98.28-1.93.81-2.75l.21-.32A4.5 4.5 0 0 0 11 7.5a4.5 4.5 0 0 1-.87-2.66V2.37a8.46 8.46 0 0 1 8.46 8.47v7.3z'
        fill='currentColor'
      />
      <path d='M18.42 22.41V10.38a8.3 8.3 0 0 0-16.6 0v12.03' stroke='currentColor' />
      <path d='M1.81 17.34h16.61' stroke='currentColor' />
      <rect x='7.89' y='6.68' width='4.62' height='7.06' rx='2.31' stroke='currentColor' />
      <path d='M10.16 17.3v-3.56' stroke='currentColor' />
      <path d='M10.16 6.62V3' stroke='currentColor' />
    </svg>
  )
}
