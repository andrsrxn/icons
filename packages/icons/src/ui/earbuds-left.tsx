import type { Icon } from './types'

export const IconEarbudsLeft: Icon = ({
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
      data-slot='icon-ui-earbuds-left'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M8.48 12.07a4.8 4.8 0 1 0-4.79-4.8v13.55h4.8z' fill='currentColor' />
      <path d='M3.69 7.28a4.8 4.8 0 1 1 4.79 4.79' stroke='currentColor' />
      <path
        d='M3.69 7.07v12.05c0 .37 0 .55.02.7a2 2 0 0 0 1.67 1.67c.15.03.33.03.7.03s.55 0 .7-.03a2 2 0 0 0 1.67-1.66c.03-.16.03-.34.03-.71v-7.05'
        stroke='currentColor'
      />
      <path d='M16.79 12.8v6.02c0 .94 0 1.41.3 1.7.28.3.75.3 1.7.3h2.25' stroke='currentColor' />
      <path d='M9.43 8.63v-2.7' stroke='currentColor' />
    </svg>
  )
}
