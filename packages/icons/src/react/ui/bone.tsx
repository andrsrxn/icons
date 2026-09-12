import type { Icon } from './types'

export const IconBone: Icon = ({
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
      data-slot='icon-ui-bone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.28 14.53h1.8a1 1 0 0 0 .69-.28l8.41-7.96a1 1 0 0 0 .32-.72V3.43c0-.36.2-.7.51-.88l1.15-.63a1 1 0 0 1 1.33.34l1.27 2.01a1 1 0 0 0 .46.4l2.14.87a1 1 0 0 1 .62.93V8.2a1 1 0 0 1-1 1h-2.32a1 1 0 0 0-.72.3l-8.3 8.45a1 1 0 0 0-.29.76l.1 1.9a1 1 0 0 1-.84 1.05l-1.57.24a1 1 0 0 1-1.03-.51l-1.15-2.12a1 1 0 0 0-.32-.35l-2-1.33a1 1 0 0 1-.43-.98l.18-1.23a1 1 0 0 1 .99-.85'
        fill='currentColor'
      />
      <path
        d='M18.28 5.77a2.34 2.34 0 1 0-3.85-.83c.21.56.31.83.28.98-.03.14-.17.28-.44.56l-7.79 7.84c-.28.28-.42.42-.57.46-.14.03-.42-.08-.97-.3a2.4 2.4 0 0 0-2.51.52 2.34 2.34 0 0 0 3.31 3.31M18.26 5.75a2.34 2.34 0 1 1 .83 3.85c-.56-.21-.84-.32-.98-.29s-.28.17-.56.45l-7.82 7.82c-.28.28-.42.42-.45.56s.08.42.28.98a2.35 2.35 0 1 1-3.84-.83'
        stroke='currentColor'
      />
    </svg>
  )
}
