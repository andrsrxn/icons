import type { Icon } from './types'

export const IconCashback: Icon = ({
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
      data-slot='icon-ui-cashback'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='11.98' cy='12' r='9.25' fill='currentColor' />
      <path
        d='M14.6 9.46c-.24-.76-1.32-1.34-2.6-1.34s-2.68.5-2.68 2.02c0 2.98 5.12.66 5.35 3.6.11 1.4-1.37 2.15-2.67 2.15-1.31 0-2.26-.59-2.68-1.37'
        stroke='currentColor'
      />
      <path d='M12 8.12V7.01' stroke='currentColor' />
      <path d='M12 17v-1.11' stroke='currentColor' />
      <path
        d='M2.72 5.3v1.22c0 1.14 0 1.7.35 2.05.36.36.92.36 2.06.36h1.21'
        stroke='currentColor'
      />
      <path
        d='M4.96 17.8a9.17 9.17 0 1 0 7.1-14.98c-5.07 0-7.4 4.04-8.45 5.47'
        stroke='currentColor'
      />
    </svg>
  )
}
