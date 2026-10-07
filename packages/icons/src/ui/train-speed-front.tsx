import type { Icon } from './types'

export const IconTrainSpeedFront: Icon = ({
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
      data-slot='icon-ui-train-speed-front'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M19.98 13.37c0-.94 0-1.42-.22-1.69a1 1 0 0 0-.55-.35c-.34-.08-.77.13-1.62.54l-.06.03c-.44.21-.66.32-.89.39l-.38.08c-.24.04-.48.04-.97.04H8.7c-.47 0-.7 0-.93-.03l-.44-.1a6 6 0 0 1-.85-.39c-.85-.42-1.28-.62-1.62-.55a1 1 0 0 0-.57.35c-.22.28-.22.75-.22 1.7 0 1.86 0 2.79.4 3.49a3 3 0 0 0 1.1 1.1c.7.4 1.63.4 3.5.4h5.9c1.88 0 2.82 0 3.52-.4a3 3 0 0 0 1.09-1.1c.4-.7.4-1.63.4-3.5'
        fill='currentColor'
      />
      <path d='m5.9 18.63-2.07 3.35' stroke='currentColor' />
      <path d='m17.88 18.63 2.3 3.37' stroke='currentColor' />
      <path
        d='M19.57 9.38c-.44-2.98-.66-4.47-1.63-5.41l-.36-.31c-1.08-.83-2.58-.83-5.6-.83s-4.52 0-5.6.83l-.36.31c-.97.95-1.18 2.44-1.62 5.43l-.06.4c-.57 3.95-.86 5.93.17 7.27l.31.36C6 18.63 8 18.63 12 18.63s6 0 7.18-1.2l.31-.37c1.03-1.34.73-3.32.15-7.28z'
        stroke='currentColor'
      />
      <path d='M4.23 10.42s3.42 2.25 7.78 2.25c4.35 0 7.71-2.25 7.71-2.25' stroke='currentColor' />
      <path d='M14.75 15.28h1.69' stroke='currentColor' />
      <path d='M7.6 15.28h1.69' stroke='currentColor' />
    </svg>
  )
}
