import type { Icon } from './types'

export const IconSubscript: Icon = ({
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
      data-slot='icon-ui-subscript'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M17.59 14.47c.5-.54.97-.96 2-.96 1.8 0 2.1 1.88 1.19 2.82-.53.55-1.68 1.37-2.58 2.14-.45.39-.67.58-.55.9s.44.33 1.09.33h2.54'
        stroke='currentColor'
      />
      <path d='m3.28 4.3 11.07 11.08' stroke='currentColor' />
      <path d='M14.35 4.3 3.28 15.37' stroke='currentColor' />
    </svg>
  )
}
