import type { Icon } from './types'

export const IconNotes: Icon = ({
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
      data-slot='icon-ui-notes'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='17.81'
        height='17.81'
        rx='3'
        transform='matrix(0 -1 -1 0 20.9 21.46)'
        fill='currentColor'
      />
      <rect
        width='17.81'
        height='17.81'
        rx='3'
        transform='matrix(0 -1 -1 0 20.9 21.46)'
        stroke='currentColor'
      />
      <path d='M7.56 11.33h8.88' stroke='currentColor' />
      <path d='M7.56 15.73h5.5' stroke='currentColor' />
      <path d='M12 5.3V2' stroke='currentColor' />
      <path d='M7.6 5.3V2' stroke='currentColor' />
      <path d='M16.4 5.3V2' stroke='currentColor' />
    </svg>
  )
}
