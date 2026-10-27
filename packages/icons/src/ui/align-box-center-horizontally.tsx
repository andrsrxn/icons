import type { Icon } from './types'

export const IconAlignBoxCenterHorizontally: Icon = ({
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
      data-slot='icon-ui-align-box-center-horizontally'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.76 8.76c0-2.83 0-4.25.88-5.13s2.29-.87 5.12-.87h6.47c2.83 0 4.25 0 5.12.87.88.88.88 2.3.88 5.13v6.48c0 2.82 0 4.24-.88 5.12-.87.88-2.29.88-5.12.88H8.76c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.61 2.62h6.77c2.83 0 4.24 0 5.12.87.88.88.88 2.3.88 5.13v6.76c0 2.83 0 4.25-.88 5.13s-2.3.87-5.12.87H8.61c-2.83 0-4.24 0-5.12-.87-.88-.88-.88-2.3-.88-5.13V8.62c0-2.83 0-4.25.88-5.13s2.3-.87 5.12-.87'
        stroke='currentColor'
      />
      <path d='M17.48 14.6V9.4' stroke='currentColor' />
      <path d='M6.51 14.6V9.4' stroke='currentColor' />
      <path d='M12 16.3V7.7' stroke='currentColor' />
    </svg>
  )
}
