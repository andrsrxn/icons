import type { Icon } from './types'

export const IconCreativeCommons: Icon = ({
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
      data-slot='icon-ui-creative-commons'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.72 12a10.28 10.28 0 1 0 20.56 0 10.28 10.28 0 0 0-20.56 0'
        fill='currentColor'
      />
      <path
        d='M1.72 12A10.25 10.25 0 0 0 12 22.28 10.28 10.28 0 1 0 1.72 12'
        stroke='currentColor'
      />
      <path d='M10.47 9.06a3.3 3.3 0 1 0 0 5.87' stroke='currentColor' />
      <path d='M17.96 9.06a3.3 3.3 0 1 0 0 5.87' stroke='currentColor' />
    </svg>
  )
}
