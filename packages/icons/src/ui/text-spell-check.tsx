import type { Icon } from './types'

export const IconTextSpellCheck: Icon = ({
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
      data-slot='icon-ui-text-spell-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M4.39 20.36 8.8 7.2c.8-2.35 1.19-3.52 1.9-3.52.73 0 1.12 1.18 1.9 3.53l1.24 3.73 1.53 4.83'
        stroke='currentColor'
      />
      <path d='M14.68 13.52h-8' stroke='currentColor' />
      <path
        d='m13.58 19.32.51.65c.73.9 1.09 1.36 1.57 1.36.49 0 .85-.46 1.57-1.37l2.84-3.6'
        stroke='currentColor'
      />
    </svg>
  )
}
