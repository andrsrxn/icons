import type { Icon } from './types'

export const IconTextFontVariable: Icon = ({
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
      data-slot='icon-ui-text-font-variable'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='18.05'
        r='2.56'
        transform='rotate(-90 12 18.05)'
        fill='currentColor'
      />
      <circle cx='12' cy='18.05' r='2.56' transform='rotate(-90 12 18.05)' stroke='currentColor' />
      <path d='M22.26 18.05h-7.7' stroke='currentColor' />
      <path d='M9.44 18.05h-7.7' stroke='currentColor' />
      <path d='M6.43 3.38v9.47' stroke='currentColor' />
      <path d='M17.57 3.38v9.47' stroke='currentColor' />
      <path d='M8 12.85H4.86' stroke='currentColor' />
      <path d='M19.14 12.85H16' stroke='currentColor' />
      <path d='M10.26 4.49c0-.61-.5-1.1-1.1-1.1H3.7c-.61 0-1.1.49-1.1 1.1' stroke='currentColor' />
      <path d='M21.4 4.49c0-.61-.5-1.1-1.1-1.1h-5.46c-.6 0-1.1.49-1.1 1.1' stroke='currentColor' />
    </svg>
  )
}
