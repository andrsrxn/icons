import type { Icon } from './types'

export const IconEarbudsLeft: Icon = ({
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
      data-slot='icon-ui-earbuds-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M8.48 12.07a4.8 4.8 0 1 0-4.79-4.8v13.55h4.8z' fill='currentColor' />
      <path d='M8.48 12.07a4.8 4.8 0 0 0 4.8-4.8 4.8 4.8 0 0 0-9.6 0' stroke='currentColor' />
      <path
        d='M3.69 7.07v12.05c0 .84 0 1.25.16 1.57q.22.44.66.66c.32.17.74.17 1.57.17s1.26 0 1.58-.17q.43-.22.66-.66c.16-.32.16-.73.16-1.57v-7.05'
        stroke='currentColor'
      />
      <path d='M16.79 12.8v8.02' stroke='currentColor' />
      <path d='M21.04 20.82h-4.25' stroke='currentColor' />
      <path d='M9.43 8.63v-2.7' stroke='currentColor' />
    </svg>
  )
}
