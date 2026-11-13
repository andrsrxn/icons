import type { Icon } from './types'

export const IconSelectionCamera: Icon = ({
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
      data-slot='icon-ui-selection-camera'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.3 2.7c3.78 0 5.66 0 6.83 1.17 1.18 1.17 1.18 3.05 1.18 6.82v5.25l-2.75-1.4-1.31-1.24h-3.18l-1.29 1.03-2.32 1.2v5.78c-3.54 0-5.32 0-6.46-1.05L3.74 20c-1.05-1.14-1.05-2.92-1.05-6.46v-2.85c0-3.77 0-5.65 1.18-6.82 1.17-1.18 3.05-1.18 6.82-1.18h2.62'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M6.03 2.66h-.08A3.25 3.25 0 0 0 2.7 5.92' stroke='currentColor' />
      <path d='M17.98 2.66h.07c1.8 0 3.25 1.46 3.25 3.26' stroke='currentColor' />
      <path d='M6.03 21.24h-.08A3.25 3.25 0 0 1 2.7 18' stroke='currentColor' />
      <path d='M2.76 10.14v3.57' stroke='currentColor' />
      <path d='M21.3 9.63v1.29' stroke='currentColor' />
      <path d='M10.22 2.67h3.57' stroke='currentColor' />
      <path
        d='M15.58 13.18h1.16c.52 0 1.01.28 1.28.73l.04.07c.25.4.69.66 1.17.66 1 0 1.8.8 1.8 1.8v3.23c0 .49 0 .73-.04.93a2 2 0 0 1-1.55 1.55c-.2.04-.44.04-.92.04h-5.87c-.48 0-.72 0-.92-.04a2 2 0 0 1-1.56-1.55c-.04-.2-.04-.44-.04-.93v-3.23c0-1 .81-1.8 1.8-1.8.49 0 .93-.26 1.18-.67l.03-.06c.27-.45.75-.73 1.28-.73z'
        stroke='currentColor'
      />
      <circle cx='15.58' cy='18.27' r='1.57' stroke='currentColor' />
    </svg>
  )
}
