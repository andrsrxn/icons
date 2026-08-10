import type { Icon } from './types'

export const IconHandReceivingFirstAid: Icon = ({
  size = 24,
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
      data-slot='hand-receiving-first-aid'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.88' y='13.39' width='3.36' height='6.63' rx='1' fill='currentColor' />
      <path
        opacity='.2'
        d='M16.25 4.94V6h1.07c.4 0 .61 0 .77.06q.34.15.49.49c.06.16.06.36.06.77 0 .4 0 .61-.06.77a1 1 0 0 1-.49.49c-.16.06-.36.06-.77.06h-1.07v1.07c0 .41 0 .61-.07.78a1 1 0 0 1-.48.48c-.16.06-.36.06-.77.06s-.62 0-.78-.06a1 1 0 0 1-.48-.48c-.07-.17-.07-.37-.07-.78V8.65h-1.06c-.41 0-.62 0-.78-.06a1 1 0 0 1-.48-.49c-.07-.16-.07-.36-.07-.77 0-.4 0-.61.07-.77q.14-.34.48-.49c.16-.06.37-.06.78-.06h1.06V4.94c0-.41 0-.61.07-.78q.14-.34.48-.48c.16-.07.37-.07.78-.07.4 0 .6 0 .77.07q.35.15.48.48c.07.17.07.37.07.78'
        fill='currentColor'
      />
      <path
        d='M7.25 18.9s.96.77 2.35 1.09c2.76.63 4.18.45 6.63-.39 1.79-.61 3.2-2.25 3.91-3.23a1.4 1.4 0 0 0 .04-1.56 1.66 1.66 0 0 0-2.49-.37c-.86.74-2 1.62-3.1 2.27-.66.37-2.01.3-3.3.3m3.3-.3c.53-1.32.37-2.37-.21-2.57A9 9 0 0 0 11 13.6c-3.13 0-3.75.73-3.75.73'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x='3.88'
        y='13.39'
        width='3.36'
        height='6.63'
        rx='1'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M13.6 4.94c0-.41 0-.61.07-.78q.14-.34.48-.48c.16-.07.37-.07.78-.07.4 0 .6 0 .77.07q.35.15.48.48c.07.17.07.37.07.78v.62q-.02.3.06.38t.38.07h.63c.4 0 .61 0 .77.06q.34.15.49.49c.06.16.06.36.06.77 0 .4 0 .61-.06.77a1 1 0 0 1-.49.49c-.16.06-.36.06-.77.06h-.63q-.29-.02-.38.07-.08.08-.06.38v.62c0 .41 0 .61-.07.78a1 1 0 0 1-.48.48c-.16.06-.36.06-.77.06s-.62 0-.78-.06a1 1 0 0 1-.48-.48c-.07-.17-.07-.37-.07-.78V9.1q.02-.3-.06-.38c-.07-.07-.17-.07-.38-.07h-.62c-.41 0-.62 0-.78-.06a1 1 0 0 1-.48-.49c-.07-.16-.07-.36-.07-.77 0-.4 0-.61.07-.77q.14-.34.48-.49c.16-.06.37-.06.78-.06h.62q.29.02.38-.07.07-.08.06-.38z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
