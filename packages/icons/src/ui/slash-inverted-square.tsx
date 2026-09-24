import type { Icon } from './types'

export const IconSlashInvertedSquare: Icon = ({
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
      data-slot='icon-ui-slash-inverted-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='18.41'
        height='18.41'
        rx='3'
        transform='matrix(0 1 1 0 2.65 2.8)'
        fill='currentColor'
      />
      <rect
        width='18.41'
        height='18.41'
        rx='3'
        transform='matrix(0 1 1 0 2.65 2.8)'
        stroke='currentColor'
      />
      <path d='m7.02 7.02 9.96 9.96' stroke='currentColor' />
    </svg>
  )
}
