import type { Icon } from './types'

export const IconFileControls: Icon = ({
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
      data-slot='icon-ui-file-controls'
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
        d='M7.63 1.77c-1.86.02-2.8.03-3.38.61-.58.59-.58 1.52-.58 3.4v12.41c0 1.89 0 2.83.6 3.42.58.58 1.52.58 3.4.58h10.46v-2.73l1.9-.37v-7.2c0-1.3 0-1.94-.29-2.42a2 2 0 0 0-.68-.68c-.48-.28-1.12-.28-2.41-.28-1.3 0-1.94 0-2.41-.29a2 2 0 0 1-.69-.68c-.28-.48-.28-1.12-.28-2.41 0-1.3 0-1.96-.3-2.43a2 2 0 0 0-.67-.7c-.48-.28-1.13-.28-2.44-.26zM16 17.02a1.63 1.63 0 1 1 0-3.26 1.63 1.63 0 0 1 0 3.26'
        fill='currentColor'
      />
      <path
        d='M20.03 11.36v-1.12c0-1.25 0-1.87-.24-2.43s-.68-1-1.57-1.87L17.04 4.8l-1.23-1.23c-.87-.87-1.3-1.3-1.85-1.53s-1.17-.23-2.4-.23H9.68c-2.82 0-4.24 0-5.12.88S3.67 5 3.67 7.81v8.38c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h.63'
        stroke='currentColor'
      />
      <path
        d='M13.07 2.33v2.44c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.45'
        stroke='currentColor'
      />
      <path d='M21.83 15.4h-4.21' stroke='currentColor' />
      <path d='M13.7 20.56h4.2' stroke='currentColor' />
      <path d='M14.36 15.39h-1.32' stroke='currentColor' />
      <path d='M21.15 20.56h1.36' stroke='currentColor' />
      <circle cx='15.99' cy='15.39' r='1.63' transform='rotate(90 16 15.4)' stroke='currentColor' />
      <circle
        cx='1.63'
        cy='1.63'
        r='1.63'
        transform='matrix(0 1 1 0 17.9 18.94)'
        stroke='currentColor'
      />
    </svg>
  )
}
