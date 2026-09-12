import type { Icon } from './types'

export const IconControls: Icon = ({
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
      data-slot='icon-ui-controls'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='8.98'
        cy='7.88'
        r='2.79'
        transform='rotate(90 8.98 7.88)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='2.79'
        cy='2.79'
        r='2.79'
        transform='matrix(0 1 1 0 12.23 13.33)'
        fill='currentColor'
      />
      <path d='M21.5 7.88h-9.73' stroke='currentColor' />
      <path d='M2.5 16.12h9.73' stroke='currentColor' />
      <path d='M6.18 7.88H2.5' stroke='currentColor' />
      <path d='M17.82 16.12h3.68' stroke='currentColor' />
      <circle cx='8.98' cy='7.88' r='2.79' transform='rotate(90 8.98 7.88)' stroke='currentColor' />
      <circle
        cx='2.79'
        cy='2.79'
        r='2.79'
        transform='matrix(0 1 1 0 12.23 13.33)'
        stroke='currentColor'
      />
    </svg>
  )
}
