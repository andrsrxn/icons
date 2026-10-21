import type { Icon } from './types'

export const IconFishSymbol: Icon = ({
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
      data-slot='icon-ui-fish-symbol'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <ellipse opacity='.2' cx='13.55' cy='12' rx='8.55' ry='4.41' fill='currentColor' />
      <path d='M1.68 7.84s3.43 8.66 12.25 8.66c5.39 0 8.64-4.47 8.64-4.47' stroke='currentColor' />
      <path d='M1.68 16.16s3.43-8.58 12.25-8.58c5.39 0 8.64 4.4 8.64 4.4' stroke='currentColor' />
    </svg>
  )
}
