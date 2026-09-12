import type { Icon } from './types'

export const IconRepostCheck: Icon = ({
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
      data-slot='icon-ui-repost-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
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
      <path
        d='m8.83 12.57.62.76c.72.88 1.08 1.32 1.55 1.32.48 0 .84-.44 1.55-1.33l3.04-3.74'
        stroke='currentColor'
      />
    </svg>
  )
}
