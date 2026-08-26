import type { Icon } from './types'

export const IconSplit: Icon = ({
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
      data-slot='ui-icon-split'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m9.65 19-.5.5c-1.32 1.33-2 2-2.82 2-.83 0-1.5-.67-2.83-2L3 19m18 0-.5.5c-1.33 1.33-2 2-2.82 2-.83 0-1.5-.67-2.83-2l-.5-.5M12 2.75v7.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.3 21.13v-2.42c0-1.75 0-2.63.34-3.4.34-.78.99-1.36 2.29-2.54L12 10m5.68 11.13v-2.51c0-1.75 0-2.62-.35-3.4s-.99-1.36-2.28-2.53L12.08 10'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
