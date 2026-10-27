import type { Icon } from './types'

export const IconAlignBoxLeftBottom: Icon = ({
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
      data-slot='icon-ui-align-box-left-bottom'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.24 21.24c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V8.76c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H8.76c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v6.48c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M21.38 15.38V8.62c0-2.83 0-4.25-.88-5.13s-2.3-.87-5.12-.87H8.61c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v6.76c0 2.83 0 4.25.88 5.13s2.3.87 5.12.87h6.77c2.83 0 4.24 0 5.12-.87.88-.88.88-2.3.88-5.13'
        stroke='currentColor'
      />
      <path d='M6.45 14.13h5.19' stroke='currentColor' />
      <path d='M6.45 17.77h8.6' stroke='currentColor' />
    </svg>
  )
}
