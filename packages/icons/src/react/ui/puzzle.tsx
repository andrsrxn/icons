import type { Icon } from './types'

export const IconPuzzle: Icon = ({
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
      data-slot='ui-icon-puzzle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M18.6 18.68v-.47a.8.8 0 0 0-.81-.83h-.62a2.67 2.67 0 1 1 0-5.33h.62c.45 0 .82-.37.82-.83v-1.3c0-.67 0-1-.08-1.29a2 2 0 0 0-1.36-1.35 5 5 0 0 0-1.29-.08h-.44a.9.9 0 0 1-.92-.92V5.5a2.9 2.9 0 0 0-5.82 0v.78c0 .5-.4.92-.92.92h-.4c-.6 0-.9 0-1.15.06A2 2 0 0 0 4.8 8.7c-.07.25-.07.55-.07 1.16v7.42c0 1.88 0 2.82.59 3.41.58.59 1.53.59 3.41.59h7.28c.56 0 .83 0 1.06-.06a2 2 0 0 0 1.48-1.48c.06-.23.06-.5.06-1.06'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M18.6 18.68v-.47a.8.8 0 0 0-.81-.83h-.62a2.67 2.67 0 1 1 0-5.33h.62c.45 0 .82-.37.82-.83v-1.3c0-.67 0-1-.08-1.29a2 2 0 0 0-1.36-1.35 5 5 0 0 0-1.29-.08h-.44a.9.9 0 0 1-.92-.92V5.5a2.9 2.9 0 0 0-5.82 0v.78c0 .5-.4.92-.92.92h-.4c-.6 0-.9 0-1.15.06A2 2 0 0 0 4.8 8.7c-.07.25-.07.55-.07 1.16v7.42c0 1.88 0 2.82.59 3.41.58.59 1.53.59 3.41.59h7.28c.56 0 .83 0 1.06-.06a2 2 0 0 0 1.48-1.48c.06-.23.06-.5.06-1.06'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
