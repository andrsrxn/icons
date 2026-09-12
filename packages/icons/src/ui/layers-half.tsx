import type { Icon } from './types'

export const IconLayersHalf: Icon = ({
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
      data-slot='icon-ui-layers-half'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m2.28 8.62 8.6-3.39a3 3 0 0 1 2.2 0l8.63 3.39a1 1 0 0 1 .02 1.85l-8.6 3.6a3 3 0 0 1-2.32 0l-8.55-3.6a1 1 0 0 1 .02-1.85'
        fill='currentColor'
      />
      <path
        d='m4.57 7.72 5.21-2.05a6 6 0 0 1 2.2-.64c.56 0 1.1.2 2.19.63l5.24 2.06c1.95.76 2.92 1.14 2.93 1.82 0 .67-.96 1.07-2.88 1.88L14.3 13.6h0c-1.15.48-1.72.72-2.33.72-.6 0-1.17-.24-2.32-.73l-5.13-2.16c-1.92-.8-2.88-1.21-2.87-1.88 0-.68.98-1.06 2.92-1.82'
        stroke='currentColor'
      />
      <path
        d='m18.24 12 1.04.38c2 .75 3 1.13 3 1.8.02.68-.96 1.1-2.93 1.92l-5.05 2.12c-1.15.48-1.72.72-2.33.72-.6 0-1.17-.24-2.32-.72l-5.1-2.15c-1.93-.81-2.9-1.22-2.88-1.9 0-.67.98-1.05 2.94-1.8l.94-.37'
        stroke='currentColor'
      />
    </svg>
  )
}
