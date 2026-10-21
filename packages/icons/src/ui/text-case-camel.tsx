import type { Icon } from './types'

export const IconTextCaseCamel: Icon = ({
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
      data-slot='icon-ui-text-case-camel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m11.98 18.97 2.83-9.9c.78-2.75 1.17-4.12 1.93-4.12.75 0 1.14 1.38 1.92 4.13l2.78 9.89'
        stroke='currentColor'
      />
      <path d='M19.72 12.9H13.7' stroke='currentColor' />
      <path
        d='M5.47 18.82c-1.61 0-2.91-1.18-2.91-2.62 0-1.93 1.3-2.63 2.9-2.63h2.92v2.63c0 1.44-1.3 2.62-2.91 2.62'
        stroke='currentColor'
      />
      <path
        d='M3.29 9.98C4.03 9.03 5 8.48 6.26 8.7c1.94.36 2.4 1.6 2.4 3.7v5.28c0 .97.4 1.28.4 1.28'
        stroke='currentColor'
      />
    </svg>
  )
}
