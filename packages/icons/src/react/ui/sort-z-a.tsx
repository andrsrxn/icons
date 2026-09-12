import type { Icon } from './types'

export const IconSortZA: Icon = ({
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
      data-slot='icon-ui-sort-z-a'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m10.8 6.61-.98-.99c-1.33-1.33-2-2-2.83-2s-1.5.66-2.83 2l-.99.99'
        stroke='currentColor'
      />
      <path d='M6.99 20.68V3.75' stroke='currentColor' />
      <path
        d='M20.04 20.41h-3.81c-1.12 0-1.67 0-1.8-.32-.12-.32.3-.7 1.14-1.43l3.23-2.84c.84-.74 1.26-1.1 1.14-1.43s-.68-.32-1.8-.32h-3.93'
        stroke='currentColor'
      />
      <path
        d='m13.88 10.63 1.43-3.96c.8-2.2 1.19-3.28 1.9-3.28.7 0 1.09 1.1 1.87 3.28l1.4 3.96'
        stroke='currentColor'
      />
      <path d='M19.14 8.02H15.3' stroke='currentColor' />
    </svg>
  )
}
