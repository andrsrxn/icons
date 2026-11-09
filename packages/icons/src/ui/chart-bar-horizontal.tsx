import type { Icon } from './types'

export const IconChartBarHorizontal: Icon = ({
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
      data-slot='icon-ui-chart-bar-horizontal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M2.76 22.28V1.72' stroke='currentColor' />
      <path
        opacity='.2'
        d='M14.43 3.2c1.35 0 2.03 0 2.46.4l.07.07c.4.44.4 1.11.4 2.46s0 2.03-.4 2.46l-.07.07c-.43.4-1.1.4-2.46.4H5.7c-1.35 0-2.03 0-2.46-.4l-.07-.07c-.4-.43-.4-1.1-.4-2.46s0-2.02.4-2.46l.07-.07c.43-.4 1.1-.4 2.46-.4z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M10 14.93c1.36 0 2.03 0 2.46.4l.08.08c.4.43.4 1.1.4 2.46s0 2.02-.4 2.46l-.08.07c-.43.4-1.1.4-2.45.4H5.7c-1.35 0-2.03 0-2.46-.4l-.07-.07c-.4-.44-.4-1.11-.4-2.46s0-2.03.4-2.46l.07-.07c.43-.4 1.1-.4 2.46-.4z'
        fill='currentColor'
      />
      <path
        d='M2.76 14.93H18.3c1.35 0 2.03 0 2.46-.4l.07-.07c.4-.43.4-1.11.4-2.46s0-2.03-.4-2.46l-.07-.07c-.43-.4-1.1-.4-2.46-.4H2.76'
        stroke='currentColor'
      />
      <path
        d='M2.76 9.07h11.67c1.35 0 2.03 0 2.46-.4l.07-.08c.4-.43.4-1.1.4-2.46s0-2.02-.4-2.46l-.07-.07c-.43-.4-1.1-.4-2.46-.4H2.76'
        stroke='currentColor'
      />
      <path
        d='M12.94 14.93v2.87c0 1.42 0 2.12-.44 2.56s-1.14.44-2.56.44H2.76'
        stroke='currentColor'
      />
    </svg>
  )
}
