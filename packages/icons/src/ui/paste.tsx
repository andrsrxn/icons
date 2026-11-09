import type { Icon } from './types'

export const IconPaste: Icon = ({
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
      data-slot='icon-ui-paste'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.3 22.28c-3.46 0-5.2 0-6.33-1q-.19-.17-.34-.35c-1-1.14-1-2.87-1-6.34V5.52c0-1.03.83-1.87 1.86-1.87h.37c.5 0 .95.3 1.16.74.17.36.49.62.87.7l2.61.63.22.05a4 4 0 0 0 1.19.06l.22-.02 2.16-.26c.52-.07.96-.44 1.1-.94.18-.57.7-.96 1.28-.96h.43c1.05 0 1.9.85 1.9 1.9v9.04c0 3.47 0 5.2-1 6.34q-.18.19-.35.34c-1.14 1-2.87 1-6.34 1'
        fill='currentColor'
      />
      <path
        d='M19 20a2.27 2.27 0 0 1-2.27 2.28H11.3c-3.47 0-5.2 0-6.34-1q-.19-.17-.34-.35c-1-1.14-1-2.87-1-6.34V6.63A3 3 0 0 1 6.6 3.65'
        stroke='currentColor'
      />
      <path
        d='m18.53 16.76.7-.7c1.33-1.32 2-2 2-2.82 0-.83-.67-1.5-2-2.83l-.7-.7'
        stroke='currentColor'
      />
      <path
        d='M15.98 3.65c0-.4 0-.6-.04-.77a1.5 1.5 0 0 0-1.13-1.12c-.16-.04-.37-.04-.77-.04H8.58c-.4 0-.6 0-.77.04-.56.13-1 .57-1.13 1.12-.04.17-.04.37-.04.77v0c0 .4 0 .6.04.77.13.56.57 1 1.13 1.13.16.04.36.04.77.04h5.46c.4 0 .6 0 .77-.04.56-.13 1-.57 1.13-1.13.04-.16.04-.36.04-.77'
        stroke='currentColor'
      />
      <path d='M11.47 13.24h9.6' stroke='currentColor' />
      <path d='M16.2 3.65h.04A2.76 2.76 0 0 1 19 6.42' stroke='currentColor' />
    </svg>
  )
}
