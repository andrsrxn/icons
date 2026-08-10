import type { Icon } from './types'

export const IconNuclearPower: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='nuclear-power'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M7.93 19.47 10 15.1 8.51 13l-4.13.8-.96 1.7 2.57 3.71zm8.14 0L14 15.1l1.49-2.1 4.13.8.96 1.7-2.57 3.71zM13 10.35l2.38-4.16-1.4-2.17-4.27.55L8.6 6.2l2.41 3.79z'
        fill='currentColor'
      />
      <circle
        cx='11.99'
        cy='12.8'
        r='2.46'
        transform='rotate(-120 11.99 12.8)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M10.8 10.35 9.56 8.21c-.6-1.04-.89-1.56-.93-1.98a2 2 0 0 1 1.18-2.04c.39-.17.98-.17 2.18-.17s1.79 0 2.18.17a2 2 0 0 1 1.18 2.04c-.05.42-.34.94-.94 1.98l-1.22 2.14m-2.68 4.71-1.17 2.27c-.55 1.06-.82 1.6-1.15 1.86a2 2 0 0 1-2.33.12c-.36-.23-.69-.72-1.35-1.72s-.98-1.5-1.05-1.92a2 2 0 0 1 1.03-2.1c.37-.2.97-.24 2.16-.32l2.55-.18m4.29 1.99 1.17 2.27c.55 1.06.82 1.6 1.15 1.86a2 2 0 0 0 2.33.12c.36-.23.69-.72 1.35-1.72s.98-1.5 1.05-1.92a2 2 0 0 0-1.03-2.1c-.37-.2-.97-.24-2.16-.32l-2.55-.18'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
