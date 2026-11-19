import type { Icon } from './types'

export const IconConnectorDashed: Icon = ({
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
      data-slot='icon-ui-connector-dashed'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M2.69 6a3.33 3.33 0 1 1 6.66 0 3.33 3.33 0 0 1-6.66 0' stroke='currentColor' />
      <path d='M14.66 6a3.33 3.33 0 1 1 6.65 0 3.33 3.33 0 0 1-6.65 0' stroke='currentColor' />
      <path d='M2.69 18a3.33 3.33 0 1 1 6.66 0 3.33 3.33 0 0 1-6.66 0' stroke='currentColor' />
      <path d='M14.65 18a3.33 3.33 0 1 1 6.67 0 3.33 3.33 0 0 1-6.67 0' stroke='currentColor' />
      <path
        opacity='.2'
        d='M2.69 6a3.3 3.3 0 0 0 3.33 3.33A3.33 3.33 0 1 0 2.69 6'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.66 6a3.3 3.3 0 0 0 3.33 3.32 3.33 3.33 0 1 0-3.33-3.33'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M2.69 18a3.3 3.3 0 0 0 3.33 3.33A3.33 3.33 0 1 0 2.69 18'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.65 18a3.3 3.3 0 0 0 3.33 3.34A3.33 3.33 0 1 0 14.65 18'
        fill='currentColor'
      />
      <path d='m14.29 9.7 1.23-1.23' stroke='currentColor' />
      <path d='m11.62 12.38.76-.76' stroke='currentColor' />
      <path d='m8.47 15.53 1.24-1.25' stroke='currentColor' />
    </svg>
  )
}
