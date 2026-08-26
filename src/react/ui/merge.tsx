import type { Icon } from './types'

export const IconMerge: Icon = ({
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
      data-slot='ui-icon-merge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m15.72 18.6-.89.9c-1.33 1.33-2 2-2.83 2s-1.5-.67-2.83-2l-.89-.9M12 13.84v7.3M7.68 2.75V6.5c0 1.83 0 2.75.38 3.56.38.8 1.08 1.4 2.5 2.57L12 13.84m4.32-11.09V6.5c0 1.83 0 2.75-.38 3.56-.38.8-1.08 1.4-2.5 2.57L12 13.84'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
