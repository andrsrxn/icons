import type { Icon } from './types'

export const IconRedo: Icon = ({
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
      data-slot='icon-ui-redo'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M19.9 8.63h-9.85a5.69 5.69 0 0 0 0 11.37h.3' stroke='currentColor' />
      <path
        d='M16.48 4.07 18.2 5.8c1.34 1.34 2 2 2 2.83s-.66 1.5-2 2.83l-1.72 1.73'
        stroke='currentColor'
      />
    </svg>
  )
}
