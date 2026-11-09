import type { Icon } from './types'

export const IconEarbuds: Icon = ({
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
      data-slot='icon-ui-earbuds'
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
        d='M18.04 12.1a4.25 4.25 0 1 0-4.26-4.26v12.01h4.26z'
        fill='currentColor'
      />
      <path d='M10.22 7.78a4.25 4.25 0 1 0-4.25 4.25' stroke='currentColor' />
      <path d='M13.78 7.84a4.25 4.25 0 1 1 4.25 4.25' stroke='currentColor' />
      <path
        d='M10.22 7.6v10.9a2 2 0 0 1-1.9 1.9h-.45a2 2 0 0 1-1.9-1.9v-6.48'
        stroke='currentColor'
      />
      <path
        d='M13.78 7.66v10.91a2 2 0 0 0 1.9 1.9h.45a2 2 0 0 0 1.9-1.9V12.1'
        stroke='currentColor'
      />
      <path d='M5.13 8.98V6.7' stroke='currentColor' />
      <path d='M18.87 8.98V6.7' stroke='currentColor' />
    </svg>
  )
}
