import type { Icon } from './types'

export const IconStrategy: Icon = ({
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
      data-slot='icon-ui-strategy'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='18.15' cy='18.15' r='3.15' fill='currentColor' />
      <circle cx='18.15' cy='18.15' r='3.15' stroke='currentColor' />
      <path
        d='m16.59 4.18.62.44c1.53 1.1 2.3 1.65 2.44 2.47.13.81-.42 1.58-1.51 3.12l-.45.62'
        stroke='currentColor'
      />
      <path
        d='M5.65 20.73c.55-4.07 1.93-6.68 5.07-9.56 2.75-2.52 4.96-3.57 8.53-4.06'
        stroke='currentColor'
      />
      <path d='m2.73 2.73 5.61 5.61' stroke='currentColor' />
      <path d='M8.34 2.73 2.73 8.35' stroke='currentColor' />
    </svg>
  )
}
