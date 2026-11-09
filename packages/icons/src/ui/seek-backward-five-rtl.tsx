import type { Icon } from './types'

export const IconSeekBackwardFiveRtl: Icon = ({
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
      data-slot='icon-ui-seek-backward-five-rtl'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='12.33' cy='12' rx='10.24' ry='10.15' fill='currentColor' />
      <path
        d='m20.89 3.07.25 1.17c.23 1.09.35 1.63.08 2.04s-.81.53-1.9.76l-1.18.25'
        stroke='currentColor'
      />
      <path
        d='M21.26 16.68A10.15 10.15 0 1 1 10.12 2.1c5.48-1.17 8.94 2.66 10.4 3.96'
        stroke='currentColor'
      />
      <path
        d='M14.3 8.36h-3.97a.5.5 0 0 0-.5.44l-.34 3.16c-.02.17.17.28.32.21 1.67-.8 4.75-.73 4.75 1.95 0 3.42-4.01 3.29-5.12 1.49'
        stroke='currentColor'
      />
    </svg>
  )
}
