import type { Icon } from './types'

export const IconSunDim: Icon = ({
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
      data-slot='icon-ui-sun-dim'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M3.08 11.98h.87' stroke='currentColor' />
      <path d='M19.92 12h.98' stroke='currentColor' />
      <path d='M12 21v-1.1' stroke='currentColor' />
      <path d='M12 3.96v-.85' stroke='currentColor' />
      <path d='m18.44 5.43.68-.68' stroke='currentColor' />
      <path d='m4.77 19.1.72-.72' stroke='currentColor' />
      <path d='M5.47 5.42 5 4.95' stroke='currentColor' />
      <path d='m19.13 19.09-.7-.71' stroke='currentColor' />
      <circle opacity='.2' cx='11.97' cy='11.99' r='4.93' fill='currentColor' />
      <circle cx='11.97' cy='11.99' r='4.93' stroke='currentColor' />
    </svg>
  )
}
