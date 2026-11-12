import type { Icon } from './types'

export const IconMountain: Icon = ({
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
      data-slot='icon-ui-mountain'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m5.6 9.14 4.44-.7L14.82 10l3.64-.86 1.33 4.5c1.04 3.53 1.55 5.3.65 6.5s-2.73 1.2-6.4 1.2h-4.01c-3.67 0-5.5 0-6.4-1.2s-.39-2.96.64-6.49z'
        fill='currentColor'
      />
      <path
        d='M12 2.51c4.72 0 7.5 8.72 8.8 14.3.47 2 .7 3.02.1 3.77-.6.76-1.68.76-3.84.76H7.13c-2.24 0-3.36 0-3.96-.78-.6-.79-.32-1.83.24-3.91C4.9 11.07 7.85 2.5 12 2.5'
        stroke='currentColor'
      />
      <path
        d='M17.59 8.85s-1.73 1.27-3.26 1.27c-1.7 0-2.7-1.5-4.36-1.5-1.87 0-4.02 1.15-4.02 1.15'
        stroke='currentColor'
      />
    </svg>
  )
}
