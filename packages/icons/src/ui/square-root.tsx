import type { Icon } from './types'

export const IconSquareRoot: Icon = ({
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
      data-slot='icon-ui-square-root'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M1.56 11.98h1.75c.63 0 .94 0 1.19.16.24.16.37.44.63 1.01l1.36 3c.91 2 1.37 3 2.05 2.96.69-.04 1.02-1.1 1.68-3.19l3.12-9.88c.21-.67.32-1 .58-1.2s.61-.2 1.31-.2l7.21-.04'
        stroke='currentColor'
      />
      <path
        d='M15.46 18.74c1.72-.3 2.77-1.69 3.5-3.37.7-1.6 1.55-2.95 3.24-3.37'
        stroke='currentColor'
      />
      <path
        d='M22.2 18.74h-.35c-.56 0-.84 0-1.07-.13-.23-.14-.37-.37-.65-.85l-1.43-2.4-1.24-2.25c-.28-.5-.42-.76-.66-.9-.23-.13-.52-.13-1.1-.13h-.26'
        stroke='currentColor'
      />
    </svg>
  )
}
