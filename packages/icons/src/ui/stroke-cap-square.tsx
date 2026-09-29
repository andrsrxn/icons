import type { Icon } from './types'

export const IconStrokeCapSquare: Icon = ({
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
      data-slot='icon-ui-stroke-cap-square'
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
        d='M19.98 6.32c.95 0 1.42 0 1.71.3.3.29.3.76.3 1.7v7.36c0 .94 0 1.41-.3 1.7s-.76.3-1.7.3H3.68c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7V8.32c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3zm-4.1 7.99a2.3 2.3 0 1 1 0-4.62 2.3 2.3 0 0 1 0 4.62'
        fill='currentColor'
      />
      <path d='M1.7 12h11.86' stroke='currentColor' />
      <path d='M18.18 12a2.3 2.3 0 0 1-2.3 2.3 2.3 2.3 0 1 1 2.3-2.3' stroke='currentColor' />
      <path
        d='M1.7 17.68h14.92c2.51 0 3.77 0 4.61-.71a3 3 0 0 0 .36-.36c.7-.84.7-2.1.7-4.61s0-3.77-.7-4.61a3 3 0 0 0-.36-.36c-.84-.7-2.1-.7-4.61-.7H1.7'
        stroke='currentColor'
      />
    </svg>
  )
}
