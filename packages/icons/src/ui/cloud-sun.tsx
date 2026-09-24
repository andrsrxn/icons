import type { Icon } from './types'

export const IconCloudSun: Icon = ({
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
      data-slot='icon-ui-cloud-sun'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M4.86 19.16c-.91 0-1.8-.4-2.4-1.07a3.7 3.7 0 0 1-.97-2.49 3.47 3.47 0 0 1 3.37-3.56c1.1 0 2.08.56 2.7 1.43'
        stroke='currentColor'
      />
      <path d='M15.03 19.16H4.73' stroke='currentColor' />
      <path
        d='M5.26 12.04a4.06 4.06 0 0 1 7.46-.94c.66 1.16.64 2.33.48 3.1'
        stroke='currentColor'
      />
      <path
        d='M13.32 12.74a2.8 2.8 0 0 1 2.69.09 3.4 3.4 0 0 1 1.25 4.66c-.56.97-1.32 1.56-2.1 1.66'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M15.64 13.18c-1.47-.8-2.8-.35-2.96-2.11s.57-2.74 2.33-2.9a3.2 3.2 0 0 1 3.5 2.9c.15 1.76-1.2 2.86-2.87 2.1'
        fill='currentColor'
      />
      <path d='M17.27 13.9a3.2 3.2 0 1 0-4.96-3.7' stroke='currentColor' />
      <path d='M21.09 11.64h1.42' stroke='currentColor' />
      <path d='M14.18 5.76v-1.4' stroke='currentColor' />
      <path d='m19.35 6.92.96-1.16' stroke='currentColor' />
    </svg>
  )
}
