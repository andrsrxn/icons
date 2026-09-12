import type { Icon } from './types'

export const IconVideoFilled: Icon = ({
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
      data-slot='icon-ui-video-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        x='1.87'
        y='5.47'
        width='12.41'
        height='13.06'
        rx='3'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M22.25 13.54v-3.02c0-1.43 0-2.14-.34-2.56a1.5 1.5 0 0 0-.8-.5c-.52-.13-1.17.17-2.46.79h0c-.57.26-.85.4-1.05.61a2 2 0 0 0-.28.46c-.11.27-.11.58-.11 1.2v3.02c0 .63 0 .94.11 1.22q.1.25.3.46c.2.21.48.34 1.06.6 1.28.6 1.92.89 2.44.76q.48-.13.8-.51c.33-.41.33-1.12.33-2.53'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
