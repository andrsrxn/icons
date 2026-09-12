import type { Icon } from './types'

export const IconHexagon: Icon = ({
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
      data-slot='icon-ui-hexagon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M10.1 2.54c.93-.5 1.4-.76 1.9-.76s.97.26 1.9.76l2.72 1.47 2.62 1.61c.9.56 1.35.83 1.6 1.27.26.44.27.97.3 2.03l.09 3.08-.09 3.08c-.03 1.06-.04 1.59-.3 2.03-.25.44-.7.71-1.6 1.27l-2.62 1.61-2.72 1.47c-.93.5-1.4.76-1.9.76s-.97-.26-1.9-.76l-2.72-1.47-2.62-1.61c-.9-.56-1.35-.83-1.6-1.27-.26-.44-.27-.97-.3-2.03L2.77 12l.09-3.08c.03-1.06.04-1.59.3-2.03.25-.44.7-.71 1.6-1.27l2.62-1.61z'
        fill='currentColor'
      />
      <path
        d='M10.03 2.63c.96-.55 1.44-.82 1.97-.82s1 .27 1.97.82l2.6 1.47 2.56 1.5c.95.57 1.43.85 1.7 1.3.26.46.26 1.02.27 2.12l.03 2.98-.03 2.98c0 1.1-.01 1.66-.28 2.11-.26.46-.74.74-1.7 1.3l-2.56 1.51-2.59 1.47c-.96.55-1.44.82-1.97.82s-1-.27-1.97-.82l-2.6-1.47-2.56-1.5c-.95-.57-1.43-.85-1.7-1.3-.26-.46-.26-1.02-.27-2.12L2.87 12l.03-2.98c0-1.1.01-1.66.28-2.12.26-.45.74-.73 1.7-1.3l2.56-1.5z'
        stroke='currentColor'
      />
    </svg>
  )
}
