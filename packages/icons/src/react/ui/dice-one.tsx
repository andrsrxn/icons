import type { Icon } from './types'

export const IconDiceOne: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

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
      data-slot='icon-ui-dice-one'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'dice-one-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'dice-one-title'}>{title}</title> : null}
      <rect
        opacity='.2'
        width='18.78'
        height='18.78'
        rx='3'
        transform='matrix(0 -1 -1 0 21.4 21.4)'
        fill='currentColor'
      />
      <rect
        width='18.78'
        height='18.78'
        rx='3'
        transform='matrix(0 -1 -1 0 21.4 21.4)'
        stroke='currentColor'
      />
      <path
        d='M12.9 12a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
