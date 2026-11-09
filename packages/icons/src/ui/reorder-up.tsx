import type { Icon } from './types'

export const IconReorderUp: Icon = ({
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
      data-slot='icon-ui-reorder-up'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M9.78 6h-7.1' stroke='currentColor' />
      <path d='M13.08 12H2.68' stroke='currentColor' />
      <path d='M15.75 18H2.68' stroke='currentColor' />
      <path
        d='M21.26 18.72v-5.68c0-2.84 0-4.25-.69-5.27A4 4 0 0 0 19.5 6.7c-1-.7-2.43-.7-5.27-.7'
        stroke='currentColor'
      />
      <path
        d='M15.75 3.34c-1.18 1.18-1.77 1.77-1.84 2.5v.34c.07.73.66 1.32 1.84 2.5'
        stroke='currentColor'
      />
    </svg>
  )
}
