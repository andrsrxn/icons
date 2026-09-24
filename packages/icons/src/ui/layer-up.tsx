import type { Icon } from './types'

export const IconLayerUp: Icon = ({
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
      data-slot='icon-ui-layer-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m2.3 13.38 8.58-3.37a3 3 0 0 1 2.2 0l8.6 3.37a1 1 0 0 1 .03 1.86l-8.57 3.6a3 3 0 0 1-2.33 0l-8.53-3.6a1 1 0 0 1 .02-1.86'
        fill='currentColor'
      />
      <path
        d='m6 11.93-1.42.56c-1.93.76-2.9 1.14-2.91 1.81s.95 1.08 2.87 1.89l5.1 2.15c1.16.49 1.73.73 2.33.73s1.18-.24 2.33-.72l5.14-2.16c1.93-.8 2.89-1.21 2.88-1.89 0-.67-.98-1.05-2.93-1.82l-1.41-.55'
        stroke='currentColor'
      />
      <path
        d='m15.63 8.33-.82-.82c-1.33-1.33-2-2-2.83-2-.82 0-1.5.66-2.83 2l-.82.82'
        stroke='currentColor'
      />
      <path d='M11.98 14.3V6.12' stroke='currentColor' />
    </svg>
  )
}
