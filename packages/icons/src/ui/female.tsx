import type { Icon } from './types'

export const IconFemale: Icon = ({
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
      data-slot='icon-ui-female'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12.06'
        cy='8.92'
        r='6.31'
        transform='rotate(135 12.06 8.92)'
        fill='currentColor'
      />
      <circle
        cx='12.06'
        cy='8.92'
        r='6.31'
        transform='rotate(135 12.06 8.92)'
        stroke='currentColor'
      />
      <path d='M12.06 15.27v6.13' stroke='currentColor' />
      <path d='M8.62 19.5h6.73' stroke='currentColor' />
    </svg>
  )
}
