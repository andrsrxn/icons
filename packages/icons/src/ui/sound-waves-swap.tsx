import type { Icon } from './types'

export const IconSoundWavesSwap: Icon = ({
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
      data-slot='icon-ui-sound-waves-swap'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M18.96 9.24v-1c0-1.88 0-2.83-.59-3.41-.58-.59-1.52-.59-3.41-.59h-.23'
        stroke='currentColor'
      />
      <path d='M5.04 14.7v1c0 1.88 0 2.82.6 3.4.58.6 1.52.6 3.4.6h.23' stroke='currentColor' />
      <path
        d='M21.52 7.91c-1.07 1.08-1.6 1.62-2.26 1.71a2 2 0 0 1-.6 0c-.65-.1-1.19-.63-2.26-1.7'
        stroke='currentColor'
      />
      <path
        d='M2.48 15.98c1.08-1.08 1.61-1.62 2.26-1.71a2 2 0 0 1 .6 0c.65.1 1.19.63 2.27 1.7'
        stroke='currentColor'
      />
      <path d='M2.47 3.25v4.36' stroke='currentColor' />
      <path d='M14.71 16.32v4.36' stroke='currentColor' />
      <path d='M9.27 3.25v4.36' stroke='currentColor' />
      <path d='M21.52 16.32v4.36' stroke='currentColor' />
      <path d='M5.87 1.63v7.6' stroke='currentColor' />
      <path d='M18.12 14.7v7.6' stroke='currentColor' />
    </svg>
  )
}
