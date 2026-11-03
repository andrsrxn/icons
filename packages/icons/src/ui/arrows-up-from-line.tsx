import type { Icon } from './types'

export const IconArrowsUpFromLine: Icon = ({
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
      data-slot='icon-ui-arrows-up-from-line'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m18.91 4.72-.2-.2c-1.33-1.34-2-2-2.83-2s-1.5.66-2.83 2l-.2.2'
        stroke='currentColor'
      />
      <path
        d='m10.13 4.72-.2-.2c-1.33-1.34-2-2-2.83-2s-1.5.66-2.83 2l-.2.2'
        stroke='currentColor'
      />
      <path d='M15.88 17.85V3' stroke='currentColor' />
      <path d='M7.1 17.85V3' stroke='currentColor' />
      <path d='M4.14 21.25h14.7' stroke='currentColor' />
    </svg>
  )
}
