import type { Icon } from './types'

export const IconArrowsUpDownCircle: Icon = ({
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
      data-slot='icon-ui-arrows-up-down-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <path
        d='M6.47 8.6C7.62 7.45 8.19 6.87 8.9 6.8a2 2 0 0 1 .41 0c.71.07 1.29.65 2.44 1.8'
        stroke='currentColor'
      />
      <path
        d='M12.25 15.4c1.15 1.15 1.72 1.73 2.43 1.8a2 2 0 0 0 .41 0c.71-.07 1.29-.65 2.44-1.8'
        stroke='currentColor'
      />
      <path d='M9.11 17.24V6.89' stroke='currentColor' />
      <path d='M14.89 6.9v10.34' stroke='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
    </svg>
  )
}
