import type { Icon } from './types'

export const IconCloud: Icon = ({
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
      data-slot='icon-ui-cloud'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m1.34 14.51 2.83 3.52 14.4.51 3.33-2.27v-4.55l-3.32-2.5-1.74 1.28-.94-3.72-4.08-1.84-3.22.93-1.67 3.34-3.87 1.3z'
        fill='currentColor'
      />
      <path
        d='M5.82 18.3c-1.17 0-2.3-.52-3.08-1.36a4.7 4.7 0 0 1-1.23-3.19A4.44 4.44 0 0 1 5.8 9.2c1.41 0 2.66.72 3.45 1.82'
        stroke='currentColor'
      />
      <path d='M18.83 18.3H5.64' stroke='currentColor' />
      <path d='M6.33 9.2A5.2 5.2 0 0 1 15.87 8c.85 1.47.82 2.97.62 3.97' stroke='currentColor' />
      <path
        d='M16.63 10.09a3.6 3.6 0 0 1 3.45.11 4.37 4.37 0 0 1 1.6 5.97c-.71 1.24-1.68 2-2.69 2.12'
        stroke='currentColor'
      />
    </svg>
  )
}
