import type { Icon } from './types'

export const IconMicrophone: Icon = ({
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
      data-slot='icon-ui-microphone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M12 14.82a4.1 4.1 0 0 0 4.1-4.1V5.76a4.1 4.1 0 1 0-8.2 0v4.96a4.1 4.1 0 0 0 4.1 4.1'
        stroke='currentColor'
      />
      <path d='M19.02 8.74v2.1a7.02 7.02 0 0 1-14.04 0v-2.1' stroke='currentColor' />
      <rect
        opacity='.2'
        width='12.56'
        height='8.21'
        rx='4.11'
        transform='matrix(0 -1 -1 0 16.1 14.52)'
        fill='currentColor'
      />
      <path d='M12 18v4.29' stroke='currentColor' />
      <path d='M15 22.29H9' stroke='currentColor' />
    </svg>
  )
}
