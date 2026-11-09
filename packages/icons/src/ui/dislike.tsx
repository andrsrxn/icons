import type { Icon } from './types'

export const IconDislike: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-dislike'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M20.04 2.92c.94 0 1.41 0 1.7.29.3.3.3.76.3 1.7v7.12c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-1.48c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7V4.92c0-.95 0-1.42.3-1.71.29-.3.76-.3 1.7-.3z'
        fill='currentColor'
      />
      <path
        d='M16.35 2.75h-5.6c-2.52 0-3.78 0-4.78.65s-1.5 1.8-2.53 4.1l-.28.63c-1.12 2.53-1.68 3.8-1.1 4.71.6.91 1.99.91 4.76.91h.88c1.23 0 1.85 0 2.15.34s.2 1.02.03 2.39c-.15 1.2-.14 2.57.4 3.51.5.86 1.54 1.16 2.47 1.24.7.07 1.05.1 1.37-.16.31-.26.36-.72.45-1.62.06-.57.16-1.2.32-1.8.37-1.36 1.64-3.3 1.64-3.3h1.75c1.88 0 2.83 0 3.41-.58.59-.59.59-1.53.59-3.42v-3.6c0-1.88 0-2.83-.59-3.41-.58-.59-1.53-.59-3.41-.59z'
        stroke='currentColor'
      />
      <path d='M16.56 14.19V2.75' stroke='currentColor' />
    </svg>
  )
}
