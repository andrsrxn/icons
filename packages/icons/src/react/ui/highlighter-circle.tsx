import type { Icon } from './types'

export const IconHighlighterCircle: Icon = ({
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
      data-slot='icon-ui-highlighter-circle'
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
        d='M6.49 20.52c-3.05-1.8-4.3-4.73-4.3-8.52a10.31 10.31 0 0 1 20.62 0c0 3.88-1.13 6.76-4.29 8.52l-.43-3.18-2.4-4.54-1.3-7.13-4.44 3.01-.38 4.12-1.98 3.36z'
        fill='currentColor'
      />
      <path d='M2.2 12a10.3 10.3 0 0 0 10.3 10.31A10.31 10.31 0 1 0 2.2 12' stroke='currentColor' />
      <path d='M17.9 16.79H7.04' stroke='currentColor' />
      <path
        d='m15.3 12.6-.1-4.14c-.04-1.68-.06-2.51-.6-2.78s-1.22.22-2.57 1.2l-1.49 1.09c-.4.3-.6.44-.71.65s-.1.47-.1.97v2.94'
        stroke='currentColor'
      />
      <path
        d='M6.75 20.43V17.7q.05-.8.49-1.45l.22-.3.43-.56q.29-.37.29-.85c0-.78.6-1.4 1.38-1.4h5.97c.78 0 1.43.65 1.43 1.43q.01.44.26.81l.42.6.23.34q.38.65.44 1.39v.4l.01 2.32'
        stroke='currentColor'
      />
    </svg>
  )
}
