import type { Icon } from './types'

export const IconLassoPolygon: Icon = ({
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
      data-slot='icon-ui-lasso-polygon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m5.88 15.99 3.86 1.5c.52.21.79.31 1.06.34.28.03.56-.02 1.12-.13l6.07-1.12c1.35-.24 2.02-.37 2.47-.82.44-.46.55-1.14.76-2.5l.49-3.1c.41-2.65.62-3.98-.16-4.7s-2.08-.42-4.69.17l-1.1.26c-.58.13-.86.2-1.15.18a4 4 0 0 1-1.1-.32L9.4 4.28c-1.11-.4-1.67-.6-2.21-.49-.55.11-.99.5-1.85 1.3L3.96 6.37c-.83.76-1.25 1.15-1.4 1.66-.17.51-.04 1.06.2 2.16l.67 2.96c.23 1.02.35 1.53.67 1.9.33.38.81.57 1.78.95'
        fill='currentColor'
      />
      <path
        d='m16.77 16.79 1.21-.23c1.33-.24 1.99-.37 2.43-.82s.55-1.1.78-2.43l.54-3.15c.45-2.62.67-3.93-.08-4.66-.76-.73-2.06-.47-4.66.06l-1.7.34c-.57.12-.86.18-1.15.15a4 4 0 0 1-1.1-.34L9.29 4.24c-1.15-.45-1.73-.68-2.3-.57s-1.02.55-1.92 1.4L3.55 6.52c-.81.78-1.22 1.17-1.37 1.69-.15.51-.02 1.06.25 2.16l.77 3.15c.21.85.31 1.28.6 1.64.3.35.67.52 1.41.86h0c1.17.54 2.85 1.25 4.58 1.74'
        stroke='currentColor'
      />
      <path
        d='M8.32 21.28c-2.69-.34-4.39-3.64-2.13-6.46 2.44-3.04 5.95-1.8 6.81.25.82 1.95-.9 3.38-3.17 2.7'
        stroke='currentColor'
      />
    </svg>
  )
}
