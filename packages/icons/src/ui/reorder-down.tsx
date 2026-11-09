import type { Icon } from './types'

export const IconReorderDown: Icon = ({
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
      data-slot='icon-ui-reorder-down'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M9.78 18h-7.1' stroke='currentColor' />
      <path d='M13.08 12H2.68' stroke='currentColor' />
      <path d='M15.75 6H2.68' stroke='currentColor' />
      <path
        d='M21.26 5.29v5.68c0 2.83 0 4.25-.69 5.27a4 4 0 0 1-1.07 1.07c-1.01.69-2.43.69-5.27.69'
        stroke='currentColor'
      />
      <path
        d='M15.75 20.67c-1.18-1.18-1.77-1.77-1.84-2.5v-.35c.07-.72.66-1.31 1.84-2.5'
        stroke='currentColor'
      />
    </svg>
  )
}
