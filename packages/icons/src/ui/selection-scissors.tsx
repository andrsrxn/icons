import type { Icon } from './types'

export const IconSelectionScissors: Icon = ({
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
      data-slot='icon-ui-selection-scissors'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.3 2.7c3.78 0 5.66 0 6.83 1.17 1.18 1.17 1.18 3.05 1.18 6.82v3.32c0 .47-.2.91-.55 1.23l-.38.35c-.65.6-.52 1.66.25 2.08.42.23.68.66.68 1.14v.45c0 1.13-.92 2.05-2.05 2.05h-.39c-.45 0-.88-.2-1.17-.56l-.2-.25a1.28 1.28 0 0 0-2.1.17c-.23.4-.65.64-1.11.64h-3.76c-3.61 0-5.42 0-6.57-1.08l-.19-.19C2.7 18.89 2.7 17.08 2.7 13.47V10.7c0-3.77 0-5.65 1.18-6.82C5.05 2.7 6.93 2.7 10.7 2.7h2.62'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M6.03 2.66h-.08A3.25 3.25 0 0 0 2.7 5.92' stroke='currentColor' />
      <path d='M17.98 2.66h.07c1.8 0 3.25 1.46 3.25 3.26' stroke='currentColor' />
      <path d='M6.03 21.24h-.08A3.25 3.25 0 0 1 2.7 18' stroke='currentColor' />
      <path d='M2.76 10.14v3.57' stroke='currentColor' />
      <path d='M21.24 10.14v1.05' stroke='currentColor' />
      <path d='M10.22 21.14h1.24' stroke='currentColor' />
      <path d='M10.22 2.67h3.57' stroke='currentColor' />
      <path
        d='M17.8 22.2a1.63 1.63 0 1 1-2.32-2.32 1.63 1.63 0 0 1 2.31 2.31'
        stroke='currentColor'
      />
      <path d='M22.18 17.8a1.63 1.63 0 1 1-2.3-2.3 1.63 1.63 0 0 1 2.3 2.3' stroke='currentColor' />
      <path d='m19.28 16.49-7.82-.64' stroke='currentColor' />
      <path d='m15.78 11.53.63 7.82' stroke='currentColor' />
    </svg>
  )
}
