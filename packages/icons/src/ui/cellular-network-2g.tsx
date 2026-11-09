import type { Icon } from './types'

export const IconCellularNetwork2g: Icon = ({
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
      data-slot='icon-ui-cellular-network-2g'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M7.67 7.53a7.3 7.3 0 0 1 4.35-1.44c1.94 0 3.56.66 4.36 1.44' stroke='currentColor' />
      <path
        d='M4.96 4.27A11.6 11.6 0 0 1 12 1.78c3.13 0 5.31 1.1 7.05 2.49'
        stroke='currentColor'
      />
      <path
        d='M19.25 13.14a4.8 4.8 0 1 0-.05 8.59c.34-.17.52-.26.67-.5s.15-.5.15-1v-1.48c0-.47 0-.7-.15-.85s-.38-.15-.85-.15h-1.56'
        stroke='currentColor'
      />
      <path
        d='M4.35 13.79c1.03-1.69 4.78-1.81 4.78 1.39 0 2.31-3.07 3.41-4.75 6.36-.18.31.06.68.42.68h4.45'
        stroke='currentColor'
      />
    </svg>
  )
}
