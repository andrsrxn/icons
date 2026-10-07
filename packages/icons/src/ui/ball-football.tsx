import type { Icon } from './types'

export const IconBallFootball: Icon = ({
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
      data-slot='icon-ui-ball-football'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.9 20.83A10.2 10.2 0 1 1 17.1 3.17 10.2 10.2 0 0 1 6.9 20.83m7.97-13.8-6.48.74-1.64 6.54 5.47 3.58L17.45 13z'
        fill='currentColor'
      />
      <path
        d='M6.85 3.07a10.3 10.3 0 0 0-3.78 14.09A10.31 10.31 0 1 0 6.85 3.07'
        stroke='currentColor'
      />
      <path
        d='m11.94 7.3-.84.1c-1.39.17-2.08.25-2.55.7-.48.43-.61 1.12-.89 2.48L7.4 11.9c-.28 1.36-.41 2.04-.15 2.63.27.58.87.93 2.07 1.62l.46.27h0c1.2.7 1.81 1.05 2.45.98s1.17-.53 2.2-1.46l1-.88c1.04-.92 1.56-1.38 1.7-2.01s-.13-1.27-.68-2.55l-.34-.8c-.57-1.34-.86-2-1.43-2.34-.58-.33-1.3-.24-2.74-.06'
        stroke='currentColor'
      />
      <path d='m14.92 6.95 2.18-3.78' stroke='currentColor' />
      <path d='M8.17 7.71 5.13 4.65' stroke='currentColor' />
      <path d='m17.64 13.18 4.37 1.22' stroke='currentColor' />
      <path d='m2.92 16.48 4.1-2.08' stroke='currentColor' />
      <path d='m12.29 22.27-.14-4.75' stroke='currentColor' />
    </svg>
  )
}
