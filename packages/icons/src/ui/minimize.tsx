import type { Icon } from './types'

export const IconMinimize: Icon = ({
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
      data-slot='icon-ui-minimize'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M21.32 16h-1.27c-1.89 0-2.83 0-3.42.59s-.58 1.53-.58 3.42v1.27'
        stroke='currentColor'
      />
      <path d='M2.71 16h1.27c1.89 0 2.83 0 3.42.59s.58 1.53.58 3.42v1.27' stroke='currentColor' />
      <path
        d='M21.28 8.01h-1.23c-1.89 0-2.83 0-3.42-.58-.59-.59-.59-1.53-.59-3.42V2.77'
        stroke='currentColor'
      />
      <path
        d='M2.75 8.01h1.23c1.89 0 2.83 0 3.42-.58.58-.59.58-1.53.58-3.42V2.77'
        stroke='currentColor'
      />
    </svg>
  )
}
