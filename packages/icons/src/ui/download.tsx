import type { Icon } from './types'

export const IconDownload: Icon = ({
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
      data-slot='icon-ui-download'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.4 14.2h19.2v.77c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H8.4c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M2.69 14.2v.77c0 2.83 0 4.24.88 5.12.87.88 2.29.88 5.12.88h6.62c2.83 0 4.25 0 5.12-.88s.88-2.3.88-5.12v-.78'
        stroke='currentColor'
      />
      <path
        d='m17.37 10.6-2.55 2.57c-1.34 1.33-2 2-2.83 2s-1.5-.67-2.83-2L6.59 10.6'
        stroke='currentColor'
      />
      <path d='M11.98 2v12.82' stroke='currentColor' />
    </svg>
  )
}
