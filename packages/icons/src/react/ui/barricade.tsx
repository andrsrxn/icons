import type { Icon } from './types'

export const IconBarricade: Icon = ({
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
      data-slot='icon-ui-barricade'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m2.23 15.7 3.6-8.4a1 1 0 0 0-.97-1.4l-1.88.07A1 1 0 0 0 2 7l.16 9.03a1 1 0 0 1 .06-.32'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m21.5 6.79-3.58 8.4a1 1 0 0 0 .95 1.4l1.9-.08a1 1 0 0 0 .95-1.02l-.15-9.03a1 1 0 0 1-.07.33'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m12.8 15.83 3.65-8.85a1 1 0 0 0-.93-1.38h-3.56a1 1 0 0 0-.93.63l-3.5 8.85a1 1 0 0 0 .92 1.37h3.42a1 1 0 0 0 .92-.62'
        fill='currentColor'
      />
      <rect x='1.73' y='5.76' width='20.54' height='10.89' rx='2' stroke='currentColor' />
      <path d='M6.44 16.74v2.9' stroke='currentColor' />
      <path d='M17.56 16.74v2.9' stroke='currentColor' />
      <path d='m6.21 6.28-4 9.48' stroke='currentColor' />
      <path d='m11.29 6.28-4 10.17' stroke='currentColor' />
      <path d='m16.45 6.28-4 10.17' stroke='currentColor' />
      <path d='m21.74 6.87-3.95 9.25' stroke='currentColor' />
    </svg>
  )
}
