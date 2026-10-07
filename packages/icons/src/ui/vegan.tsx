import type { Icon } from './types'

export const IconVegan: Icon = ({
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
      data-slot='icon-ui-vegan'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.85 4.7a7 7 0 0 1 3.94-1.08c.96 0 1.44 0 2.04.78s.48 1.23.24 2.12a6.7 6.7 0 0 1-2.21 3.53c-1.98 1.62-4.2.94-5.17-.24-.9-1.08-1.08-3.65 1.16-5.12'
        fill='currentColor'
      />
      <path
        d='M15.85 4.7a7.6 7.6 0 0 1 5.22-.99c.54.08.81.12 1.06.43.25.32.22.59.17 1.12a7 7 0 0 1-2.44 4.79c-1.98 1.62-4.2.94-5.17-.24-.9-1.08-1.08-3.65 1.16-5.12'
        stroke='currentColor'
      />
      <path
        d='M17.81 7.65a16.2 16.2 0 0 0-8.35 13.02c-.5-6.8-4.2-10.99-7.68-13.02'
        stroke='currentColor'
      />
    </svg>
  )
}
