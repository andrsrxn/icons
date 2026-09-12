import type { Icon } from './types'

export const IconStory: Icon = ({
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
      data-slot='icon-ui-story'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <ellipse
        opacity='.2'
        cx='12.07'
        cy='11.98'
        rx='10.29'
        ry='10.25'
        transform='rotate(90 12.07 11.98)'
        fill='currentColor'
      />
      <path d='M12 22.25a10.25 10.25 0 0 1 0-20.5' stroke='currentColor' />
      <path d='M16.39 2.7a10.3 10.3 0 0 1 5.06 5.18' stroke='currentColor' />
      <path d='M18.92 19.62q-.88.79-1.92 1.36' stroke='currentColor' />
      <path d='M22.32 12c0 1.7-.42 3.3-1.15 4.72' stroke='currentColor' />
    </svg>
  )
}
