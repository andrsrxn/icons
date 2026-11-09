import type { Icon } from './types'

export const IconCellularNetwork3g: Icon = ({
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
      data-slot='icon-ui-cellular-network-3g'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M7.63 7.52A7.3 7.3 0 0 1 12 6.08c1.94 0 3.57.65 4.37 1.44' stroke='currentColor' />
      <path
        d='M4.92 4.25a11.6 11.6 0 0 1 7.06-2.49c3.14 0 5.33 1.1 7.07 2.5'
        stroke='currentColor'
      />
      <path
        d='M19.23 13.14a4.8 4.8 0 1 0-.05 8.59c.35-.17.52-.26.67-.5s.15-.5.15-1v-1.48c0-.47 0-.7-.14-.85s-.38-.15-.86-.15h-1.56'
        stroke='currentColor'
      />
      <path
        d='M4.16 21.1c1.12 1.82 5.16 1.95 5.16-1.49 0-1.73-1.34-2.23-2.78-2.27 1.28-.03 2.47-.64 2.47-2.27 0-3.24-3.8-3.12-4.85-1.4'
        stroke='currentColor'
      />
    </svg>
  )
}
