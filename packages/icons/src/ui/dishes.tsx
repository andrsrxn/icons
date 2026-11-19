import type { Icon } from './types'

export const IconDishes: Icon = ({
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
      data-slot='icon-ui-dishes'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.6 16.4a7.5 7.5 0 1 0-9.03-9.07c1.42-.07 4.77.23 6.87 2 2.1 1.8 2.31 5.46 2.16 7.07'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <circle cx='9.27' cy='14.73' r='7.49' stroke='currentColor' />
      <path d='M16.85 16.34a7.5 7.5 0 1 0-9.27-9.05' stroke='currentColor' />
      <circle cx='9.27' cy='14.73' r='4.12' stroke='currentColor' />
      <path d='M16.58 12.85a4.12 4.12 0 1 0-5.46-5.48' stroke='currentColor' />
    </svg>
  )
}
