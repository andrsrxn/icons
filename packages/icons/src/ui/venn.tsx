import type { Icon } from './types'

export const IconVenn: Icon = ({
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
      data-slot='icon-ui-venn'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <g opacity='.2'>
        <path
          d='M15.04 12A6.7 6.7 0 0 1 12 17.63a6.73 6.73 0 0 1 0-11.26A6.7 6.7 0 0 1 15.04 12'
          fillRule='evenodd'
          clipRule='evenodd'
          fill='currentColor'
        />
        <path
          d='M12 17.63a6.73 6.73 0 0 1 0-11.26 6.73 6.73 0 0 1 0 11.26'
          fillRule='evenodd'
          clipRule='evenodd'
          fill='currentColor'
        />
      </g>
      <path d='M1.56 12a6.74 6.74 0 1 1 13.48 0 6.74 6.74 0 0 1-13.48 0' stroke='currentColor' />
      <path d='M8.96 12a6.74 6.74 0 1 1 13.48 0 6.74 6.74 0 0 1-13.48 0' stroke='currentColor' />
    </svg>
  )
}
