import type { Icon } from './types'

export const IconHelp: Icon = ({
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
      data-slot='icon-ui-help'
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
        r='10.25'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.25' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M12 13.98c0-2.23 2.9-2.4 2.9-4.77 0-1.5-1.3-2.71-2.9-2.71S9.1 7.7 9.1 9.2'
        stroke='currentColor'
      />
      <path
        d='M12.42 17.37a.42.42 0 1 1-.84 0 .42.42 0 0 1 .84 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
