import type { Icon } from './types'

export const IconSubsetOf: Icon = ({
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
      data-slot='icon-ui-subset-of'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M19 19.46H5.28' stroke='currentColor' />
      <path
        d='M18.6 4.54 13 6.3c-5.03 1.55-7.55 2.33-7.55 3.8s2.52 2.26 7.54 3.83l5.61 1.75'
        stroke='currentColor'
      />
    </svg>
  )
}
