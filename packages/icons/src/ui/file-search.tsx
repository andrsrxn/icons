import type { Icon } from './types'

export const IconFileSearch: Icon = ({
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
      data-slot='icon-ui-file-search'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.7 22.25c-1.89 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42V5.78c0-1.87 0-2.8.58-3.38s1.51-.6 3.38-.62l2.23-.02c1.31-.01 1.97-.02 2.45.27a2 2 0 0 1 .68.67c.3.48.3 1.14.3 2.45 0 1.3 0 1.94.29 2.42q.25.42.67.67c.48.3 1.13.3 2.42.3 1.3 0 1.95 0 2.43.28q.42.26.67.68c.3.47.3 1.12.3 2.42v3.47l-1.4-.42c-.37-.11-.55-.17-.73-.2a2 2 0 0 0-.82.09c-.18.05-.35.14-.7.32-.52.28-.78.42-.98.6a2 2 0 0 0-.6 1.13c-.05.27-.02.56.04 1.14.05.45.07.67.14.88q.16.5.56.86c.16.14.35.26.74.48l.75.43c.56.32.9.91.9 1.55z'
        fill='currentColor'
      />
      <path
        d='M20.1 11.74v-1.48c0-1.24 0-1.87-.24-2.43s-.69-1-1.58-1.86L17.1 4.82l-1.24-1.24c-.87-.87-1.3-1.3-1.85-1.53s-1.17-.23-2.4-.23H9.7c-2.83 0-4.24 0-5.12.88S3.7 5 3.7 7.82v8.43c0 2.83 0 4.25.88 5.12s2.3.88 5.12.88h2.19'
        stroke='currentColor'
      />
      <path d='M13.12 2.34V4.8c0 1.89 0 2.83.58 3.42s1.53.58 3.41.58h2.47' stroke='currentColor' />
      <path d='m20.1 20.72 1.88 1.89' stroke='currentColor' />
      <path d='M21 18.22a3.2 3.2 0 0 1-3.22 3.23A3.22 3.22 0 1 1 21 18.22' stroke='currentColor' />
    </svg>
  )
}
