import type { Icon } from './types'

export const IconPlatter: Icon = ({
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
      data-slot='icon-ui-platter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21 17.6H3c0-5.63 4.03-10.18 9-10.18s9 4.55 9 10.17'
        fill='currentColor'
      />
      <path d='M21 17.6c0-5.63-4.03-10.18-9-10.18s-9 4.55-9 10.17' stroke='currentColor' />
      <path d='M12 7.13V4.69' stroke='currentColor' />
      <path d='M22.65 17.6H1.35' stroke='currentColor' />
    </svg>
  )
}
