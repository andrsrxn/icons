import type { Icon } from './types'

export const IconPanelsTopFilled: Icon = ({
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
      data-slot='icon-ui-panels-top-filled'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <rect
        width='9.35'
        height='18.43'
        rx='2'
        transform='matrix(0 -1 -1 0 21.21 12.09)'
        fill='currentColor'
      />
      <rect
        width='18.53'
        height='18.43'
        rx='3'
        transform='matrix(0 -1 -1 0 21.21 21.26)'
        stroke='currentColor'
      />
      <path d='M3.18 12h17.64' stroke='currentColor' />
    </svg>
  )
}
