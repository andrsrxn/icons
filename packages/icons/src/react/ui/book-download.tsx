import type { Icon } from './types'

export const IconBookDownload: Icon = ({
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
      data-slot='icon-ui-book-download'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.1 5.82c0-1.89 0-2.83.58-3.42s1.53-.58 3.41-.58h9.82c1.89 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v8.62c0 1.89 0 2.83-.59 3.42-.58.58-1.52.58-3.41.58H3.09z'
        fill='currentColor'
      />
      <path
        d='M3.1 7.82c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.12-.88h5.82c2.83 0 4.24 0 5.12.88s.88 2.29.88 5.12v4.62c0 2.83 0 4.25-.88 5.12s-2.3.88-5.12.88H3.09z'
        stroke='currentColor'
      />
      <path
        d='M3.1 18.44c0 1.64 0 2.45.44 3q.13.16.29.3c.55.44 1.37.44 3 .44h8.78c1.64 0 2.45 0 3-.45a2 2 0 0 0 .3-.29c.44-.55.44-1.36.44-3'
        stroke='currentColor'
      />
      <path d='M12 6.2v6.88' stroke='currentColor' />
      <path
        d='m14.97 11.6-.14.13c-1.33 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-.14-.13'
        stroke='currentColor'
      />
    </svg>
  )
}
