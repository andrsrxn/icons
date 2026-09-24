import type { Icon } from './types'

export const IconCircleDashed: Icon = ({
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
      data-slot='icon-ui-circle-dashed'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='10.28'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <path d='M14 22.1a11 11 0 0 1-4.01 0' stroke='currentColor' />
      <path d='M14 1.9a11 11 0 0 0-4.01 0' stroke='currentColor' />
      <path d='M22.1 10a11 11 0 0 1 0 4.01' stroke='currentColor' />
      <path d='M1.9 10a11 11 0 0 0 0 4.01' stroke='currentColor' />
      <path d='M17.72 3.44a11 11 0 0 1 2.84 2.84' stroke='currentColor' />
      <path d='M3.44 17.72a11 11 0 0 0 2.84 2.84' stroke='currentColor' />
      <path d='M3.44 6.28a11 11 0 0 1 2.84-2.84' stroke='currentColor' />
      <path d='M17.72 20.56a11 11 0 0 0 2.84-2.84' stroke='currentColor' />
    </svg>
  )
}
