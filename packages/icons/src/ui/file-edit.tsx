import type { Icon } from './types'

export const IconFileEdit: Icon = ({
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
      data-slot='icon-ui-file-edit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.67 22.24c-1.89 0-2.83 0-3.42-.59s-.58-1.53-.58-3.41V5.74c0-1.87 0-2.8.58-3.38.57-.59 1.5-.6 3.38-.62l2.24-.02c1.31-.01 1.97-.02 2.45.27q.42.25.68.67c.3.48.3 1.14.3 2.45 0 1.3 0 1.95.29 2.43q.25.41.67.67c.48.3 1.13.3 2.43.3s1.95 0 2.43.28q.41.26.67.67c.3.48.3 1.13.3 2.43v2.96l-4.85 4.46-1.14 2.93z'
        fill='currentColor'
      />
      <path
        d='M20.08 11.28v-1.05c0-1.25 0-1.87-.23-2.43s-.69-1-1.58-1.87l-1.19-1.15-1.24-1.24c-.87-.87-1.3-1.3-1.85-1.53s-1.17-.23-2.39-.23H9.67c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v8.46c0 2.82 0 4.24.88 5.12s2.29.88 5.12.88h.48'
        stroke='currentColor'
      />
      <path d='M13.1 2.3v2.47c0 1.88 0 2.83.58 3.41s1.53.59 3.41.59h2.48' stroke='currentColor' />
      <rect
        opacity='.2'
        width='2.36'
        height='2.64'
        rx='1'
        transform='scale(1 -1)rotate(45 31.82 15.94)'
        fill='currentColor'
      />
      <path d='m20.59 17.84-1.78-1.77' stroke='currentColor' />
      <path
        d='M15.15 22.6c.55-.12.83-.18 1.07-.3l.03-.02c.24-.14.44-.33.84-.72l4.54-4.46c.31-.3.47-.46.54-.63a1 1 0 0 0 0-.81c-.07-.18-.22-.33-.53-.64s-.47-.47-.64-.54a1 1 0 0 0-.8 0c-.18.07-.33.23-.64.54l-4.51 4.5c-.4.38-.6.58-.73.82l-.02.05c-.13.24-.19.5-.3 1.05-.15.65-.22.97-.05 1.16l.04.04c.19.17.51.1 1.16-.04'
        stroke='currentColor'
      />
    </svg>
  )
}
