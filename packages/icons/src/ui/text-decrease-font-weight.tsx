import type { Icon } from './types'

export const IconTextDecreaseFontWeight: Icon = ({
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
      data-slot='icon-ui-text-decrease-font-weight'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m21.35 16.05-.7.7c-1.33 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-.7-.7'
        stroke='currentColor'
      />
      <path d='M17.82 18.35V10' stroke='currentColor' />
      <path d='M4.8 5.81h2.05a3 3 0 0 1 0 6H5.79' stroke='currentColor' />
      <path d='M5.8 11.8h1.46a3.5 3.5 0 0 1 0 6.99H4.97' stroke='currentColor' />
      <path
        d='M5.02 5.81c-.34 0-.51 0-.65.03a2 2 0 0 0-1.7 1.7c-.02.13-.02.3-.02.64v8.24c0 .34 0 .5.02.65a2 2 0 0 0 1.7 1.7l.65.01'
        stroke='currentColor'
      />
    </svg>
  )
}
