import type { Icon } from './types'

export const IconSixCircle: Icon = ({
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
      data-slot='icon-ui-six-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path
        d='M9.35 14.47c.2 1.32 1.24 2.68 2.72 2.68s2.68-1.2 2.68-2.68-1.01-2.65-2.5-2.66c-1 0-2.65.56-2.9 2.66m0 0a7.6 7.6 0 0 1 .76-4.87 5.5 5.5 0 0 1 3.27-2.75'
        stroke='currentColor'
      />
    </svg>
  )
}
