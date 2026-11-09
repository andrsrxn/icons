import type { Icon } from './types'

export const IconHeartPlus: Icon = ({
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
      data-slot='icon-ui-heart-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M17.25 3.35c-1.8 0-3.27.9-4.23 1.8-.55.52-.82.78-1.02.78s-.47-.26-1.02-.78a6.3 6.3 0 0 0-4.23-1.8C3.4 3.35.88 7.17 1.96 11.2c.73 2.72 3.87 5.1 6.63 7.25 1.81 1.41 2.72 2.12 3.41 2.12s1.6-.7 3.41-2.12c2.76-2.15 5.9-4.53 6.63-7.25 1.08-4.04-1.44-7.86-4.79-7.86'
        fill='currentColor'
      />
      <path
        d='M13.02 5.15c.96-.9 2.43-1.8 4.23-1.8 3.35 0 5.87 3.82 4.79 7.86-.73 2.72-3.87 5.1-6.63 7.25-1.81 1.41-2.72 2.12-3.41 2.12s-1.6-.7-3.41-2.12h0c-2.76-2.15-5.9-4.53-6.63-7.25C.88 7.17 3.4 3.35 6.75 3.35c1.8 0 3.27.9 4.23 1.8.55.52.82.78 1.02.78s.47-.26 1.02-.78'
        stroke='currentColor'
      />
      <path d='M8.72 12.5h6.56' stroke='currentColor' />
      <path d='M12 15.78V9.22' stroke='currentColor' />
    </svg>
  )
}
