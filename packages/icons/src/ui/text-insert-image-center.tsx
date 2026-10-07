import type { Icon } from './types'

export const IconTextInsertImageCenter: Icon = ({
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
      data-slot='icon-ui-text-insert-image-center'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M13.34 19.45H3.67' stroke='currentColor' />
      <path d='M17.86 4.55H3.66' stroke='currentColor' />
      <rect
        opacity='.2'
        x='21.42'
        y='9.09'
        width='5.82'
        height='18.83'
        rx='2'
        transform='rotate(90 21.42 9.09)'
        fill='currentColor'
      />
      <rect
        x='21.42'
        y='9.09'
        width='5.82'
        height='18.83'
        rx='2'
        transform='rotate(90 21.42 9.09)'
        stroke='currentColor'
      />
    </svg>
  )
}
