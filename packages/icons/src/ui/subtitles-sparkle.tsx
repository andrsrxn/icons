import type { Icon } from './types'

export const IconSubtitlesSparkle: Icon = ({
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
      data-slot='icon-ui-subtitles-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.75 5.44a2.4 2.4 0 0 0-1.7-.72H7.72c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v2.56c0 2.83 0 4.25.88 5.13s2.29.87 5.12.87h8.56c2.83 0 4.24 0 5.12-.87.88-.88.88-2.3.88-5.13V6.91c0-.79-.66-1.4-1.44-1.34h-.03c-.42.03-.8.27-1.02.64a1.3 1.3 0 0 1-2.05.25z'
        fill='currentColor'
      />
      <path d='M4.84 15.7h8.32' stroke='currentColor' />
      <path d='M4.84 12.12h3.38' stroke='currentColor' />
      <path d='M16.5 15.7h2.66' stroke='currentColor' />
      <path d='M12 12.12h7.16' stroke='currentColor' />
      <path
        d='M10.98 4.72H7.72c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v2.56c0 2.83 0 4.25.88 5.13s2.29.87 5.12.87h8.56c2.83 0 4.24 0 5.12-.87.88-.88.88-2.3.88-5.13v-2.55'
        stroke='currentColor'
      />
      <path d='M14.99 5.25c1.82 0 3.77-1.96 3.77-3.77' stroke='currentColor' />
      <path d='M22.54 5.25c-1.81 0-3.78-1.96-3.78-3.77' stroke='currentColor' />
      <path d='M14.99 5.26c1.8 0 3.77 2 3.77 3.77' stroke='currentColor' />
      <path d='M22.54 5.26c-1.79 0-3.78 1.97-3.78 3.77' stroke='currentColor' />
    </svg>
  )
}
