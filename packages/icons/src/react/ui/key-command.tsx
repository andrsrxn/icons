import type { Icon } from './types'

export const IconKeyCommand: Icon = ({
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
      data-slot='icon-ui-key-command'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M5.58 8.36A2.83 2.83 0 1 1 8.4 5.52v2.84z' fill='currentColor' />
      <path opacity='.2' d='M18.42 8.36a2.83 2.83 0 1 0-2.83-2.84v2.84z' fill='currentColor' />
      <path opacity='.2' d='M5.58 15.71a2.83 2.83 0 1 0 2.83 2.84V15.7z' fill='currentColor' />
      <path opacity='.2' d='M18.42 15.71a2.83 2.83 0 1 1-2.83 2.84V15.7z' fill='currentColor' />
      <path d='M5.58 8.36A2.83 2.83 0 1 1 8.4 5.52v2.84z' stroke='currentColor' />
      <path d='M18.42 8.36a2.83 2.83 0 1 0-2.83-2.84v2.84z' stroke='currentColor' />
      <path d='M5.58 15.71a2.83 2.83 0 1 0 2.83 2.84V15.7z' stroke='currentColor' />
      <path d='M18.42 15.71a2.83 2.83 0 1 1-2.83 2.84V15.7z' stroke='currentColor' />
      <path d='M8.41 8.36v7.35' stroke='currentColor' />
      <path d='M15.59 15.68V8.32' stroke='currentColor' />
      <path d='M8.41 15.71h7.18' stroke='currentColor' />
      <path d='M15.59 8.32H8.4' stroke='currentColor' />
    </svg>
  )
}
