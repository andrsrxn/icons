import type { Icon } from './types'

export const IconProgressHigh: Icon = ({
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
      data-slot='icon-ui-progress-high'
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
        d='M12 18.96a6.96 6.96 0 0 0 0-13.92V12H5.04A6.96 6.96 0 0 0 12 18.96'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.25' stroke='currentColor' />
      <path
        clipRule='evenodd'
        d='M12 18.96a6.96 6.96 0 0 0 1.97-13.64c-.78-.23-1.17-.34-1.57-.04s-.4.78-.4 1.76V10c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H7.04c-.98 0-1.46 0-1.76.4s-.19.8.04 1.57a7 7 0 0 0 6.68 5'
        stroke='currentColor'
      />
    </svg>
  )
}
