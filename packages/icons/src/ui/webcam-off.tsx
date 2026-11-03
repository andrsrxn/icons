import type { Icon } from './types'

export const IconWebcamOff: Icon = ({
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
      data-slot='icon-ui-webcam-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.58 9.6a4.58 4.58 0 1 0-9.15 0 4.58 4.58 0 0 0 9.15 0'
        fill='currentColor'
      />
      <path d='M16.58 9.6a4.58 4.58 0 1 1-9.16 0 4.58 4.58 0 0 1 9.16 0' stroke='currentColor' />
      <path d='M19.83 9.6a7.83 7.83 0 1 1-15.66 0 7.83 7.83 0 0 1 15.66 0' stroke='currentColor' />
      <path d='M12 22.2v-4.77' stroke='currentColor' />
      <path d='M7.72 22.2h8.56' stroke='currentColor' />
      <path d='m2.76 2.74 18.5 18.52' stroke='currentColor' />
    </svg>
  )
}
