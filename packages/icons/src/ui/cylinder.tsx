import type { Icon } from './types'

export const IconCylinder: Icon = ({
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
      data-slot='icon-ui-cylinder'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <ellipse
        cx='12'
        cy='3.88'
        rx='2.53'
        ry='7.25'
        transform='rotate(90 12 3.88)'
        stroke='currentColor'
      />
      <ellipse
        cx='12'
        cy='19.77'
        rx='2.53'
        ry='7.25'
        transform='rotate(90 12 19.77)'
        stroke='currentColor'
      />
      <path d='M4.75 3.88v15.89' stroke='currentColor' />
      <path d='M19.25 3.88v15.89' stroke='currentColor' />
      <ellipse
        opacity='.2'
        cx='12'
        cy='3.68'
        rx='2.72'
        ry='6.88'
        transform='rotate(90 12 3.68)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='12'
        cy='19.77'
        rx='2.72'
        ry='6.88'
        transform='rotate(90 12 19.77)'
        fill='currentColor'
      />
    </svg>
  )
}
