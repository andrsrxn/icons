import type { Icon } from './types'

export const IconSortAZ: Icon = ({
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
      data-slot='ui-icon-sort-a-z'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m10.8 17.56-.98.98c-1.33 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-.99-.98M6.99 3.49v16.92m13.05 0h-3.81c-1.12 0-1.67 0-1.8-.32-.12-.32.3-.7 1.14-1.43l3.23-2.84c.84-.74 1.26-1.1 1.14-1.43s-.68-.32-1.8-.32h-3.93m-.33-3.44 1.43-3.96c.8-2.2 1.19-3.28 1.9-3.28.7 0 1.09 1.1 1.87 3.28l1.4 3.96m-1.34-2.61H15.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
