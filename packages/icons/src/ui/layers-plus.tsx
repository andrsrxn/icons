import type { Icon } from './types'

export const IconLayersPlus: Icon = ({
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
      data-slot='icon-ui-layers-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m10.81 16.67-8.55-3.6a1 1 0 0 1 .02-1.86L5.62 9.9a1 1 0 0 1 .73 0l4.53 1.78a3 3 0 0 0 2.2 0l4.54-1.78a1 1 0 0 1 .73 0l3.36 1.31a1 1 0 0 1 .02 1.86l-8.6 3.6a3 3 0 0 1-2.32 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m10.81 21-8.55-3.61a1 1 0 0 1 .02-1.85l3.34-1.32a1 1 0 0 1 .73 0L10.88 16a3 3 0 0 0 2.2 0l4.54-1.78a1 1 0 0 1 .73 0l3.36 1.32a1 1 0 0 1 .02 1.85l-8.6 3.6a3 3 0 0 1-2.32 0'
        fill='currentColor'
      />
      <path
        d='m4.57 5.43 5.21-2.05a6 6 0 0 1 2.2-.64c.56 0 1.1.21 2.19.64l5.24 2.05c1.95.77 2.92 1.15 2.93 1.82 0 .67-.96 1.08-2.88 1.89L14.3 11.3h0c-1.15.48-1.72.73-2.33.73-.6 0-1.17-.25-2.32-.73L4.52 9.14C2.6 8.33 1.64 7.92 1.65 7.25s.98-1.05 2.92-1.82'
        stroke='currentColor'
      />
      <path
        d='m18.24 9.71 1.04.39c2 .75 3 1.12 3 1.8.02.68-.96 1.1-2.93 1.92l-5.05 2.12c-1.15.48-1.72.72-2.33.72-.6 0-1.17-.24-2.32-.73l-5.1-2.14c-1.93-.82-2.9-1.23-2.88-1.9 0-.67.98-1.05 2.94-1.81l.94-.37'
        stroke='currentColor'
      />
      <path
        d='m5.55 14.28-.94.37c-1.96.76-2.93 1.13-2.94 1.8s.95 1.09 2.88 1.9l5.7 2.4c.52.22.78.33 1.04.4a3 3 0 0 0 1.36-.02c.27-.07.52-.18 1.03-.4'
        stroke='currentColor'
      />
      <path d='M17.2 19.87h5.42' stroke='currentColor' />
      <path d='M19.9 22.59v-5.43' stroke='currentColor' />
    </svg>
  )
}
