import type { Icon } from './types'

export const IconSuperscript: Icon = ({
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
      data-slot='icon-ui-superscript'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M17.62 5.25c.5-.54.98-.95 2-.95 1.8 0 2.1 1.88 1.2 2.82-.53.54-1.68 1.36-2.59 2.14-.45.39-.67.58-.55.9s.45.33 1.1.33h2.53'
        stroke='currentColor'
      />
      <path d='M3.31 19.7 14.38 8.61' stroke='currentColor' />
      <path d='M14.38 19.7 3.31 8.63' stroke='currentColor' />
    </svg>
  )
}
