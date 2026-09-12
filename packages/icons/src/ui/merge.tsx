import type { Icon } from './types'

export const IconMerge: Icon = ({
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
      data-slot='icon-ui-merge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m15.97 19.02-1.14 1.15c-1.33 1.33-2 2-2.83 2s-1.5-.67-2.83-2l-1.14-1.15'
        stroke='currentColor'
      />
      <path d='M12 13.93v7.8' stroke='currentColor' />
      <path
        d='M7.39 2.08v4.26c0 1.84 0 2.76.37 3.56.38.8 1.09 1.4 2.5 2.57L12 13.93'
        stroke='currentColor'
      />
      <path
        d='M16.61 2.08v4.26c0 1.84 0 2.76-.37 3.56-.38.8-1.09 1.4-2.5 2.57L12 13.93'
        stroke='currentColor'
      />
    </svg>
  )
}
