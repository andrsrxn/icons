import type { Icon } from './types'

export const IconLogicOr: Icon = ({
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
      data-slot='icon-ui-logic-or'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M16.6 12h5.73' stroke='currentColor' />
      <path d='M1.67 8.46h6.61' stroke='currentColor' />
      <path d='M1.67 15.54h6.61' stroke='currentColor' />
      <path
        opacity='.2'
        d='M9.5 19.08c1.01 0 1.52 0 1.94-.06a6 6 0 0 0 5.1-5.09c.05-.42.05-.92.05-1.93s0-1.51-.06-1.93a6 6 0 0 0-5.09-5.1c-.42-.05-.93-.05-1.93-.05h-.14c-.37 0-.56 0-.7.02a1.5 1.5 0 0 0-1.2 1.66c.01.15.07.33.19.68l1.24 3.78c.15.47.23.7.23.94s-.08.47-.23.94l-1.24 3.78c-.12.35-.18.53-.2.68-.1.78.43 1.5 1.2 1.66.15.02.34.02.71.02z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M9 12c0 2-.75 3.93-1.44 5.3l-.3.6c-.22.65.13 1.22.81 1.32h1.7a7 7 0 0 0 6.82-6.81v-.81a7 7 0 0 0-6.82-6.83H8.66l-.59.01c-.68.1-1.03.67-.8 1.32q.01.07.3.6A12.5 12.5 0 0 1 9 12'
        stroke='currentColor'
      />
    </svg>
  )
}
