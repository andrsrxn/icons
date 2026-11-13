import type { Icon } from './types'

export const IconMarkdown: Icon = ({
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
      data-slot='icon-ui-markdown'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.4 12c0-3.14 0-4.71-.84-5.8a4 4 0 0 0-.73-.71c-1.08-.84-2.65-.84-5.79-.84H8.96c-3.14 0-4.71 0-5.8.84a4 4 0 0 0-.72.72c-.83 1.08-.83 2.65-.83 5.79s0 4.71.83 5.8a4 4 0 0 0 .73.71c1.08.84 2.65.84 5.79.84h6.08c3.14 0 4.71 0 5.8-.84a4 4 0 0 0 .72-.72c.83-1.08.83-2.65.83-5.79'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.96 19.35h6.08c3.14 0 4.71 0 5.8-.84a4 4 0 0 0 .72-.72c.83-1.08.83-2.65.83-5.79v0c0-3.14 0-4.71-.83-5.8a4 4 0 0 0-.73-.71c-1.08-.84-2.65-.84-5.79-.84H8.96c-3.14 0-4.71 0-5.8.84a4 4 0 0 0-.72.72c-.83 1.08-.83 2.65-.83 5.79v0c0 3.14 0 4.71.83 5.8a4 4 0 0 0 .73.71c1.08.84 2.65.84 5.79.84'
        stroke='currentColor'
      />
      <path
        d='M5.56 15.26V9.93h0c0-.8 0-1.2.2-1.26.22-.07.44.26.9.92l.99 1.47c.23.33.34.5.5.5s.27-.17.5-.51l.92-1.4c.45-.68.67-1.02.88-.96.22.07.22.47.22 1.3v5.27'
        stroke='currentColor'
      />
      <path
        d='m13.98 13.39.85.85c.79.8 1.19 1.2 1.68 1.2.5 0 .89-.4 1.68-1.2l.86-.85'
        stroke='currentColor'
      />
      <path d='M16.51 15.16V8.73' stroke='currentColor' />
    </svg>
  )
}
