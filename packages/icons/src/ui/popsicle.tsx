import type { Icon } from './types'

export const IconPopsicle: Icon = ({
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
      data-slot='icon-ui-popsicle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.96 17.63c1.57 1.57 2.35 2.35 3.3 2.5a3 3 0 0 0 1 0c.94-.15 1.72-.93 3.28-2.5l6.02-6.01a5.78 5.78 0 0 0-8.18-8.18L6.37 9.46c-1.57 1.56-2.35 2.34-2.5 3.28a3 3 0 0 0 0 1c.15.95.93 1.73 2.5 3.3z'
        fill='currentColor'
      />
      <path d='m6.57 17.43-4.9 4.9' stroke='currentColor' />
      <path
        d='M6.9 17.56c1.57 1.56 2.35 2.34 3.29 2.5a3 3 0 0 0 1 0c.95-.16 1.73-.94 3.29-2.5l6.08-6.08a5.68 5.68 0 0 0-8.04-8.04L6.44 9.52c-1.56 1.56-2.34 2.34-2.5 3.28a3 3 0 0 0 0 1.01c.16.94.94 1.72 2.5 3.28z'
        stroke='currentColor'
      />
    </svg>
  )
}
