import type { Icon } from './types'

export const IconParenthesis: Icon = ({
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
      data-slot='icon-ui-parenthesis'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M6.98 21.28C4.6 18.27 3.75 15.84 3.75 12s.85-6.27 3.23-9.28' stroke='currentColor' />
      <path
        d='M17.02 21.28c2.38-3.01 3.23-5.44 3.23-9.28s-.85-6.27-3.23-9.28'
        stroke='currentColor'
      />
    </svg>
  )
}
