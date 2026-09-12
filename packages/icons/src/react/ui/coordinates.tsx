import type { Icon } from './types'

export const IconCoordinates: Icon = ({
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
      data-slot='icon-ui-coordinates'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M20.72 18.1H3.25' stroke='currentColor' />
      <path d='M5.9 3.36v17.46' stroke='currentColor' />
      <path
        d='m18.51 21.58.66-.65c1.33-1.33 2-2 2-2.83s-.67-1.5-2-2.83l-.66-.66'
        stroke='currentColor'
      />
      <path
        d='m9.38 5.56-.65-.65c-1.33-1.33-2-2-2.83-2-.82 0-1.5.66-2.83 2l-.65.65'
        stroke='currentColor'
      />
    </svg>
  )
}
