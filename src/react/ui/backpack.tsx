import type { Icon } from './types'

export const IconBackpack: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-backpack'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.7 9.41c0-2.14 0-3.2.4-4.03a4 4 0 0 1 1.87-1.86c.82-.4 1.9-.4 4.03-.4s3.2 0 4.03.4a4 4 0 0 1 1.86 1.86c.4.82.4 1.9.4 4.03v.84c0 1.86 0 2.8-.5 3.36a2 2 0 0 1-.63.48c-.67.33-1.57.09-3.37-.4l-.73-.2a4 4 0 0 0-1.06-.22c-.27 0-.53.07-1.06.21l-.73.2c-1.8.5-2.7.74-3.37.41a2 2 0 0 1-.64-.48c-.5-.56-.5-1.5-.5-3.36z'
        fill='currentColor'
      />
      <path
        d='M5.7 9.13c0-2.14 0-3.2.4-4.03a4 4 0 0 1 1.87-1.86c.82-.4 1.9-.4 4.03-.4v0c2.14 0 3.2 0 4.03.4A4 4 0 0 1 17.9 5.1c.4.82.4 1.9.4 4.03v8.03c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58H9.71c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.08 6.89A4.3 4.3 0 0 0 12 6.46a4.4 4.4 0 0 0-2.08.43m8.38 7.61a14 14 0 0 0-6.3-1.28c-2.63 0-4.66.57-6.3 1.28m-.38-5.9C3 10.38 2.44 11.85 2.44 13.5c0 1.51 1.13 2.8 2.6 2.8m13.64-7.7c2.32 1.78 2.88 3.25 2.88 4.9 0 1.51-1.13 2.8-2.6 2.8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
