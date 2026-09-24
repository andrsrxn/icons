import type { Icon } from './types'

export const IconCloudRestore: Icon = ({
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
      data-slot='icon-ui-cloud-restore'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m1.48 12.97 3.85 3.79h13.63l2.95-2.14v-4.28L18.61 8l-1.73 1.2-.92-3.5L12 3.44 8.7 4.85 7.03 8 3.2 9.2z'
        fill='currentColor'
      />
      <path d='M6.83 7.57a5.09 5.09 0 0 1 9.34-1.17c.83 1.44.8 2.9.6 3.88' stroke='currentColor' />
      <path
        d='M5.03 16.4a3.6 3.6 0 0 1-2.16-1.15 4.27 4.27 0 0 1 3.06-7.27c1.4 0 2.64.67 3.43 1.7'
        stroke='currentColor'
      />
      <path
        d='M16.92 8.44a3.6 3.6 0 0 1 3.37.12 4.3 4.3 0 0 1 1.57 5.84c-.7 1.21-1.65 1.95-2.63 2.07'
        stroke='currentColor'
      />
      <path
        d='M9.23 15.41c1.13-1.49 2.25-1.77 3.15-1.77a3.3 3.3 0 1 1-2.31 5.65'
        stroke='currentColor'
      />
      <path d='M8.94 13.28v1.45c0 .48 0 .71.15.86.14.14.38.14.85.14h1.46' stroke='currentColor' />
    </svg>
  )
}
