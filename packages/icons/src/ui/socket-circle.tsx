import type { Icon } from './types'

export const IconSocketCircle: Icon = ({
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
      data-slot='icon-ui-socket-circle'
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
        d='M12 2.42a9.58 9.58 0 1 1 0 19.16 9.58 9.58 0 0 1 0-19.16m0 15.96a6.38 6.38 0 1 1 0-12.76 6.38 6.38 0 0 1 0 12.76'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='6.38' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='M9.89 13.52v-3.04' stroke='currentColor' />
      <path d='M14.11 13.52v-3.04' stroke='currentColor' />
      <circle cx='12' cy='12' r='10.22' transform='rotate(90 12 12)' stroke='currentColor' />
    </svg>
  )
}
