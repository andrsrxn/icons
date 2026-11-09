import type { Icon } from './types'

export const IconTextCaseCamel: Icon = ({
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
      data-slot='icon-ui-text-case-camel'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M5.56 18.83c-1.61 0-2.92-1.17-2.92-2.63 0-1.92 1.3-2.62 2.92-2.62h2.91v2.62c0 1.46-1.3 2.63-2.91 2.63'
        stroke='currentColor'
      />
      <path
        d='M3.38 9.98c.74-.96 1.71-1.5 2.97-1.27 1.94.36 2.41 1.6 2.41 3.7v5.29c0 .97.4 1.28.4 1.28'
        stroke='currentColor'
      />
      <path
        d='m11.94 19 2.28-7.75h0c1.12-3.82 1.68-5.72 2.73-5.71 1.04.01 1.55 1.93 2.58 5.78L21.57 19'
        stroke='currentColor'
      />
      <path d='M13.75 13.83h6.2' stroke='currentColor' />
    </svg>
  )
}
