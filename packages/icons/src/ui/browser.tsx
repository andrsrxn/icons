import type { Icon } from './types'

export const IconBrowser: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-browser'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.73 7.87A3.87 3.87 0 0 1 5.61 4h12.78a3.87 3.87 0 0 1 3.88 3.87c0 .54-.44.97-.97.97H2.7a.97.97 0 0 1-.97-.97'
        fill='currentColor'
      />
      <path
        d='M9.73 20h4.54c3.77 0 5.65 0 6.82-1.17 1.18-1.17 1.18-3.06 1.18-6.83v0c0-3.77 0-5.66-1.18-6.83C19.92 4 18.04 4 14.27 4H9.73C5.96 4 4.08 4 2.91 5.17 1.73 6.34 1.73 8.23 1.73 12v0c0 3.77 0 5.66 1.18 6.83C4.08 20 5.96 20 9.73 20'
        stroke='currentColor'
      />
      <path d='M22.05 8.84H1.95' stroke='currentColor' />
    </svg>
  )
}
