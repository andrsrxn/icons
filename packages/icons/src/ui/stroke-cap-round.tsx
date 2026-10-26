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
        d='M15.22 5.22a6.78 6.78 0 1 1 0 13.56H1.44l-.02-.02V5.24l.02-.02zm-.52 9.54a2.76 2.76 0 1 1 0-5.52 2.76 2.76 0 0 1 0 5.52'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M1.65 12h10.3' stroke='currentColor' />
      <path d='M17.46 12a2.76 2.76 0 1 0-5.52 0 2.76 2.76 0 0 0 5.52 0' stroke='currentColor' />
      <path d='M1.65 18.78h13.94a6.78 6.78 0 1 0 0-13.56H1.65' stroke='currentColor' />
    </svg>
  )
}
