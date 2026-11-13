import type { Icon } from './types'

export const IconArrowsHorizontalLines: Icon = ({
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
      data-slot='icon-ui-arrows-horizontal-lines'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M5.3 12h13.4' stroke='currentColor' />
      <path
        d='m16.36 8.66.52.5c1.33 1.34 2 2 2 2.84s-.66 1.5-2 2.83l-.52.52'
        stroke='currentColor'
      />
      <path
        d='m7.68 8.66-.51.5c-1.34 1.34-2 2-2 2.84s.66 1.5 2 2.83l.51.52'
        stroke='currentColor'
      />
      <path d='M1.73 17.88V6.12' stroke='currentColor' />
      <path d='M22.27 17.88V6.12' stroke='currentColor' />
    </svg>
  )
}
