import type { Icon } from './types'

export const IconBrightness: Icon = ({
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
      data-slot='icon-ui-brightness'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M11.95 17.54a5.56 5.56 0 1 0 0-11.11z' fill='currentColor' />
      <circle cx='11.97' cy='11.99' r='5.56' stroke='currentColor' />
      <path d='M1.56 11.99H3.5' stroke='currentColor' />
      <path d='M20.51 12h1.93' stroke='currentColor' />
      <path d='M12 22.34v-1.7' stroke='currentColor' />
      <path d='M12 3.42V1.66' stroke='currentColor' />
      <path d='M12 17.54V6.43' stroke='currentColor' />
      <path d='m18.86 5 1.16-1.15' stroke='currentColor' />
      <path d='m4 19.87 1.05-1.05' stroke='currentColor' />
      <path d='M5.08 5.04 3.9 3.85' stroke='currentColor' />
      <path d='m20.01 19.97-1.11-1.11' stroke='currentColor' />
    </svg>
  )
}
