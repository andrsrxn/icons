import type { Icon } from './types'

export const IconBorderBottom: Icon = ({
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
      data-slot='icon-ui-border-bottom'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='2.05'
        y='21.88'
        width='18.48'
        height='18.48'
        rx='3'
        transform='rotate(-90 2.05 21.88)'
        fill='currentColor'
      />
      <path d='M7.93 12.64h6.73' stroke='currentColor' />
      <path d='M11.29 16V9.29' stroke='currentColor' />
      <path
        d='M20.53 19.32a2.57 2.57 0 0 1-2.56 2.56H4.62a2.57 2.57 0 0 1-2.57-2.56'
        stroke='currentColor'
      />
      <path d='M20.58 6.03v-.06a2.6 2.6 0 0 0-2.6-2.61' stroke='currentColor' />
      <path d='M2 5.89v-.06c0-1.37 1.1-2.47 2.47-2.47' stroke='currentColor' />
      <path d='M12.45 3.42h-2.26' stroke='currentColor' />
      <path d='M2.1 11.53v2.25' stroke='currentColor' />
      <path d='M20.57 11.53v2.25' stroke='currentColor' />
    </svg>
  )
}
