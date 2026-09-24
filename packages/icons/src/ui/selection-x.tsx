import type { Icon } from './types'

export const IconSelectionX: Icon = ({
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
      data-slot='icon-ui-selection-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.3 2.7c2.83 0 4.25 0 5.13.87.88.88.88 2.3.88 5.12v6.62c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88H8.69c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.69c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h6.62'
        fill='currentColor'
      />
      <path d='m8.7 15.3 6.6-6.6' stroke='currentColor' />
      <path d='M15.3 15.3 8.7 8.7' stroke='currentColor' />
      <path
        d='M6.03 2.66h-.08c-1.17 0-1.75 0-2.2.24a2 2 0 0 0-.81.82c-.24.44-.24 1.03-.24 2.2'
        stroke='currentColor'
      />
      <path
        d='M17.98 2.66h.07c1.17 0 1.76 0 2.2.24a2 2 0 0 1 .82.82c.23.44.23 1.03.23 2.2'
        stroke='currentColor'
      />
      <path
        d='M6.03 21.24h-.08c-1.17 0-1.75 0-2.2-.23a2 2 0 0 1-.81-.82c-.24-.44-.24-1.03-.24-2.2'
        stroke='currentColor'
      />
      <path
        d='M17.98 21.24h.07c1.17 0 1.76 0 2.2-.23a2 2 0 0 0 .82-.82c.23-.44.23-1.03.23-2.2'
        stroke='currentColor'
      />
      <path d='M2.76 10.14v3.57' stroke='currentColor' />
      <path d='M21.24 10.14v3.57' stroke='currentColor' />
      <path d='M10.22 21.14h3.57' stroke='currentColor' />
      <path d='M10.22 2.67h3.57' stroke='currentColor' />
    </svg>
  )
}
