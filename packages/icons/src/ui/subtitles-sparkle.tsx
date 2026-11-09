import type { Icon } from './types'

export const IconSubtitlesSparkle: Icon = ({
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
      data-slot='icon-ui-subtitles-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.05 4.72H9c-3.08 0-4.62 0-5.69.8a4 4 0 0 0-.79.8c-.8 1.06-.8 2.6-.8 5.68s0 4.62.8 5.69q.35.45.8.8c1.06.8 2.6.8 5.68.8h5.28c3.77 0 5.66 0 6.83-1.18 1.17-1.17 1.17-3.05 1.17-6.83V5.46l-2.15.16-1.2 2.07z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M4.84 15.7h8.32' stroke='currentColor' />
      <path d='M4.84 12.12h3.38' stroke='currentColor' />
      <path d='M16.5 15.7h2.66' stroke='currentColor' />
      <path d='M12 12.12h7.16' stroke='currentColor' />
      <path
        d='M10.98 4.72H9c-3.08 0-4.62 0-5.69.8a4 4 0 0 0-.79.8c-.8 1.06-.8 2.6-.8 5.68s0 4.62.8 5.69q.35.45.8.8c1.06.8 2.6.8 5.68.8h5.28c3.77 0 5.66 0 6.83-1.18 1.17-1.17 1.17-3.05 1.17-6.83v-.55'
        stroke='currentColor'
      />
      <path d='M18.76 1.48c0 1.8-1.95 3.77-3.77 3.77' stroke='currentColor' />
      <path d='M18.76 1.48c0 1.81 1.97 3.77 3.78 3.77' stroke='currentColor' />
      <path d='M18.76 9.03c0-1.78-1.96-3.77-3.77-3.77' stroke='currentColor' />
      <path d='M18.76 9.03c0-1.8 1.99-3.77 3.78-3.77' stroke='currentColor' />
    </svg>
  )
}
