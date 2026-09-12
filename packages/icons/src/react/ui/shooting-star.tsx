import type { Icon } from './types'

export const IconShootingStar: Icon = ({
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
      data-slot='icon-ui-shooting-star'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.89 4.1c.78-1.52 1.17-2.28 1.78-2.28s1 .76 1.78 2.29l.18.35c.23.45.34.67.54.81s.44.18.93.26l.4.06c1.69.27 2.54.4 2.73.99.18.58-.42 1.19-1.63 2.4l-.29.29c-.35.35-.52.53-.6.75-.07.23-.03.48.04.97l.07.4c.26 1.7.4 2.54-.1 2.9s-1.26-.03-2.79-.8l-.35-.2c-.45-.22-.67-.33-.91-.33s-.46.11-.9.34l-.37.18c-1.52.78-2.29 1.17-2.78.8-.5-.35-.36-1.2-.1-2.9l.06-.39c.08-.5.12-.74.05-.97-.08-.22-.25-.4-.6-.75l-.29-.29c-1.21-1.21-1.82-1.82-1.63-2.4s1.04-.72 2.73-.99l.4-.06c.5-.08.74-.12.93-.26s.3-.36.54-.8z'
        fill='currentColor'
      />
      <path
        d='M13.89 4.1c.78-1.52 1.17-2.28 1.78-2.28s1 .76 1.78 2.29l.18.35c.23.45.34.67.54.81s.44.18.93.26l.4.06c1.69.27 2.54.4 2.73.99.18.58-.42 1.19-1.63 2.4l-.29.29c-.35.35-.52.53-.6.75-.07.23-.03.48.04.97l.07.4c.26 1.7.4 2.54-.1 2.9s-1.26-.03-2.79-.8l-.35-.2c-.45-.22-.67-.33-.91-.33s-.46.11-.9.34l-.37.18c-1.52.78-2.29 1.17-2.78.8-.5-.35-.36-1.2-.1-2.9l.06-.39c.08-.5.12-.74.05-.97-.08-.22-.25-.4-.6-.75l-.29-.29c-1.21-1.21-1.82-1.82-1.63-2.4s1.04-.72 2.73-.99l.4-.06c.5-.08.74-.12.93-.26s.3-.36.54-.8z'
        stroke='currentColor'
      />
      <path d='M1.75 16.47 7 11.22' stroke='currentColor' />
      <path d='m9.66 22.22 4.79-4.8' stroke='currentColor' />
      <path d='m2.76 22.09 5.75-5.76' stroke='currentColor' />
    </svg>
  )
}
