import type { Icon } from './types'

export const IconMouseMiddleClick: Icon = ({
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
      data-slot='icon-ui-mouse-middle-click'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M5.14 18.2h13.72v4.38H5.14z' fill='currentColor' />
      <path
        opacity='.2'
        d='M12 15.61a2.1 2.1 0 0 1-2.1-2.1v-2.02a2.1 2.1 0 1 1 4.2 0v2.02a2.1 2.1 0 0 1-2.1 2.1'
        fill='currentColor'
      />
      <path d='M5.14 22.58v-9.94a6.86 6.86 0 1 1 13.72 0v9.94' stroke='currentColor' />
      <path d='M18.86 18.39H5.14' stroke='currentColor' />
      <rect
        width='3.82'
        height='5.83'
        rx='1.91'
        transform='matrix(-1 0 0 1 13.88 9.58)'
        stroke='currentColor'
      />
      <path d='M11.96 18.39v-2.94' stroke='currentColor' />
      <path d='M11.96 9.53V5.78' stroke='currentColor' />
      <path d='m10.07 3.2-.81-1.64' stroke='currentColor' />
      <path d='m13.87 3.25.87-1.66' stroke='currentColor' />
    </svg>
  )
}
