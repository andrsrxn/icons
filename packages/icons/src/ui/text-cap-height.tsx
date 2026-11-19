import type { Icon } from './types'

export const IconTextCapHeight: Icon = ({
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
      data-slot='icon-ui-text-cap-height'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.36 3.56H2.64' stroke='currentColor' />
      <path d='M21.36 19.78H2.64' stroke='currentColor' />
      <path
        d='m7.06 18.58 2.34-7.95h0c1.15-3.9 1.72-5.86 2.8-5.85s1.6 1.98 2.64 5.92l2.1 7.88'
        stroke='currentColor'
      />
      <path d='M8.91 13.28h6.37' stroke='currentColor' />
    </svg>
  )
}
