import type { Icon } from './types'

export const IconEarbudsCheck: Icon = ({
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
      data-slot='icon-ui-earbuds-check'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
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
      <path d='M10.22 7.78a4.25 4.25 0 1 0-4.25 4.25' stroke='currentColor' />
      <path d='M13.78 7.84a4.25 4.25 0 1 1 4.25 4.25v1.82' stroke='currentColor' />
      <path
        d='M10.22 7.6v10.9a2 2 0 0 1-1.9 1.9h-.45a2 2 0 0 1-1.9-1.9v-6.48'
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
