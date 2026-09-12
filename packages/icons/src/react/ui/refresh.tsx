import type { Icon } from './types'

export const IconRefresh: Icon = ({
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
      data-slot='icon-ui-refresh'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M20.38 8.6c-2.24-3.19-4.95-5.38-8.8-5.38q-5.75 0-8.43 5' stroke='currentColor' />
      <path d='M3.65 15.4c2.24 3.14 4.92 5.38 8.77 5.38q5.75 0 8.43-5' stroke='currentColor' />
      <path
        d='M21.34 4.23v1.3c0 1.9 0 2.84-.58 3.43-.59.58-1.53.58-3.42.58h-1.31'
        stroke='currentColor'
      />
      <path
        d='M2.66 19.77v-1.3c0-1.9 0-2.84.58-3.43.59-.58 1.53-.58 3.42-.58h1.31'
        stroke='currentColor'
      />
    </svg>
  )
}
