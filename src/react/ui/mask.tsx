import type { Icon } from './types'

export const IconMask: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-mask'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='m6.08 7.73 12.05-.17 1.09 7.73-7.53 3-6.94-3.22z' fill='currentColor' />
      <path
        d='M5.63 10.13a7.6 7.6 0 0 1-1.02 3.6c-.09.17-.13.25-.7.26l-.57.01c-.48-.76-.8-2.2-.8-3.87 0-.78.16-1.52.38-2.15.3-.9.45-1.35 1.17-1.35.71 0 .87.45 1.17 1.35q.35.96.37 2.15m12.74 0c0 1.49.57 2.8 1.02 3.6.09.17.13.25.7.26l.57.01c.48-.76.8-2.2.8-3.87 0-.78-.16-1.52-.38-2.15-.3-.9-.45-1.35-1.17-1.35-.71 0-.87.45-1.17 1.35a7 7 0 0 0-.37 2.15m-.49-2.07A17 17 0 0 0 12 7.18c-2.32 0-3.66.2-5.89.88m7.72 2.67c-.7-.21-1.1-.28-1.83-.28-.72 0-1.14.07-1.83.28m5.03 3.04a9 9 0 0 1-3.2.47c-1.26 0-1.99-.1-3.2-.47m11.3.7c-2.77 1.77-4.9 3.14-8.08 3.14s-5.54-1.6-8.25-3.14'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
