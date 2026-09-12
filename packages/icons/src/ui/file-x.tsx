import type { Icon } from './types'

export const IconFileX: Icon = ({
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
      data-slot='icon-ui-file-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.72 22.24c-1.89 0-2.83 0-3.42-.59-.58-.58-.58-1.52-.58-3.41V5.78c0-1.87 0-2.8.57-3.38.58-.59 1.52-.6 3.38-.62l2.24-.02c1.3-.02 1.96-.02 2.44.27a2 2 0 0 1 .69.67c.29.48.29 1.14.29 2.44s0 1.95.29 2.42q.25.42.67.68c.48.29 1.13.29 2.42.29 1.3 0 1.95 0 2.43.29q.41.26.67.67c.3.48.3 1.13.3 2.43v4.52c0 .84 0 1.26-.17 1.63-.16.38-.46.67-1.07 1.25L17 21.12c-.58.56-.86.83-1.22.98-.36.14-.76.14-1.56.14z'
        fill='currentColor'
      />
      <path
        d='M20.1 12.43v-2.17c0-1.25 0-1.87-.24-2.43s-.68-1-1.57-1.87L17.1 4.81l-1.24-1.23c-.87-.87-1.3-1.3-1.85-1.53s-1.17-.23-2.39-.23h-1.9c-2.83 0-4.25 0-5.13.88S3.72 5 3.72 7.82v8.42c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88h1.96'
        stroke='currentColor'
      />
      <path d='M13.13 2.34v2.45c0 1.9 0 2.84.58 3.42s1.53.59 3.42.59h2.46' stroke='currentColor' />
      <path d='m15.86 15.98 6.1 6.11' stroke='currentColor' />
      <path d='m15.85 22.1 6.1-6.12' stroke='currentColor' />
    </svg>
  )
}
