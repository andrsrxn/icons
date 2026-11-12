import type { Icon } from './types'

export const IconVolumeX: Icon = ({
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
      data-slot='icon-ui-volume-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.94 15.75v-7.5H6.1c-1.65 0-2.47 0-3.03.45l-.27.27c-.46.56-.46 1.38-.46 3.03s0 2.47.46 3.02q.12.15.27.28c.56.45 1.38.45 3.03.45z'
        fill='currentColor'
      />
      <path d='M7.94 8.24v7.25' stroke='currentColor' />
      <path
        d='M7.84 8.24H5.4c-1.5 0-2.26 0-2.79.39a2 2 0 0 0-.43.43c-.39.53-.39 1.28-.39 2.8 0 1.5 0 2.25.39 2.78a2 2 0 0 0 .43.43c.53.39 1.28.39 2.8.39h2.43'
        stroke='currentColor'
      />
      <path
        d='m7.48 8.26 3.65-3c1.42-1.16 2.13-1.74 2.7-1.47s.57 1.19.57 3.02v10.25c0 1.88 0 2.82-.58 3.09-.58.26-1.3-.35-2.72-1.57l-3.62-3.1'
        stroke='currentColor'
      />
      <path d='m22.47 9.63-4.78 4.78' stroke='currentColor' />
      <path d='m17.69 9.62 4.78 4.78' stroke='currentColor' />
    </svg>
  )
}
