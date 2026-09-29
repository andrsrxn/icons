import type { Icon } from './types'

export const IconLasso: Icon = ({
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
      data-slot='icon-ui-lasso'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <ellipse
        opacity='.2'
        cx='12'
        cy='10.83'
        rx='7.26'
        ry='10.48'
        transform='rotate(105 12 10.83)'
        fill='currentColor'
      />
      <path
        d='M10.12 17.85C4.53 16.35.84 12 1.88 8.12s6.41-5.8 12-4.3 9.28 5.85 8.24 9.72c-.6 2.26-2.68 3.86-5.42 4.5'
        stroke='currentColor'
      />
      <path
        d='M8.32 21.28c-2.69-.34-4.39-3.64-2.13-6.46 2.44-3.04 5.95-1.8 6.81.25.82 1.95-.9 3.38-3.17 2.7'
        stroke='currentColor'
      />
    </svg>
  )
}
