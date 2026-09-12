import type { Icon } from './types'

export const IconGlasses: Icon = ({
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
      data-slot='icon-ui-glasses'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.63 14.52a4.12 4.12 0 1 0 8.23 0 4.12 4.12 0 0 0-8.23 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.14 14.52a4.12 4.12 0 1 0 8.23 0 4.12 4.12 0 0 0-8.23 0'
        fill='currentColor'
      />
      <path
        d='M1.63 14.52a4.1 4.1 0 0 0 4.12 4.11 4.12 4.12 0 1 0-4.12-4.11'
        stroke='currentColor'
      />
      <path
        d='M14.14 14.52a4.1 4.1 0 0 0 4.12 4.11 4.12 4.12 0 1 0-4.12-4.11'
        stroke='currentColor'
      />
      <path d='m2.6 11.83 3.02-5.3a2.05 2.05 0 0 1 3.35-.32' stroke='currentColor' />
      <path d='m21.4 11.83-3-5.28a2.06 2.06 0 0 0-3.37-.3' stroke='currentColor' />
      <path d='M9.86 13.99c.69-.67 1.25-.9 2.14-.9s1.45.23 2.14.9' stroke='currentColor' />
    </svg>
  )
}
