import type { Icon } from './types'

export const IconAsteriskCircle: Icon = ({
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
      data-slot='icon-ui-asterisk-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='18.78'
        height='18.78'
        rx='9.39'
        transform='matrix(0 -1 -1 0 21.4 21.4)'
        fill='currentColor'
      />
      <rect
        width='18.78'
        height='18.78'
        rx='9.39'
        transform='matrix(0 -1 -1 0 21.4 21.4)'
        stroke='currentColor'
      />
      <path d='M12 16.66V7.34' stroke='currentColor' />
      <path d='m7.57 14.55 8.85-5.1' stroke='currentColor' />
      <path d='m16.42 14.55-8.85-5.1' stroke='currentColor' />
    </svg>
  )
}
