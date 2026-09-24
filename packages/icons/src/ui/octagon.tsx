import type { Icon } from './types'

export const IconOctagon: Icon = ({
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
      data-slot='icon-ui-octagon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M10.53 2.13A4 4 0 0 1 12 1.7c.38 0 .74.14 1.47.43l2.25.89 2.22.96c.72.31 1.08.47 1.35.73.26.27.42.63.73 1.35l.96 2.22.9 2.25c.28.73.42 1.09.42 1.47s-.14.74-.43 1.47l-.89 2.25-.96 2.22a5 5 0 0 1-.73 1.35c-.27.26-.63.42-1.35.73l-2.22.96-2.25.9c-.73.28-1.09.42-1.47.42s-.74-.14-1.47-.43l-2.25-.89-2.22-.96a5 5 0 0 1-1.35-.73 5 5 0 0 1-.73-1.35l-.96-2.22-.9-2.25A4 4 0 0 1 1.7 12c0-.38.14-.74.43-1.47l.89-2.25.96-2.22c.31-.72.47-1.08.73-1.35.27-.26.63-.42 1.35-.73l2.22-.96z'
        fill='currentColor'
      />
      <path
        d='M9.65 2.4c1.16-.5 1.74-.74 2.35-.74s1.2.24 2.35.74l1.38.59 1.4.56c1.17.47 1.75.7 2.18 1.14s.67 1.01 1.14 2.18l.56 1.4.6 1.38c.49 1.16.73 1.74.73 2.35s-.24 1.2-.74 2.35l-.59 1.38-.56 1.4c-.47 1.17-.7 1.75-1.14 2.18s-1.01.67-2.18 1.14l-1.4.56-1.38.6c-1.16.49-1.74.73-2.35.73s-1.2-.24-2.35-.74l-1.38-.59-1.4-.56c-1.17-.47-1.75-.7-2.18-1.14s-.67-1.01-1.14-2.18l-.56-1.4-.6-1.38c-.49-1.16-.73-1.74-.73-2.35s.24-1.2.74-2.35l.59-1.38.56-1.4c.47-1.17.7-1.75 1.14-2.18s1.01-.67 2.18-1.14l1.4-.56z'
        stroke='currentColor'
      />
    </svg>
  )
}
