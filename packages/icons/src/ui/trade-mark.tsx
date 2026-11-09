import type { Icon } from './types'

export const IconTradeMark: Icon = ({
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
      data-slot='icon-ui-trade-mark'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.75 12a10.25 10.25 0 1 0 20.5 0 10.25 10.25 0 0 0-20.5 0'
        fill='currentColor'
      />
      <path d='M1.75 12a10.25 10.25 0 1 1 20.5 0 10.25 10.25 0 0 1-20.5 0' stroke='currentColor' />
      <path
        d='M12.8 15.72v-5.49h0c0-.8 0-1.2.2-1.26s.44.27.89.93l1.05 1.54c.23.34.34.5.5.5s.27-.17.5-.5l.97-1.48c.44-.68.67-1.03.88-.96.22.06.22.47.22 1.29v5.43'
        stroke='currentColor'
      />
      <path d='M7.82 8.97v6.75' stroke='currentColor' />
      <path d='M5.7 8.97h4.24' stroke='currentColor' />
    </svg>
  )
}
