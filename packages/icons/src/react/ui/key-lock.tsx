import type { Icon } from './types'

export const IconKeyLock: Icon = ({
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
      data-slot='ui-icon-key-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.6 12a9.4 9.4 0 1 0 18.8 0 9.4 9.4 0 0 0-18.8 0m6.79-2.61a2.61 2.61 0 1 1 5.22 0c0 .83-1 2.05-1 2.05.32 1.2 1.31 4.97 1 5.38-.32.4-2.61.4-2.61.4s-2.3 0-2.6-.4c-.32-.4.67-4.18.98-5.38 0 0-1-1.22-1-2.05'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='12'
        r='9.4'
        transform='rotate(90 12 12)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12 6.78a2.6 2.6 0 0 0-2.61 2.6c0 .84.51 1.62 1.18 2.06l-.95 3.22c-.34 1.17-.52 1.76-.22 2.16s.91.4 2.14.4h.94c1.22 0 1.83 0 2.13-.4s.13-.98-.2-2.15l-.93-3.23a2.5 2.5 0 0 0 1.13-2.05A2.6 2.6 0 0 0 12 6.78'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
