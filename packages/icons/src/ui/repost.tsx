import type { Icon } from './types'

export const IconRepost: Icon = ({
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
      data-slot='icon-ui-repost'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M3.95 5.44h10.6c2.4 0 3.6 0 4.42.65a3 3 0 0 1 .49.49c.65.81.65 2.02.65 4.42'
        stroke='currentColor'
      />
      <path
        d='M20.1 18.56H9.52c-2.4 0-3.6 0-4.42-.65a3 3 0 0 1-.49-.49c-.65-.82-.65-2.02-.65-4.42'
        stroke='currentColor'
      />
      <path
        d='m6.01 1.65-.96.96c-1.34 1.33-2 2-2 2.83s.66 1.5 2 2.83l.96.96'
        stroke='currentColor'
      />
      <path
        d='m17.99 22.35.96-.96c1.34-1.33 2-2 2-2.83s-.66-1.5-2-2.83l-.96-.96'
        stroke='currentColor'
      />
    </svg>
  )
}
