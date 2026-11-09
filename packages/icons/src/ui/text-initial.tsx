import type { Icon } from './types'

export const IconTextInitial: Icon = ({
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
      data-slot='icon-ui-text-initial'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.3 5.35h-9.92' stroke='currentColor' />
      <path d='M21.3 15.1H2.7' stroke='currentColor' />
      <path d='M21.3 10.06h-8.9' stroke='currentColor' />
      <path d='M21.3 19.96H2.7' stroke='currentColor' />
      <path
        d='m3 11.51 1.35-4.6h0c.67-2.27 1-3.4 1.62-3.4.63.02.93 1.16 1.54 3.44l1.21 4.56'
        stroke='currentColor'
      />
      <path d='M4.07 8.44h3.7' stroke='currentColor' />
    </svg>
  )
}
