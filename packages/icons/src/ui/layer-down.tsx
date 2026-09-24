import type { Icon } from './types'

export const IconLayerDown: Icon = ({
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
      data-slot='icon-ui-layer-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m2.3 11.34 8.58 3.38a3 3 0 0 0 2.2 0l8.6-3.38a1 1 0 0 0 .03-1.85l-8.57-3.6a3 3 0 0 0-2.33 0L2.28 9.5a1 1 0 0 0 .02 1.85'
        fill='currentColor'
      />
      <path
        d='m6 12.8-1.42-.56c-1.93-.76-2.9-1.15-2.91-1.82s.95-1.08 2.87-1.89l5.1-2.15c1.16-.48 1.73-.72 2.33-.72s1.18.24 2.33.72l5.14 2.15c1.93.81 2.89 1.22 2.88 1.9 0 .66-.98 1.05-2.93 1.8l-1.41.56'
        stroke='currentColor'
      />
      <path
        d='m15.65 16.43-.82.82c-1.33 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-.82-.82'
        stroke='currentColor'
      />
      <path d='M11.98 10.43v8.17' stroke='currentColor' />
    </svg>
  )
}
