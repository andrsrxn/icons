import type { Icon } from './types'

export const IconSplit: Icon = ({
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
      data-slot='icon-ui-split'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m9.5 19.44-.73.73c-1.33 1.33-2 2-2.83 2s-1.5-.67-2.83-2l-.73-.73'
        stroke='currentColor'
      />
      <path
        d='m21.62 19.44-.73.73c-1.33 1.33-2 2-2.83 2-.82 0-1.5-.67-2.83-2l-.72-.73'
        stroke='currentColor'
      />
      <path d='M12 1.74v8.13' stroke='currentColor' />
      <path
        d='M5.9 21.72V18.9c0-1.75 0-2.63.35-3.4.34-.78.99-1.36 2.29-2.54L12 9.83'
        stroke='currentColor'
      />
      <path
        d='M18.06 21.72V18.8c0-1.75 0-2.62-.34-3.4s-.99-1.35-2.28-2.53l-3.35-3.03'
        stroke='currentColor'
      />
    </svg>
  )
}
