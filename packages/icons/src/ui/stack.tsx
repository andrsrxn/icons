import type { Icon } from './types'

export const IconStack: Icon = ({
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
      data-slot='icon-ui-stack'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.42 17.12c.65 0 .97 0 1.23-.08a2 2 0 0 0 1.4-1.39c.07-.26.07-.58.07-1.23 0-.58 0-.87-.07-1.12a2 2 0 0 0-1.23-1.37c-.24-.1-.53-.12-1.11-.18h-.06c-.54-.07-.8-.1-1.04-.18a2 2 0 0 1-1.2-1.21 5 5 0 0 1-.17-1.05 5 5 0 0 0-.17-1.12 2 2 0 0 0-1.38-1.24c-.25-.07-.54-.07-1.12-.07-.64 0-.96 0-1.22.08a2 2 0 0 0-1.4 1.4c-.07.25-.07.57-.07 1.2v3.56c0 1.88 0 2.82.59 3.41s1.53.59 3.41.59z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M9.28 22.23c.67 0 1 0 1.28-.08a2 2 0 0 0 1.36-1.36c.08-.27.08-.6.08-1.28 0-.6 0-.9-.07-1.15a2 2 0 0 0-1.17-1.34c-.25-.1-.54-.13-1.14-.2l-.32-.05c-.44-.06-.67-.09-.86-.15a2 2 0 0 1-1.28-1.36 5 5 0 0 1-.1-.86 5 5 0 0 0-.12-.97 2 2 0 0 0-1.48-1.38C5.24 12 4.99 12 4.48 12h-.06c-.6 0-.9 0-1.16.06a2 2 0 0 0-1.43 1.43c-.06.25-.06.56-.06 1.16v3.58c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58z'
        fill='currentColor'
      />
      <path
        d='M17.12 12v1.12c0 1.88 0 2.82-.59 3.41s-1.53.59-3.41.59h-2.24c-1.88 0-2.82 0-3.41-.59s-.59-1.53-.59-3.41v-2.24c0-1.88 0-2.82.59-3.41s1.53-.59 3.41-.59H12'
        stroke='currentColor'
      />
      <path
        d='M12 17.12v1.11c0 1.89 0 2.83-.59 3.42-.58.58-1.52.58-3.41.58H5.77c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42V16c0-1.89 0-2.83.58-3.41C2.94 12 3.88 12 5.77 12h1.11'
        stroke='currentColor'
      />
      <rect
        width='10.23'
        height='10.23'
        rx='2'
        transform='matrix(0 -1 -1 0 22.23 12)'
        stroke='currentColor'
      />
    </svg>
  )
}
