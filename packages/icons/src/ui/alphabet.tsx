import type { Icon } from './types'

export const IconAlphabet: Icon = ({
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
      data-slot='icon-ui-alphabet'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m8.87 10.4 1.4-5.02c.74-2.47 1.07-3.73 1.75-3.72S13.13 2.9 13.8 5.4l1.33 4.98'
        stroke='currentColor'
      />
      <path d='M10.05 7.04h4.03' stroke='currentColor' />
      <path
        d='M5.53 13h1.45c1.18 0 2.13.95 2.13 2.13 0 1.17-.72 2.13-2.63 2.13h.8a2.48 2.48 0 0 1 0 4.97H5.65m.03 0c-.69 0-1.03 0-1.28-.18a1 1 0 0 1-.23-.23C4 21.57 4 21.23 4 20.54v-5.86c0-.69 0-1.03.17-1.28a1 1 0 0 1 .23-.23C4.65 13 5 13 5.68 13'
        stroke='currentColor'
      />
      <path d='M20.34 13.68a4.52 4.52 0 1 0 0 8.05' stroke='currentColor' />
    </svg>
  )
}
