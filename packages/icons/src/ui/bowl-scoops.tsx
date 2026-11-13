import type { Icon } from './types'

export const IconBowlScoops: Icon = ({
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
      data-slot='icon-ui-bowl-scoops'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.83 13.13c-.1-.4-.15-.6-.17-.77a2 2 0 0 1 1.67-2.13c.16-.02.37-.02.8-.02H17.9c.41 0 .61 0 .77.02a2 2 0 0 1 1.68 2.13c-.02.16-.06.36-.16.75l-.5 2.07a7.9 7.9 0 0 1-15.35.04z'
        fill='currentColor'
      />
      <path
        d='M11.98 21.24c5.87 0 7.87-4.8 8.56-8.06.26-1.24.39-1.86-.06-2.42s-1.17-.55-2.59-.55H6.11c-1.42 0-2.14 0-2.59.55s-.32 1.18-.06 2.42c.68 3.27 2.68 8.06 8.52 8.06'
        stroke='currentColor'
      />
      <path d='M5.22 21.24h13.56' stroke='currentColor' />
      <path d='M4.6 10.2c0-2.04 1.34-4 3.7-4s3.7 1.96 3.7 4' stroke='currentColor' />
      <path d='M12 10.2c0-2.04 1.34-4 3.7-4s3.7 1.96 3.7 4' stroke='currentColor' />
      <path d='M8.63 6.2c0-1.86 1.22-3.64 3.37-3.64s3.37 1.78 3.37 3.65' stroke='currentColor' />
    </svg>
  )
}
