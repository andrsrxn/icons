import type { Icon } from './types'

export const IconBridge: Icon = ({
  size = 24,
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
      data-slot='bridge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <g opacity='.2'>
        <path d='M9.5 14.56H5.1v-7.4l4.26 2.28z' fill='currentColor' />
        <path d='M9.5 14.56H5.1v-7.4l4.26 2.28z' fill='currentColor' />
      </g>
      <g opacity='.2'>
        <path d='M14.4 14.56h4.4v-7.4l-4.27 2.28z' fill='currentColor' />
        <path d='M14.4 14.56h4.4v-7.4l-4.27 2.28z' fill='currentColor' />
      </g>
      <path
        d='M5.2 17.53V6m13.6 11.53V6m-9.35 8.44V9.56m5.1 4.88V9.56m5.95 4.99h-17M18.8 6.9A9 9 0 0 1 12 9.56c-2.85 0-4.7-.73-6.8-2.66m0 0q-.9.84-1.8 1.4m15.4-1.4q.9.84 1.8 1.4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
