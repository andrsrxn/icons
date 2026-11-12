import type { Icon } from './types'

export const IconSun: Icon = ({
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
      data-slot='icon-ui-sun'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='11.97' cy='11.99' r='4.93' fill='currentColor' />
      <circle cx='11.97' cy='11.99' r='4.93' stroke='currentColor' />
      <path d='M1.56 11.99H3.9' stroke='currentColor' />
      <path d='M20.01 12h2.43' stroke='currentColor' />
      <path d='M12 22.34v-2.19' stroke='currentColor' />
      <path d='M12 3.85V1.66' stroke='currentColor' />
      <path d='m18.36 5.5 1.66-1.65' stroke='currentColor' />
      <path d='m4 19.87 1.46-1.46' stroke='currentColor' />
      <path d='M5.46 5.41 3.9 3.85' stroke='currentColor' />
      <path d='m20.01 19.97-1.51-1.52' stroke='currentColor' />
    </svg>
  )
}
