import type { Icon } from './types'

export const IconFileLock: Icon = ({
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
      data-slot='icon-ui-file-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.67 22.2c-1.88 0-2.82 0-3.4-.6-.6-.58-.6-1.52-.6-3.4V5.76c0-1.87 0-2.8.58-3.39.58-.58 1.52-.59 3.38-.6l2.22-.03c1.3-.02 1.96-.02 2.44.26a2 2 0 0 1 .69.69c.29.47.29 1.13.29 2.43 0 1.29 0 1.93.28 2.4a2 2 0 0 0 .69.69c.47.29 1.12.29 2.4.29 1.3 0 1.94 0 2.42.28a2 2 0 0 1 .68.68c.29.48.29 1.13.29 2.42v5.66H17.8l-.28.03-.17.04c-.52.12-.78.18-1 .29a2 2 0 0 0-1 1.17c-.07.23-.1.5-.13 1.03l-.15 2.08h-7.4'
        fill='currentColor'
      />
      <path
        d='M20.03 11.5v-1.26c0-1.25 0-1.87-.24-2.43s-.68-1-1.57-1.87L17.04 4.8l-1.23-1.23c-.87-.87-1.3-1.3-1.85-1.53s-1.17-.23-2.4-.23H9.68c-2.82 0-4.24 0-5.12.88S3.67 5 3.67 7.81v8.38c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h1.24'
        stroke='currentColor'
      />
      <path
        d='M13.07 2.33v2.44c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.45'
        stroke='currentColor'
      />
      <rect x='14.95' y='17.54' width='6.39' height='4.77' rx='1' stroke='currentColor' />
      <path d='m19.94 17.54-.16-1.34a1.63 1.63 0 0 0-3.23-.01l-.17 1.35' stroke='currentColor' />
    </svg>
  )
}
