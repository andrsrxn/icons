import type { Icon } from './types'

export const IconSquareRoot: Icon = ({
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
      data-slot='icon-ui-square-root'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M2.62 12.11h1.9c.65 0 .98 0 1.23.17.26.18.38.48.63 1.08l1.8 4.48c.85 2.09 1.27 3.13 1.97 3.11s1.06-1.08 1.78-3.21l4.3-12.6c.23-.65.34-.98.6-1.16.26-.19.6-.19 1.3-.19h3.25'
        stroke='currentColor'
      />
    </svg>
  )
}
