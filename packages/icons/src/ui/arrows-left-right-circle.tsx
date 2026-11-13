import type { Icon } from './types'

export const IconArrowsLeftRightCircle: Icon = ({
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
      data-slot='icon-ui-arrows-left-right-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <path
        d='M15.4 17.53c1.15-1.15 1.73-1.72 1.8-2.43a2 2 0 0 0 0-.41c-.07-.71-.65-1.29-1.8-2.44'
        stroke='currentColor'
      />
      <path
        d='M8.6 11.75c-1.15-1.15-1.73-1.72-1.8-2.43a2 2 0 0 1 0-.41c.07-.71.65-1.29 1.8-2.44'
        stroke='currentColor'
      />
      <path d='M6.76 14.89h10.35' stroke='currentColor' />
      <path d='M17.1 9.11H6.77' stroke='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
    </svg>
  )
}
