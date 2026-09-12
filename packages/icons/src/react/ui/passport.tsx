import type { Icon } from './types'

export const IconPassport: Icon = ({
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
      data-slot='icon-ui-passport'
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
        d='M19.85 5.65c0-1.89 0-2.83-.59-3.42-.58-.58-1.53-.58-3.41-.58h-7.7c-1.88 0-2.83 0-3.41.58-.59.59-.59 1.53-.59 3.42v12.7c0 1.89 0 2.83.59 3.42.58.58 1.53.58 3.41.58h7.7c1.88 0 2.83 0 3.41-.58.59-.59.59-1.53.59-3.42zM12 10.57a2.81 2.81 0 1 1 0-5.63 2.81 2.81 0 0 1 0 5.63'
        fill='currentColor'
      />
      <rect x='4.15' y='1.65' width='15.69' height='20.71' rx='2' stroke='currentColor' />
      <path
        d='M14.81 7.75A2.8 2.8 0 0 1 12 10.57a2.81 2.81 0 1 1 2.81-2.82'
        stroke='currentColor'
      />
      <path d='M15.19 11.56a5.6 5.6 0 0 0-6.38 0' stroke='currentColor' />
      <path d='M8.64 14.95h6.7' stroke='currentColor' />
      <path d='M8.64 18.21h6.7' stroke='currentColor' />
    </svg>
  )
}
