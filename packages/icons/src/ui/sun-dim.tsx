import type { Icon } from './types'

export const IconSunDim: Icon = ({
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
      data-slot='icon-ui-sun-dim'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M3.37 11.99h.84' stroke='currentColor' />
      <path d='M19.66 12h.95' stroke='currentColor' />
      <path d='M11.96 20.72v-1.07' stroke='currentColor' />
      <path d='M11.96 4.23V3.4' stroke='currentColor' />
      <path d='m18.23 5.65.66-.66' stroke='currentColor' />
      <path d='m5 18.87.7-.7' stroke='currentColor' />
      <path d='m5.68 5.64-.46-.46' stroke='currentColor' />
      <path d='m18.9 18.86-.68-.69' stroke='currentColor' />
      <circle
        opacity='.2'
        cx='11.97'
        cy='11.99'
        r='4.73'
        transform='rotate(90 11.97 11.99)'
        fill='currentColor'
      />
      <circle
        cx='11.97'
        cy='11.99'
        r='4.73'
        transform='rotate(90 11.97 11.99)'
        stroke='currentColor'
      />
    </svg>
  )
}
