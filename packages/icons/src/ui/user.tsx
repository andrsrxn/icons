import type { Icon } from './types'

export const IconUser: Icon = ({
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
      data-slot='icon-ui-user'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.35 7.9a5.35 5.35 0 1 1-10.7 0 5.35 5.35 0 0 1 10.7 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20.3 21.72H3.7a8.4 8.4 0 0 1 8.3-8.46c4.59 0 8.3 3.79 8.3 8.46'
        fill='currentColor'
      />
      <path
        d='M17.35 7.9A5.33 5.33 0 0 1 12 13.27a5.35 5.35 0 1 1 5.35-5.35'
        stroke='currentColor'
      />
      <path d='M20.3 21.56a8.3 8.3 0 0 0-16.6 0' stroke='currentColor' />
    </svg>
  )
}
