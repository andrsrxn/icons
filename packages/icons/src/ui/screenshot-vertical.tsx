import type { Icon } from './types'

export const IconScreenshotVertical: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-screenshot-vertical'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M7.82 10.56V9.4c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h1.16'
        stroke='currentColor'
      />
      <path
        d='M16.18 13.44v1.16c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58h-1.16'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M4.47 14.67c0 3.32 0 4.98.92 6.09a4 4 0 0 0 .52.52c1.1.92 2.77.92 6.09.92s4.98 0 6.1-.92a4 4 0 0 0 .5-.52c.93-1.11.93-2.77.93-6.1V9.34c0-3.32 0-4.98-.92-6.09a4 4 0 0 0-.52-.52C17 1.8 15.32 1.8 12 1.8s-4.98 0-6.1.92a4 4 0 0 0-.5.52c-.93 1.11-.93 2.77-.93 6.1z'
        fill='currentColor'
      />
      <path
        d='M12 1.8c3.32 0 4.98 0 6.1.92a4 4 0 0 1 .5.52c.93 1.11.93 2.77.93 6.1v5.33c0 3.32 0 4.98-.92 6.09a4 4 0 0 1-.52.52c-1.1.92-2.77.92-6.09.92v0c-3.32 0-4.98 0-6.1-.92a4 4 0 0 1-.5-.52c-.93-1.11-.93-2.77-.93-6.1V9.34c0-3.32 0-4.98.92-6.09a4 4 0 0 1 .52-.52C7 1.8 8.68 1.8 12 1.8'
        stroke='currentColor'
      />
    </svg>
  )
}
