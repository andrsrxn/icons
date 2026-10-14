import type { Icon } from './types'

export const IconFaceSatisfied: Icon = ({
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
      data-slot='icon-ui-face-satisfied'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='10.26'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.26' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='M15.71 15.72s-1.3 1.35-3.71 1.35-3.71-1.35-3.71-1.35' stroke='currentColor' />
      <path d='M6.43 9.36s.59.73 1.86.73 1.85-.73 1.85-.73' stroke='currentColor' />
      <path d='M13.86 9.36s.58.73 1.85.73 1.86-.73 1.86-.73' stroke='currentColor' />
    </svg>
  )
}
