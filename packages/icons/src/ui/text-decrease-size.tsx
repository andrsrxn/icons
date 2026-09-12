import type { Icon } from './types'

export const IconTextDecreaseSize: Icon = ({
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
      data-slot='icon-ui-text-decrease-size'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m2.65 18.79 2.52-8.8c.78-2.75 1.17-4.12 1.93-4.12.75 0 1.14 1.38 1.91 4.12l2.48 8.8'
        stroke='currentColor'
      />
      <path d='M9.88 13.56H4.26' stroke='currentColor' />
      <path
        d='m21.35 16.05-.7.7c-1.33 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-.7-.7'
        stroke='currentColor'
      />
      <path d='M17.82 18.35V10' stroke='currentColor' />
    </svg>
  )
}
