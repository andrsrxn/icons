import type { Icon } from './types'

export const IconSubtitles: Icon = ({
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
      data-slot='icon-ui-subtitles'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.72 12c0-3.08 0-4.62.8-5.69a4 4 0 0 1 .8-.8c1.06-.8 2.6-.8 5.68-.8h6c3.08 0 4.62 0 5.69.8q.45.35.79.8c.8 1.07.8 2.6.8 5.69 0 3.08 0 4.62-.8 5.69a4 4 0 0 1-.8.8c-1.06.8-2.6.8-5.68.8H9c-3.08 0-4.62 0-5.69-.8a4 4 0 0 1-.79-.8c-.8-1.07-.8-2.61-.8-5.69'
        fill='currentColor'
      />
      <path d='M4.84 15.7h8.32' stroke='currentColor' />
      <path d='M4.84 12.12h3.38' stroke='currentColor' />
      <path d='M16.5 15.7h2.66' stroke='currentColor' />
      <path d='M12 12.12h7.16' stroke='currentColor' />
      <path
        d='M9 19.28h6c3.08 0 4.62 0 5.69-.8a4 4 0 0 0 .79-.8c.8-1.06.8-2.6.8-5.68v0c0-3.08 0-4.62-.8-5.69a4 4 0 0 0-.8-.8c-1.06-.8-2.6-.8-5.68-.8H9c-3.08 0-4.62 0-5.69.8a4 4 0 0 0-.79.8c-.8 1.07-.8 2.6-.8 5.69v0c0 3.08 0 4.62.8 5.69q.35.45.8.8c1.06.8 2.6.8 5.68.8'
        stroke='currentColor'
      />
    </svg>
  )
}
