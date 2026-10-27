import type { Icon } from './types'

export const IconTextSize: Icon = ({
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
      data-slot='icon-ui-text-size'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m1.63 18.9 3.3-10.26c.8-2.44 1.19-3.67 1.92-3.67s1.12 1.23 1.9 3.68L12 18.9'
        stroke='currentColor'
      />
      <path
        d='m15 18.9 1.81-5.62c.79-2.45 1.18-3.67 1.91-3.67s1.12 1.22 1.9 3.67l1.78 5.62'
        stroke='currentColor'
      />
      <path d='M10.1 13H3.53' stroke='currentColor' />
      <path d='M21.05 14.69h-4.7' stroke='currentColor' />
    </svg>
  )
}
