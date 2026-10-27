import type { Icon } from './types'

export const IconSdk: Icon = ({
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
      data-slot='icon-ui-sdk'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M22.4 8.65c0-1.88 0-2.83-.6-3.41-.58-.59-1.52-.59-3.4-.59H5.6c-1.89 0-2.83 0-3.41.59-.6.58-.6 1.53-.6 3.41v6.7c0 1.88 0 2.83.6 3.41.58.59 1.52.59 3.4.59h12.8c1.88 0 2.82 0 3.4-.59.6-.58.6-1.53.6-3.41z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <rect x='1.61' y='4.65' width='20.78' height='14.69' rx='3' stroke='currentColor' />
      <path
        d='M10.47 13.02V11c0-.84 0-1.26.36-1.56.37-.3.7-.23 1.34-.1 1.06.2 2.22.85 2.22 2.67s-1.16 2.46-2.22 2.67c-.65.13-.97.2-1.34-.1-.36-.3-.36-.72-.36-1.56'
        stroke='currentColor'
      />
      <path
        d='M7.91 9.95a2.6 2.6 0 0 0-1.76-.73c-.85 0-1.77.47-1.77 1.45 0 2.1 3.53.43 3.53 2.56 0 1-.9 1.53-1.76 1.53-.87 0-1.45-.26-1.84-.85'
        stroke='currentColor'
      />
      <path d='M16.87 9.24v5.54' stroke='currentColor' />
      <path d='m17.64 12 2.05-2.76' stroke='currentColor' />
      <path d='m17.64 12 2.05 2.77' stroke='currentColor' />
    </svg>
  )
}
