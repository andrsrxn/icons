import type { Icon } from './types'

export const IconEarbudsRight: Icon = ({
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
      data-slot='icon-ui-earbuds-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M15.46 12.07a4.8 4.8 0 1 1 4.8-4.8v13.55h-4.8z' fill='currentColor' />
      <path d='M15.46 12.07a4.8 4.8 0 0 1-4.79-4.8 4.8 4.8 0 0 1 9.59 0' stroke='currentColor' />
      <path
        d='M20.26 7.07v12.05c0 .84 0 1.25-.17 1.57a1.5 1.5 0 0 1-.66.66c-.32.17-.73.17-1.57.17s-1.25 0-1.57-.17a1.5 1.5 0 0 1-.66-.66c-.17-.32-.17-.73-.17-1.57v-7.05'
        stroke='currentColor'
      />
      <path d='m5.57 17.53 2.88 3.29' stroke='currentColor' />
      <path d='M3.74 12.8v8.02' stroke='currentColor' />
      <path
        d='M3.78 12.8h2.85c1.2 0 2.17 1.04 2.17 2.3 0 1.27-.97 2.3-2.17 2.3H3.78'
        stroke='currentColor'
      />
      <path d='M14.45 8.63v-2.7' stroke='currentColor' />
    </svg>
  )
}
