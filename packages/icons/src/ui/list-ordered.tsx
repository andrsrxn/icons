import type { Icon } from './types'

export const IconListOrdered: Icon = ({
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
      data-slot='icon-ui-list-ordered'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.38 6H8.82' stroke='currentColor' />
      <path d='M21.38 12H8.82' stroke='currentColor' />
      <path d='M21.38 18H8.82' stroke='currentColor' />
      <path
        d='m2.67 5.66.38-.24c.68-.43 1.02-.65 1.28-.5.26.13.26.54.26 1.34v4.34'
        stroke='currentColor'
      />
      <path
        d='M2.86 14.1c.6-.98 2.8-1.05 2.8.82 0 1.29-1.61 1.94-2.62 3.46-.2.3.04.68.4.68h2.3'
        stroke='currentColor'
      />
    </svg>
  )
}
