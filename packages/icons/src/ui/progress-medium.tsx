import type { Icon } from './types'

export const IconProgressMedium: Icon = ({
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
      data-slot='icon-ui-progress-medium'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 18.96a6.96 6.96 0 1 0 0-13.92z'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.25' stroke='currentColor' />
      <path
        clipRule='evenodd'
        d='M12 16.96c0 .98 0 1.46.4 1.76s.8.19 1.57-.04a6.96 6.96 0 0 0 0-13.36c-.78-.23-1.17-.34-1.57-.04s-.4.78-.4 1.76z'
        stroke='currentColor'
      />
    </svg>
  )
}
