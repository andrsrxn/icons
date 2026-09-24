import type { Icon } from './types'

export const IconMove3d: Icon = ({
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
      data-slot='icon-ui-move-3d'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m18.67 21.82.74-.74c1.33-1.33 2-2 2-2.82 0-.83-.66-1.5-2-2.84l-.74-.74'
        stroke='currentColor'
      />
      <path
        d='m9.31 5.4-.73-.73c-1.34-1.34-2-2-2.83-2s-1.5.66-2.83 2l-.74.74'
        stroke='currentColor'
      />
      <path d='M5.74 18.25h15.38' stroke='currentColor' />
      <path d='M5.74 18.25V2.86' stroke='currentColor' />
      <path d='M5.74 18.25 12 12' stroke='currentColor' />
    </svg>
  )
}
