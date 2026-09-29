import type { Icon } from './types'

export const IconStrokeCapRound: Icon = ({
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
      data-slot='icon-ui-stroke-cap-round'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.3 6.32a5.68 5.68 0 1 1 0 11.36H1.72l-.02-.02V6.34l.02-.02zm-.43 7.99a2.3 2.3 0 1 1 0-4.62 2.3 2.3 0 0 1 0 4.62'
        fill='currentColor'
      />
      <path d='M1.7 12h11.86' stroke='currentColor' />
      <path d='M18.18 12a2.3 2.3 0 0 1-2.3 2.3 2.3 2.3 0 1 1 2.3-2.3' stroke='currentColor' />
      <path d='M1.7 17.68h14.92a5.68 5.68 0 0 0 0-11.36H1.7' stroke='currentColor' />
    </svg>
  )
}
