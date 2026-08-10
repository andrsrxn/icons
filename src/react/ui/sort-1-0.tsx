import type { Icon } from './types'

export const IconSort10: Icon = ({
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
      data-slot='sort-1-0'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M14.74 15.28a2 2 0 0 1 4 0v3.03a2 2 0 0 1-4 0z' fill='currentColor' />
      <path
        d='M17 10.7a.75.75 0 1 0 1.5 0h-1.51m.74-7.01h.75a.75.75 0 0 0-1.26-.55zm-3.51 2.28a.75.75 0 1 0 1.03 1.1l-.52-.55zm3.51 4.74h.75V3.69H17v7.02zm-3-4.2.52.55 3-2.82-.52-.55-.51-.55-3 2.83z'
        fill='currentColor'
      />
      <path
        d='m11.45 17.45-.9.9c-1.33 1.33-2 2-2.82 2-.83 0-1.5-.67-2.83-2l-.9-.9M7.73 3.72v16.52'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M14.74 15.28a2 2 0 1 1 4 0v3.03a2 2 0 1 1-4 0z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
