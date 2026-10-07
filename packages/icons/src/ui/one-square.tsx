import type { Icon } from './types'

export const IconOneSquare: Icon = ({
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
      data-slot='icon-ui-one-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        fill='currentColor'
      />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        stroke='currentColor'
      />
      <path
        d='m8.76 10.8 3.09-2.81c.72-.65 1.08-.98 1.37-.85s.3.62.3 1.59v8.3'
        stroke='currentColor'
      />
    </svg>
  )
}
