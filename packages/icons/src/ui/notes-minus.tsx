import type { Icon } from './types'

export const IconNotesMinus: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-notes-minus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
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
      <path d='M8.23 13.39h7.54' stroke='currentColor' />
      <path d='M12 5.3V2' stroke='currentColor' />
      <path d='M7.6 5.3V2' stroke='currentColor' />
      <path d='M16.4 5.3V2' stroke='currentColor' />
    </svg>
  )
}
