import type { Icon } from './types'

export const IconRectangleDashed: Icon = ({
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
      data-slot='icon-ui-rectangle-dashed'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.2 19.22c3.3 0 4.95 0 5.98-1.03 1.02-1.02 1.02-2.67 1.02-5.97v-.44c0-3.3 0-4.94-1.02-5.97-1.03-1.02-2.68-1.02-5.98-1.02H8.8c-3.3 0-4.95 0-5.98 1.02C1.8 6.84 1.8 8.49 1.8 11.79v.43c0 3.3 0 4.95 1.02 5.97 1.03 1.03 2.68 1.03 5.98 1.03z'
        fill='currentColor'
      />
      <path d='M4.47 4.78H4.4A2.7 2.7 0 0 0 1.76 7.5' stroke='currentColor' />
      <path d='M19.4 4.78h.07A2.7 2.7 0 0 1 22.1 7.5' stroke='currentColor' />
      <path d='M4.43 19.22h-.06a2.65 2.65 0 0 1-2.6-2.68' stroke='currentColor' />
      <path d='M19.58 19.22h.06c1.43 0 2.6-1.2 2.6-2.67' stroke='currentColor' />
      <path d='M1.8 10.7v2.65' stroke='currentColor' />
      <path d='M22.2 10.7v2.65' stroke='currentColor' />
      <path d='M7.7 19.22h2.6' stroke='currentColor' />
      <path d='M13.7 19.22h2.6' stroke='currentColor' />
      <path d='M7.7 4.79h2.6' stroke='currentColor' />
      <path d='M13.7 4.79h2.6' stroke='currentColor' />
    </svg>
  )
}
