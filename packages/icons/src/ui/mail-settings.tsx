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
        d='M2.09 8.55c0-1.87 0-2.81.58-3.08s1.3.34 2.72 1.56l5.48 4.68c.62.53.93.8 1.3.8s.68-.27 1.3-.8l5.48-4.68c1.42-1.22 2.13-1.83 2.72-1.56.58.27.58 1.2.58 3.08v7.56l-1.42-.24q-.24-.05-.34-.05c-.09 0-.17.02-.34.05l-2.21.4L16.72 20H8.1c-2.83 0-4.24 0-5.12-.88S2.1 16.82 2.1 14z'
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
        cx='19.45'
        cy='17.7'
        r='2.25'
        transform='rotate(-60 19.45 17.7)'
        stroke='currentColor'
      />
      <path d='m16.45 15.98.92.54' stroke='currentColor' />
      <path d='m22.46 15.98-.98.54' stroke='currentColor' />
      <path d='m21.42 18.84 1.04.59' stroke='currentColor' />
      <path d='m16.45 19.43.92-.5' stroke='currentColor' />
      <path d='M19.42 21.18v-.87' stroke='currentColor' />
      <path d='M19.42 15.06v-.87' stroke='currentColor' />
    </svg>
  )
}
