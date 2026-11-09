import type { Icon } from './types'

export const IconEarbudsX: Icon = ({
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
      data-slot='icon-ui-earbuds-x'
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
        d='M18.04 12.38a4.33 4.33 0 0 0 4.25-4.4c0-2.42-1.9-4.4-4.25-4.4a4.33 4.33 0 0 0-4.26 4.4v12.43h4.26z'
        fill='currentColor'
      />
      <path d='M10.22 7.78a4.25 4.25 0 1 0-4.25 4.25' stroke='currentColor' />
      <path d='M13.78 7.84a4.25 4.25 0 1 1 4.25 4.25' stroke='currentColor' />
      <path
        d='M10.22 7.6v10.9a2 2 0 0 1-1.9 1.9h-.45a2 2 0 0 1-1.9-1.9v-6.48'
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
