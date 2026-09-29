import type { Icon } from './types'

export const IconBoneBroken: Icon = ({
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
      data-slot='icon-ui-bone-broken'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.28 14.53h1.86a1 1 0 0 0 .61-.21l2.63-2.03a1 1 0 0 1 1.31.08l1.98 1.96a1 1 0 0 1 .02 1.39l-2.07 2.24a1 1 0 0 0-.27.73l.1 1.93a1 1 0 0 1-.84 1.04l-1.57.24a1 1 0 0 1-1.03-.5l-1.15-2.13a1 1 0 0 0-.32-.35l-2-1.33a1 1 0 0 1-.43-.98l.18-1.23a1 1 0 0 1 .99-.85'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20.98 9.2h-2.34a1 1 0 0 0-.7.28l-2.22 2.17a1 1 0 0 1-1.39.01l-2.72-2.55 2.62-2.83a1 1 0 0 0 .27-.68V3.43c0-.36.2-.7.51-.88l1.15-.63a1 1 0 0 1 1.33.34l1.27 2.01a1 1 0 0 0 .46.4l2.14.87a1 1 0 0 1 .62.93V8.2a1 1 0 0 1-1 1'
        fill='currentColor'
      />
      <path
        d='M5.74 18.31a2.34 2.34 0 1 1-3.31-3.3 2.4 2.4 0 0 1 2.51-.52c.55.21.83.32.97.29s.29-.17.57-.46l2.55-2.54m-3.31 6.5a2.34 2.34 0 1 0 3.84.84c-.2-.56-.3-.84-.28-.98.03-.14.17-.28.45-.56L12.31 15'
        stroke='currentColor'
      />
      <path
        d='M18.28 5.77a2.34 2.34 0 1 0-3.85-.83c.21.56.31.83.28.98-.03.14-.17.28-.45.56L11.7 9.06m6.57-3.31a2.34 2.34 0 1 1 .83 3.85c-.56-.21-.84-.32-.98-.29s-.28.17-.56.45l-2.58 2.58'
        stroke='currentColor'
      />
      <path d='m9.46 7.26-.22-1.33' stroke='currentColor' />
      <path d='m16.71 14.32 1.44.27' stroke='currentColor' />
      <path d='m7.4 9.4-1.46-.17' stroke='currentColor' />
      <path d='m14.54 16.62.16 1.42' stroke='currentColor' />
    </svg>
  )
}
