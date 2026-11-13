import type { Icon } from './types'

export const IconVolumeVibrate: Icon = ({
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
      data-slot='icon-ui-volume-vibrate'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.95 15.75v-7.5H6.13c-1.65 0-2.47 0-3.02.45l-.28.28c-.45.55-.45 1.37-.45 3.02 0 1.64 0 2.47.45 3.02q.13.16.28.27c.55.46 1.37.46 3.02.46z'
        fill='currentColor'
      />
      <path d='M7.95 8.25v7.24' stroke='currentColor' />
      <path
        d='M7.86 8.25H5.42h0c-1.5 0-2.26 0-2.78.38a2 2 0 0 0-.44.44c-.39.53-.39 1.28-.39 2.78s0 2.26.39 2.79a2 2 0 0 0 .44.43c.52.39 1.27.39 2.78.39h2.44'
        stroke='currentColor'
      />
      <path
        d='m7.5 8.26 3.64-2.99c1.42-1.16 2.13-1.74 2.7-1.47s.57 1.19.57 3.02v10.23c0 1.88 0 2.82-.58 3.09s-1.3-.34-2.72-1.57l-3.62-3.1'
        stroke='currentColor'
      />
      <path
        d='m20.37 6.42-1.1 1.7c-.35.53-.53.8-.53 1.09s.18.56.52 1.1l.4.6c.34.53.52.8.52 1.09s-.18.56-.52 1.1l-.4.6c-.34.53-.52.8-.52 1.1 0 .29.18.55.52 1.09l1.11 1.7'
        stroke='currentColor'
      />
    </svg>
  )
}
