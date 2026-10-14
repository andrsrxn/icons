import type { Icon } from './types'

export const IconStraightenHorizontal: Icon = ({
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
      data-slot='icon-ui-straighten-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.82 10.78c0-2.38 0-3.57.7-4.4.69-.84 1.86-1.06 4.2-1.5l4.3-.8c3.3-.62 4.94-.93 6.03-.03s1.08 2.57 1.08 5.92v4.04c0 3.34 0 5-1.08 5.9s-2.72.6-6 0l-4.31-.8c-2.35-.43-3.53-.64-4.22-1.48-.7-.83-.7-2.03-.7-4.42z'
        fill='currentColor'
      />
      <path d='M1.6 12h20.75' stroke='currentColor' />
      <path
        d='M3.82 10.82c0-2.38 0-3.56.7-4.4.68-.83 1.85-1.05 4.18-1.5L13 4.1c3.3-.63 4.96-.94 6.05-.04s1.08 2.57 1.08 5.93v4.03c0 3.35 0 5.03-1.08 5.93-1.09.9-2.74.59-6.03-.03l-4.31-.82c-2.34-.44-3.5-.66-4.2-1.5-.69-.82-.69-2.01-.69-4.4z'
        stroke='currentColor'
      />
    </svg>
  )
}
