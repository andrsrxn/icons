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
        d='M9.04 2.98c1.45-.82 2.17-1.23 2.96-1.23.8 0 1.51.4 2.96 1.23l1.7.96 1.67.99c1.44.84 2.15 1.26 2.55 1.94.4.69.4 1.52.41 3.18l.02 1.95-.02 1.95c-.01 1.66-.02 2.49-.41 3.18-.4.68-1.11 1.1-2.55 1.94l-1.68 1-1.7.95c-1.44.82-2.16 1.23-2.95 1.23-.8 0-1.51-.4-2.96-1.23l-1.7-.96-1.67-.99c-1.44-.84-2.15-1.26-2.55-1.94-.4-.69-.4-1.52-.41-3.18L2.69 12l.02-1.95c.01-1.66.02-2.49.41-3.18.4-.68 1.11-1.1 2.55-1.94l1.68-1z'
        stroke='currentColor'
      />
    </svg>
  )
}
