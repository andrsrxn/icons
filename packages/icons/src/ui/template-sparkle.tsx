import type { Icon } from './types'

export const IconTemplateSparkle: Icon = ({
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
      data-slot='icon-ui-template-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.85 6.81c0-1.45 0-2.18.3-2.73.23-.44.6-.8 1.03-1.03.55-.3 1.28-.3 2.73-.3s2.18 0 2.73.3q.67.37 1.03 1.03c.3.55.3 1.28.3 2.73V17.2c0 1.45 0 2.18-.3 2.73q-.37.67-1.03 1.03c-.55.3-1.28.3-2.73.3s-2.18 0-2.73-.3a2.5 2.5 0 0 1-1.03-1.03c-.3-.55-.3-1.28-.3-2.73z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M5.9 21.24c-1.44 0-2.17 0-2.72-.29a2.5 2.5 0 0 1-1.03-1.03c-.3-.55-.3-1.28-.3-2.73V6.8c0-1.45 0-2.18.3-2.73.23-.44.6-.8 1.03-1.03.55-.3 1.28-.3 2.73-.3v0c1.45 0 2.18 0 2.73.3q.67.37 1.03 1.03c.3.55.3 1.28.3 2.73v10.4c0 1.45 0 2.18-.3 2.73q-.37.67-1.03 1.03c-.55.3-1.28.3-2.73.3'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m18.92 15.92-1.14-2.15-1.15 2.15-2.2 1.21 2.2 1.13 1.15 2.5 1.14-2.5 2.38-1.24z'
        fill='currentColor'
      />
      <path d='M17.76 13.3c0 1.9-2.05 3.97-3.97 3.97' stroke='currentColor' />
      <path d='M17.76 13.3c0 1.9 2.07 3.97 3.98 3.97' stroke='currentColor' />
      <path d='M17.76 21.24c0-1.87-2.06-3.97-3.97-3.97' stroke='currentColor' />
      <path d='M17.76 21.24c0-1.9 2.1-3.97 3.98-3.97' stroke='currentColor' />
      <path d='M13.38 9.49h8.77' stroke='currentColor' />
      <path d='M13.38 9.49h2.94' stroke='currentColor' />
      <path d='M13.38 4.46h2.94' stroke='currentColor' />
      <path d='M13.38 4.46h8.77' stroke='currentColor' />
    </svg>
  )
}
