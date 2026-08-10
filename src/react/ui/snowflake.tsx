import type { Icon } from './types'

export const IconSnowflake: Icon = ({
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
      data-slot='snowflake'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='11.95' r='3' fill='currentColor' />
      <path
        d='m10.1 4-.24.9c-.24.92-.36 1.37-.72 1.58s-.82.09-1.73-.16l-.9-.24m3.59 13.87-.24-.9c-.24-.91-.36-1.37-.72-1.58s-.82-.08-1.73.16l-.9.24M13.8 4l.24.9c.24.92.36 1.37.72 1.58s.82.09 1.73-.16l.9-.24M13.8 19.95l.24-.9c.24-.91.36-1.37.72-1.58s.82-.08 1.73.16l.9.24m-8.47-5.81H3.6m11.48 0h5.33M7.88 4.2 10.66 9M7.88 19.76l2.78-4.8M16.12 4.2 13.34 9m2.78 10.76-2.78-4.8m-8.84-4.9.58.58c.67.67 1 1 1 1.41 0 .42-.33.75-1 1.42l-.58.58m15-3.99-.58.58c-.67.67-1 1-1 1.41 0 .42.33.75 1 1.42l.58.58'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <circle cx='12' cy='11.95' r='3' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}
