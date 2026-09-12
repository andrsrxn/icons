import type { Icon } from './types'

export const IconAlignCenterVertical: Icon = ({
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
      data-slot='icon-ui-align-center-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='21.07'
        y='3.79'
        width='6.42'
        height='18.14'
        rx='2'
        transform='rotate(90 21.07 3.79)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='18.87'
        y='13.79'
        width='6.42'
        height='13.74'
        rx='2'
        transform='rotate(90 18.87 13.8)'
        fill='currentColor'
      />
      <rect
        x='21.07'
        y='3.79'
        width='6.42'
        height='18.14'
        rx='2'
        transform='rotate(90 21.07 3.79)'
        stroke='currentColor'
      />
      <rect
        x='18.87'
        y='13.79'
        width='6.42'
        height='13.74'
        rx='2'
        transform='rotate(90 18.87 13.8)'
        stroke='currentColor'
      />
      <path d='M12 1.67v2.12' stroke='currentColor' />
      <path d='M12 20.21v2.12' stroke='currentColor' />
      <path d='M12 10.63v2.74' stroke='currentColor' />
    </svg>
  )
}
