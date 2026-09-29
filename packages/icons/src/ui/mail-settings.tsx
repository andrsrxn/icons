import type { Icon } from './types'

export const IconMailSettings: Icon = ({
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
      data-slot='icon-ui-mail-settings'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.09 8.55c0-1.87 0-2.81.58-3.08s1.3.34 2.72 1.56l5.48 4.68c.62.53.93.8 1.3.8s.68-.27 1.3-.8l5.48-4.68c1.42-1.22 2.13-1.83 2.72-1.56.58.27.58 1.2.58 3.08v8.84l-1.5-1.16c-.53-.41-.8-.62-1.1-.63s-.6.15-1.17.5l-1.5.91.96 2.99H8.09c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M22.25 11.04V10c0-2.83 0-4.24-.88-5.12S19.07 4 16.25 4h-8.5c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v4c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h4.3'
        stroke='currentColor'
      />
      <path
        d='m3.34 5.1 4.47 4.5c2 2.02 3 3.03 4.26 3.03 1.24 0 2.25-1 4.25-3.02l4.49-4.5'
        stroke='currentColor'
      />
      <circle
        cx='19.46'
        cy='17.7'
        r='2.25'
        transform='rotate(-90 19.46 17.7)'
        stroke='currentColor'
      />
      <path d='M16 17.71h1.06' stroke='currentColor' />
      <path d='m21.2 14.7-.58.96' stroke='currentColor' />
      <path d='m21.73 17.7 1.2-.01' stroke='currentColor' />
      <path d='m17.72 20.7.55-.9' stroke='currentColor' />
      <path d='m21.17 20.73-.43-.76' stroke='currentColor' />
      <path d='m18.1 15.43-.42-.76' stroke='currentColor' />
    </svg>
  )
}
