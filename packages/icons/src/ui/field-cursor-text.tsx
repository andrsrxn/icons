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
        width='12.42'
        height='20.61'
        rx='3'
        transform='matrix(0 -1 -1 0 22.3 18.21)'
        fill='currentColor'
      />
      <path
        d='M6.33 21.48c.63 0 .94 0 1.2-.07a2 2 0 0 0 1.4-1.4c.08-.26.08-.58.08-1.2V5.2c0-.63 0-.95-.07-1.2a2 2 0 0 0-1.4-1.41c-.27-.07-.58-.07-1.21-.07'
        stroke='currentColor'
      />
      <path
        d='M11.68 21.48c-.63 0-.94 0-1.2-.07a2 2 0 0 1-1.4-1.4C9 19.75 9 19.43 9 18.8V5.2c0-.63 0-.95.07-1.2a2 2 0 0 1 1.4-1.41c.26-.07.57-.07 1.2-.07'
        stroke='currentColor'
      />
      <rect
        width='12.42'
        height='20.61'
        rx='3'
        transform='matrix(0 -1 -1 0 22.3 18.21)'
        stroke='currentColor'
      />
    </svg>
  )
}
