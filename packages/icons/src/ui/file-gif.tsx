import type { Icon } from './types'

export const IconFileGif: Icon = ({
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
      data-slot='icon-ui-file-gif'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.8 13.12v-7.4c0-1.86 0-2.8.57-3.38.58-.58 1.51-.6 3.38-.61l2.24-.02c1.32-.02 1.97-.02 2.46.26q.4.26.68.68c.3.48.3 1.13.3 2.45 0 1.3 0 1.95.28 2.43q.26.41.67.67c.48.29 1.13.29 2.43.29s1.96 0 2.44.29q.41.26.66.67c.3.48.3 1.13.3 2.43v1.24z'
        fill='currentColor'
      />
      <path
        d='M3.8 13.05V7.77c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.12-.88h1.93c1.23 0 1.84 0 2.4.23.54.23.98.66 1.84 1.52l1.25 1.25 1.18 1.15c.9.87 1.34 1.3 1.58 1.87.24.56.24 1.18.24 2.43v2.83'
        stroke='currentColor'
      />
      <path
        d='M13.22 2.29v2.46c0 1.9 0 2.83.58 3.42.59.59 1.53.59 3.42.59h2.47'
        stroke='currentColor'
      />
      <path d='M15.76 15.82v6.59' stroke='currentColor' />
      <path d='M15.76 15.82h4.55' stroke='currentColor' />
      <path d='M15.76 19.32h3.42' stroke='currentColor' />
      <path d='M12.12 22.4v-6.58' stroke='currentColor' />
      <path
        d='M8.42 16.17a3.26 3.26 0 1 0-.32 5.95c.33-.12.49-.18.67-.44.17-.26.17-.5.17-1.01V19.3H7.21'
        stroke='currentColor'
      />
    </svg>
  )
}
