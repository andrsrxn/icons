import type { Icon } from './types'

export const IconTextInitial: Icon = ({
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
      data-slot='icon-ui-text-initial'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.3 5.35h-8.25' stroke='currentColor' />
      <path d='M21.3 15.1H2.7' stroke='currentColor' />
      <path d='M21.3 10.06h-8.25' stroke='currentColor' />
      <path d='M21.3 19.96H2.7' stroke='currentColor' />
      <path
        d='m3.56 11.42 1.21-3.87c.79-2.51 1.18-3.77 1.92-3.77s1.12 1.26 1.9 3.77l1.2 3.87'
        stroke='currentColor'
      />
      <path d='M8.79 8.34H5.1' stroke='currentColor' />
    </svg>
  )
}
