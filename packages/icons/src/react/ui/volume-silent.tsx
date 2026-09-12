import type { Icon } from './types'

export const IconVolumeSilent: Icon = ({
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
      data-slot='icon-ui-volume-silent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M7.94 8.24v7.25' stroke='currentColor' />
      <path
        opacity='.2'
        d='M7.94 15.75v-7.5H6.1c-1.65 0-2.47 0-3.03.45l-.27.27c-.46.56-.46 1.38-.46 3.03s0 2.47.46 3.02q.12.15.27.28c.56.45 1.38.45 3.03.45z'
        fill='currentColor'
      />
      <path
        d='M7.84 8.24H5.4c-1.5 0-2.26 0-2.79.39a2 2 0 0 0-.43.43c-.39.53-.39 1.28-.39 2.8 0 1.5 0 2.25.39 2.78a2 2 0 0 0 .43.43c.53.39 1.28.39 2.8.39h2.43'
        stroke='currentColor'
      />
      <path
        d='m7.48 15.47 3.62 3.11c1.42 1.22 2.14 1.83 2.72 1.57.58-.27.58-1.21.58-3.09V6.81c0-1.83 0-2.75-.57-3.02s-1.28.31-2.7 1.47l-3.65 3'
        stroke='currentColor'
      />
      <path d='m17.65 14.41 4.82-4.82m0 4.82L17.65 9.6' stroke='currentColor' />
    </svg>
  )
}
