import type { Icon } from './types'

export const IconClipboard: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-clipboard'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M8.8 21.47c-1.9 0-2.84 0-3.42-.59s-.59-1.53-.59-3.41V5.75C4.8 4.78 5.57 4 6.54 4h.35c.46 0 .9.27 1.09.7.16.33.46.57.81.65l2.51.6c.35.08.52.12.7.13s.36 0 .71-.05l2.08-.26c.5-.06.9-.4 1.05-.88.15-.53.64-.89 1.19-.89h.4c.98 0 1.78.8 1.78 1.78v11.69c0 1.88 0 2.82-.59 3.41-.58.59-1.53.59-3.41.59z'
        fill='currentColor'
      />
      <path
        d='M16.58 4a2.63 2.63 0 0 1 2.63 2.63v8.84c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88h-2.42c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V6.79A2.8 2.8 0 0 1 7.6 4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='7.62'
        y='5.81'
        width='3.63'
        height='8.75'
        rx='1'
        transform='rotate(-90 7.62 5.81)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M15 9.54H9m6 4H9m6 4H9' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
