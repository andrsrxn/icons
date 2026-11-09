import type { Icon } from './types'

export const IconContainer: Icon = ({
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
      data-slot='icon-ui-container'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.74 11.61c0-3.3 0-4.95 1.02-5.98C3.8 4.61 5.44 4.61 8.74 4.61h6.52c3.3 0 4.95 0 5.98 1.02 1.02 1.03 1.02 2.68 1.02 5.98v.82c0 3.3 0 4.95-1.02 5.97-1.03 1.03-2.68 1.03-5.98 1.03H8.74c-3.3 0-4.95 0-5.98-1.03-1.02-1.02-1.02-2.67-1.02-5.97z'
        fill='currentColor'
      />
      <path
        d='M8.74 19.43h6.52c3.3 0 4.95 0 5.98-1.03 1.02-1.02 1.02-2.67 1.02-5.97v-.82c0-3.3 0-4.95-1.02-5.97C20.2 4.6 18.56 4.6 15.26 4.6H8.74c-3.3 0-4.95 0-5.98 1.03C1.74 6.66 1.74 8.3 1.74 11.6v.82c0 3.3 0 4.95 1.02 5.97 1.03 1.03 2.68 1.03 5.98 1.03'
        stroke='currentColor'
      />
      <path d='M5.6 14.74V9.3' stroke='currentColor' />
      <path d='M9.87 14.74V9.3' stroke='currentColor' />
      <path d='M14.13 14.74V9.3' stroke='currentColor' />
      <path d='M18.4 14.74V9.3' stroke='currentColor' />
    </svg>
  )
}
