import type { Icon } from './types'

export const IconSaturation: Icon = ({
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
      data-slot='icon-ui-saturation'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.23 15.24c0 2.83 0 4.25-.88 5.13-.87.87-2.29.87-5.12.87H7.6c-2.06 0-3.09 0-3.34-.61-.26-.62.47-1.35 1.92-2.8L17.82 6.18C19.27 4.73 20 4 20.62 4.25s.61 1.29.61 3.34z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.61 21.38h6.77c2.83 0 4.24 0 5.12-.87.88-.88.88-2.3.88-5.13V8.62c0-2.83 0-4.25-.88-5.13s-2.3-.87-5.12-.87H8.61c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v6.76c0 2.83 0 4.25.88 5.13s2.3.87 5.12.87'
        stroke='currentColor'
      />
      <path d='M10.71 8.08H5.5' stroke='currentColor' />
      <path d='M18.43 16.33H13.6' stroke='currentColor' />
      <path d='M8.1 5.47v5.21' stroke='currentColor' />
      <path d='M20.39 3.72 3.6 20.5' stroke='currentColor' />
    </svg>
  )
}
