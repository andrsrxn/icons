import type { Icon } from './types'

export const IconSendToBack: Icon = ({
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
      data-slot='icon-ui-send-to-back'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.17 15.26c0-.6.49-1.09 1.09-1.09s1.09-.48 1.09-1.08v-1.44c0-1.88 0-2.82-.59-3.41s-1.53-.59-3.41-.59H10.9c-.6 0-1.08.5-1.08 1.1s-.49 1.08-1.09 1.08-1.09.48-1.09 1.08v1.44c0 1.88 0 2.82.59 3.41s1.53.59 3.41.59h1.44c.6 0 1.08-.5 1.08-1.1'
        fill='currentColor'
      />
      <rect
        width='8.69'
        height='8.69'
        rx='2'
        transform='matrix(0 -1 -1 0 10.46 10.39)'
        stroke='currentColor'
      />
      <path d='M10.55 7.65h1.8c1.88 0 2.82 0 3.41.59s.59 1.53.59 3.41v1.8' stroke='currentColor' />
      <path d='M7.65 10.43v1.92c0 1.88 0 2.82.59 3.41s1.53.59 3.41.59h1.85' stroke='currentColor' />
      <rect
        width='8.69'
        height='8.69'
        rx='2'
        transform='matrix(0 -1 -1 0 22.23 22.3)'
        stroke='currentColor'
      />
    </svg>
  )
}
