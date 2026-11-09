import type { Icon } from './types'

export const IconTemplate: Icon = ({
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
      data-slot='icon-ui-template'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.73 6.81c0-1.45 0-2.18.3-2.73q.36-.67 1.03-1.03c.55-.3 1.27-.3 2.73-.3 1.45 0 2.17 0 2.72.3q.67.37 1.04 1.03c.29.55.29 1.28.29 2.73V17.2c0 1.45 0 2.18-.3 2.73q-.36.67-1.03 1.03c-.55.3-1.27.3-2.72.3s-2.18 0-2.73-.3a2.5 2.5 0 0 1-1.04-1.03c-.29-.55-.29-1.28-.29-2.73z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M5.79 21.24c-1.46 0-2.18 0-2.73-.29a2.5 2.5 0 0 1-1.04-1.03c-.29-.55-.29-1.28-.29-2.73V6.8c0-1.45 0-2.18.3-2.73q.36-.67 1.03-1.03c.55-.3 1.27-.3 2.73-.3v0c1.45 0 2.17 0 2.72.3q.67.37 1.04 1.03c.29.55.29 1.28.29 2.73v10.4c0 1.45 0 2.18-.3 2.73q-.36.67-1.03 1.03c-.55.3-1.27.3-2.72.3'
        stroke='currentColor'
      />
      <path d='M13.5 19.54h8.77' stroke='currentColor' />
      <path d='M13.5 14.51h8.77' stroke='currentColor' />
      <path d='M13.5 9.49h8.77' stroke='currentColor' />
      <path d='M13.5 4.46h8.77' stroke='currentColor' />
    </svg>
  )
}
