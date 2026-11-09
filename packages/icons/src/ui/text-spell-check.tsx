import type { Icon } from './types'

export const IconTextSpellCheck: Icon = ({
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
      data-slot='icon-ui-text-spell-check'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m13.58 19.32.51.65c.73.9 1.09 1.36 1.57 1.36.49 0 .85-.46 1.57-1.37l2.84-3.6'
        stroke='currentColor'
      />
      <path
        d='m4.7 20.37 2.83-9.64h0C8.92 6 9.62 3.62 10.92 3.63s1.93 2.4 3.2 7.19h0l1.52 5.68'
        stroke='currentColor'
      />
      <path d='M6.94 13.94h7.72' stroke='currentColor' />
    </svg>
  )
}
