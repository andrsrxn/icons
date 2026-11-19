import type { Icon } from './types'

export const IconListWarning: Icon = ({
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
      data-slot='icon-ui-list-warning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.19 6H2.8' stroke='currentColor' />
      <path d='M12.49 12H2.8' stroke='currentColor' />
      <path d='M12.49 18H2.8' stroke='currentColor' />
      <path d='M18.37 15.63v-4.88' stroke='currentColor' />
      <path
        d='M18.89 19.25a.51.51 0 1 1-1.03 0 .51.51 0 0 1 1.03 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
