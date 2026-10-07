import type { Icon } from './types'

export const IconPodcast: Icon = ({
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
      data-slot='icon-ui-podcast'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='7.72'
        height='5.48'
        rx='2.74'
        transform='matrix(0 -1 -1 0 14.74 17.85)'
        fill='currentColor'
      />
      <path
        d='M12 18.04a2.74 2.74 0 0 0 2.74-2.74v-2.62a2.74 2.74 0 1 0-5.48 0v2.62A2.74 2.74 0 0 0 12 18.04'
        stroke='currentColor'
      />
      <path d='M12 18.04v3.21' stroke='currentColor' />
      <path d='M14 21.25h-4' stroke='currentColor' />
      <path d='M18.59 13.06a6.59 6.59 0 0 0-13.18 0' stroke='currentColor' />
      <path d='M22.31 13.06a10.31 10.31 0 1 0-20.62 0' stroke='currentColor' />
    </svg>
  )
}
