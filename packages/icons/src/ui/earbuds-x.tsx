import type { Icon } from './types'

export const IconEarbudsX: Icon = ({
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
      data-slot='icon-ui-earbuds-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.96 12.03a4.25 4.25 0 1 1 4.26-4.25v12.01H5.96z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M18.04 12.38a4.33 4.33 0 0 0 4.25-4.4c0-2.42-1.9-4.4-4.25-4.4a4.33 4.33 0 0 0-4.26 4.4v12.43h4.26z'
        fill='currentColor'
      />
      <path d='M5.97 12.03A4.24 4.24 0 0 1 1.7 7.78a4.25 4.25 0 0 1 8.5 0' stroke='currentColor' />
      <path d='M18.03 12.1a4.24 4.24 0 0 0 4.26-4.26 4.25 4.25 0 1 0-8.5 0' stroke='currentColor' />
      <path
        d='M10.22 7.6v10.69c0 .58 0 .87-.08 1.1-.15.45-.5.8-.94.94-.23.08-.52.08-1.1.08s-.88 0-1.12-.08a1.5 1.5 0 0 1-.93-.93c-.08-.24-.08-.53-.08-1.11v-6.26'
        stroke='currentColor'
      />
      <path d='M13.78 7.66v11.47c0 .74.6 1.34 1.35 1.34' stroke='currentColor' />
      <path d='M5.13 8.98V6.7' stroke='currentColor' />
      <path d='M18.87 8.98V6.7' stroke='currentColor' />
      <path d='m18.04 15.21 4.25 4.25' stroke='currentColor' />
      <path d='m18.04 19.46 4.24-4.25' stroke='currentColor' />
    </svg>
  )
}
