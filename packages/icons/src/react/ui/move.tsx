import type { Icon } from './types'

export const IconMove: Icon = ({
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
      data-slot='icon-ui-move'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m8.94 19.17.25.25c1.34 1.34 2 2 2.83 2s1.5-.66 2.83-2l.26-.25'
        stroke='currentColor'
      />
      <path
        d='m19.17 8.97.24.24c1.33 1.33 2 2 2 2.83s-.67 1.5-2 2.83l-.24.24'
        stroke='currentColor'
      />
      <path
        d='m4.83 15.06-.24-.24c-1.33-1.33-2-2-2-2.83 0-.82.67-1.5 2-2.83l.24-.24'
        stroke='currentColor'
      />
      <path
        d='m15.03 4.83-.22-.22c-1.34-1.33-2-2-2.83-2s-1.5.66-2.83 2l-.23.22'
        stroke='currentColor'
      />
      <path d='M21.22 12H2.78' stroke='currentColor' />
      <path d='M11.97 21.22V2.78' stroke='currentColor' />
    </svg>
  )
}
