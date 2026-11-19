import type { Icon } from './types'

export const IconTextLineHeight: Icon = ({
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
      data-slot='icon-ui-text-line-height'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.06 2.72H2.94' stroke='currentColor' />
      <path d='M21.06 21.28H2.94' stroke='currentColor' />
      <path
        d='m7.52 17.92 2.12-7.2h0c1.05-3.55 1.57-5.32 2.54-5.31s1.44 1.8 2.4 5.37l1.9 7.14'
        stroke='currentColor'
      />
      <path d='M9.2 13.12h5.77' stroke='currentColor' />
    </svg>
  )
}
