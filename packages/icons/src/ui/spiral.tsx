import type { Icon } from './types'

export const IconSpiral: Icon = ({
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
      data-slot='icon-ui-spiral'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M2.46 14.22v-1.46A9.54 9.54 0 0 1 12 3.22h.76A8.8 8.8 0 0 1 21.54 12v1.17c0 4.2-3.41 7.61-7.61 7.61H13a6.7 6.7 0 0 1-6.68-6.67v-1.03a5.65 5.65 0 0 1 5.64-5.66h.96c2.6 0 4.7 2.1 4.7 4.69v.97a3.73 3.73 0 0 1-3.77 3.73h-1.13a2.6 2.6 0 0 1-2.56-2.6v-.64c0-1.06.85-1.92 1.9-1.94h.18c.99-.02 1.8.77 1.8 1.76'
        stroke='currentColor'
      />
    </svg>
  )
}
