import type { Icon } from './types'

export const IconSelectionCursor: Icon = ({
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
      data-slot='icon-ui-selection-cursor'
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
        d='M15.3 2.7c2.83 0 4.25 0 5.13.87.88.88.88 2.3.88 5.12v7.2l-7.66-2.16 1.89 7.58H8.69c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.69c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h6.62'
        fill='currentColor'
      />
      <path d='M6.03 2.66h-.08l-.45.01a3 3 0 0 0-2.8 2.8v.45' stroke='currentColor' />
      <path d='M17.98 2.66h.07l.45.01a3 3 0 0 1 2.8 2.8v.45' stroke='currentColor' />
      <path d='M6.03 21.24H5.5a3 3 0 0 1-2.8-2.8V18' stroke='currentColor' />
      <path d='M2.76 10.14v3.57' stroke='currentColor' />
      <path d='M21.3 10.14v2.14' stroke='currentColor' />
      <path d='M10.22 2.67h3.57' stroke='currentColor' />
      <path d='M10.22 21.3H12' stroke='currentColor' />
      <path
        d='m15.19 20.27-1.15-3.48c-.53-1.63-.8-2.45-.37-2.88.43-.44 1.25-.18 2.89.35l3.49 1.12c1.4.46 2.11.69 2.3 1.06a1 1 0 0 1 .03.84c-.17.39-.86.66-2.24 1.2h0c-.52.2-.77.3-.99.46a2 2 0 0 0-.42.42c-.15.22-.25.47-.45.99h0c-.53 1.37-.8 2.05-1.18 2.22a1 1 0 0 1-.85-.03c-.37-.18-.6-.88-1.06-2.27'
        stroke='currentColor'
      />
    </svg>
  )
}
