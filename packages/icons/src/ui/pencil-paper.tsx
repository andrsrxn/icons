import type { Icon } from './types'

export const IconPencilPaper: Icon = ({
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
      data-slot='icon-ui-pencil-paper'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.05 14.95V9.6c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h7.48l-8.95 9.1v3.56h3.23L20.4 7.3v7.65c0 2.83 0 4.25-.88 5.13s-2.3.87-5.12.87H9.05c-2.83 0-4.25 0-5.13-.87-.87-.88-.87-2.3-.87-5.13'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.48'
        height='5.01'
        rx='1'
        transform='scale(1 -1)rotate(45 19.87 18.76)'
        fill='currentColor'
      />
      <path
        d='M20.4 12.17v3.08c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H8.75c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V9.6c0-2.83 0-4.24.88-5.12s2.29-.88 5.12-.88h3.2'
        stroke='currentColor'
      />
      <path d='m19.22 7.96-3.14-3.14' stroke='currentColor' />
      <path
        d='M9.9 16.55c.46-.14.69-.2.89-.32l.03-.02c.2-.12.37-.29.71-.62l9.42-9.28c.49-.49.74-.73.85-1 .16-.37.16-.8 0-1.17-.1-.27-.35-.52-.84-1a4 4 0 0 0-1-.85 1.5 1.5 0 0 0-1.16 0c-.27.11-.52.36-1 .84l-9.37 9.34c-.34.34-.51.51-.64.71l-.02.04c-.12.2-.19.43-.33.89-.46 1.5-.69 2.26-.3 2.68l.06.06c.42.39 1.18.16 2.7-.3'
        stroke='currentColor'
      />
    </svg>
  )
}
