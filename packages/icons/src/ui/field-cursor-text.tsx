import type { Icon } from './types'

export const IconFieldCursorText: Icon = ({
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
      data-slot='icon-ui-field-cursor-text'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='10.75'
        height='20.61'
        rx='2'
        transform='matrix(0 -1 -1 0 22.3 17.38)'
        fill='currentColor'
      />
      <rect
        width='10.75'
        height='20.61'
        rx='3'
        transform='matrix(0 -1 -1 0 22.3 17.38)'
        stroke='currentColor'
      />
      <path
        d='M5.8 20.74c1.13 0 1.69 0 2.12-.22a2 2 0 0 0 .87-.87c.22-.43.22-1 .22-2.12V6.47c0-1.13 0-1.69-.22-2.12a2 2 0 0 0-.87-.87c-.43-.22-1-.22-2.12-.22'
        stroke='currentColor'
      />
      <path
        d='M12.21 20.74c-1.12 0-1.69 0-2.12-.22a2 2 0 0 1-.86-.87c-.22-.43-.22-1-.22-2.12V6.47c0-1.13 0-1.69.22-2.12a2 2 0 0 1 .86-.87c.43-.22 1-.22 2.12-.22'
        stroke='currentColor'
      />
    </svg>
  )
}
