import type { Icon } from './types'

export const IconLogicBuffer: Icon = ({
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
      data-slot='icon-ui-logic-buffer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.04 13.46c.73-.69 1.1-1.03 1.1-1.46s-.37-.77-1.1-1.46l-4.26-4C9.33 5.18 8.6 4.5 8 4.77S7.4 6.02 7.4 8v8c0 1.98 0 2.97.6 3.23s1.32-.41 2.77-1.77z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M16.6 12h5.73' stroke='currentColor' />
      <path d='M1.67 8.46h5.74' stroke='currentColor' />
      <path d='M1.67 15.54h5.74' stroke='currentColor' />
      <path
        d='m10.75 17.62 4.6-4.13c.77-.7 1.15-1.04 1.15-1.49s-.38-.8-1.15-1.49l-4.6-4.13C9.3 5.08 8.59 4.44 8 4.7c-.6.27-.6 1.23-.6 3.16v8.28c0 1.93 0 2.9.6 3.16s1.31-.39 2.75-1.68'
        stroke='currentColor'
      />
    </svg>
  )
}
