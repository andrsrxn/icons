import type { Icon } from './types'

export const IconNotesSquiggle: Icon = ({
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
      data-slot='icon-ui-notes-squiggle'
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
      <path d='M12 5.3V2' stroke='currentColor' />
      <path d='M7.6 5.3V2' stroke='currentColor' />
      <path d='M16.4 5.3V2' stroke='currentColor' />
      <path
        d='M15.88 17.02s-.5-.58-1.34-1.3a5.4 5.4 0 0 0-2.91-.91c-1.63 0-3.06.36-3.37 1.5-.36 1.31 1.4 2.54 3.37 1.5 3.13-1.65 5.49-4.63 5.49-6.11 0-1.36-1.1-1.97-2.28-1.76-2.26.4-3.26 2.94-6.4 2.54-1.57-.2-2.1-1.78-.9-2.75.76-.62 1.81-.55 2.74-.92'
        stroke='currentColor'
      />
    </svg>
  )
}
