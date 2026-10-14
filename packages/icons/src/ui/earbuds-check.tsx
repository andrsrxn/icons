import type { Icon } from './types'

export const IconEarbudsCheck: Icon = ({
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
      data-slot='icon-ui-earbuds-check'
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
        d='M18.04 12.38a4.33 4.33 0 0 0 4.25-4.4c0-2.42-1.9-4.4-4.25-4.4a4.33 4.33 0 0 0-4.26 4.4v12.43h2.76c.83 0 1.5-.67 1.5-1.5z'
        fill='currentColor'
      />
      <path d='M5.97 12.03A4.24 4.24 0 0 1 1.7 7.78a4.25 4.25 0 0 1 8.5 0' stroke='currentColor' />
      <path d='M13.78 7.84a4.25 4.25 0 1 1 4.25 4.25v1.82' stroke='currentColor' />
      <path
        d='M10.22 7.6v10.69c0 .58 0 .87-.08 1.1-.15.45-.5.8-.94.94-.23.08-.52.08-1.1.08s-.88 0-1.12-.08a1.5 1.5 0 0 1-.93-.93c-.08-.24-.08-.53-.08-1.11v-6.26'
        stroke='currentColor'
      />
      <path
        d='M13.78 7.66v10.83c0 .45 0 .67.05.86.13.53.55.94 1.08 1.08.18.04.4.04.85.04'
        stroke='currentColor'
      />
      <path d='M5.13 8.98V6.7' stroke='currentColor' />
      <path d='M18.87 8.98V6.7' stroke='currentColor' />
      <path
        d='m17.19 17.28.02.02c.71.88 1.07 1.31 1.55 1.31.47 0 .83-.44 1.54-1.31l1.77-2.17'
        stroke='currentColor'
      />
    </svg>
  )
}
